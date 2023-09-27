export default `<template>
<div
  :ref="rand + '-dropdown'"
  :id="rand + '-dropdown'"
  :class="[
    'dropdown-component',
    { focussing: shouldFocus },
    variant,
    { disabled },
  ]"
>
  <button
    :class="[
      'dropdown-btn',
      { active: opened },
      { focussing: shouldFocus },
      variant,
      { disabled },
    ]"
    @click="toggleDropdown"
  >
    {{ computedDisplayText }}
    <div
      :class="['caret', { focussing: shouldFocus }, variant, { disabled }]"
    >
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </button>
  <div
    :id="rand + '-menu'"
    :class="[
      'dropdown',
      { active: opened },
      { disabled },
      { full: computedFull },
    ]"
  >
    <ul v-if="computedItems">
      <li
        v-for="(item, key) in computedItems"
        :key="key"
        @click="() => selectItem(item.value)"
        :class="[{ disabled }]"
      >
        {{ item.text }}
      </li>
    </ul>
    <ul v-else>
      <li class="no-items">No items in this dropdown</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    opened: false,
    rand: \`id-\${(Math.random() + 1).toString(36).substring(2)}\`,
    maxHeight: 300,
    value: "",
    focussing: false,
  };
},
props: [
  "items",
  "selected",
  "variant",
  "disabled",
  "full",
  "placeholder",
  "maxDropDownheight",
  "focus",
],
computed: {
  shouldFocus() {
    return this.overRideFocus || this.focussing;
  },
  overRideFocus() {
    return this.focus;
  },
  computedMaxHeight() {
    if (this.maxDropDownheight) return this.maxDropDownheight;
    return 250;
  },
  computedItems() {
    return this.items;
  },
  computedFull() {
    return this.full;
  },
  computedDisplayText() {
    if (this.selectedItemObject && this.selectedItemObject.text) {
      return this.selectedItemObject.text;
    } else if (this.placeholder) {
      return this.placeholder;
    }
    return "Select an option";
  },
  selectedItemObject() {
    return this.computedItems.find((item) => item.value === this.value);
  },
},
mounted() {
  window.addEventListener("click", this.listener);
},
unmounted() {
  window.removeEventListener("click", this.listener);
},
methods: {
  clickedOutsideOfRef(clickedElement, targetRef, callback) {
    if (
      !(
        clickedElement.target === targetRef ||
        clickedElement.composedPath().includes(targetRef)
      )
    ) {
      callback();
    }
  },
  listener(event) {
    this.clickedOutsideOfRef(
      event,
      this.$refs[this.rand + "-dropdown"],
      () => {
        this.opened = false;
        const panel = document.getElementById(this.rand + "-menu");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          this.focussing = false;
          this.$emit("closed");
        }
      }
    );
  },
  selectItem(value) {
    this.value = value;
    this.$emit("selected", this.selectedItemObject);
    this.toggleDropdown();
  },
  toggleDropdown() {
    if (this.disabled) return;
    this.opened = !this.opened;
    if (this.opened) {
      this.$emit("opened");
    } else {
      this.$emit("closed");
    }
    const panel = document.getElementById(this.rand + "-menu");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.focussing = false;
    } else {
      this.focussing = true;
      if (
        this.computedMaxHeight &&
        panel.scrollHeight > Number(this.computedMaxHeight)
      ) {
        panel.style.maxHeight = this.computedMaxHeight + "px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  },
},
watch: {
  selected(value) {
    this.value = value;
  },
},
};
</script>

<style scoped lang="scss">
$default-color: #a900ff;
$info-color: #218afa;
$success-color: #00b014;
$warning-color: #e3a700;
$danger-color: #e20404;
$disabled-color: #c4c4c4;

$disabled-light-color: #c7c7c7;
$disabled-dark-color: #717171;
$disabled-light-background: #f2f2f2;
$disabled-dark-background: #303030;

$light-theme-text-color: #000;
$dark-theme-text-color: #828282;
$light-theme-background-color: #fcfcfc;
$dark-theme-background-color: #262222;
$light-theme-border-color: grey;
$dark-theme-border-color: grey;

$light-theme-subtext-sub-color: #c4c4c4;
$dark-theme-subtext-sub-color: #625f5f;
$light-theme-subtext-danger-color: grey;
$dark-theme-subtext-danger-color: grey;

$light-theme-background: #fff;
$dark-theme-background: #262222;

$trans-04: all 0.4s ease;

.dropdown {
position: relative;
width: 320px;
border-bottom: 1px solid grey;
overflow: auto;
max-height: 0;
transition: $trans-04;
background: #ffffff;

&.full {
  width: 100%;
}

&.disabled {
  border-bottom: 1px solid $disabled-color;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
    }

    &:hover {
      background: $light-theme-background-color;
    }

    &.no-items {
      background: #eaeaea;
    }
  }
}

&-component {
  box-shadow: 0 0 5px -2px #d0d0d0;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: $trans-04;
    background-color: $default-color;

    &.disabled {
      border-bottom: 1px solid $disabled-color;
    }
  }

  &.info:after {
    background-color: $info-color;
  }

  &.success:after {
    background-color: $success-color;
  }

  &.warning:after {
    background-color: $warning-color;
  }

  &.danger:after {
    background-color: $danger-color;
  }

  &.disabled {
    background-color: $disabled-color;
  }

  &.focussing {
    &:after {
      width: 100%;
    }
  }
}

&-btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: $light-theme-text-color;
  border: none;
  outline: none;
  background: $light-theme-background-color;
  box-sizing: border-box;
  cursor: pointer;
  text-align: start;
  position: relative;
  min-height: 40px;

  &.disabled {
    cursor: not-allowed;
    color: $disabled-color;
  }

  &.focussing {
    color: $default-color;

    &.info {
      color: $info-color;
    }

    &.success {
      color: $success-color;
    }

    &.warning {
      color: $warning-color;
    }

    &.danger {
      color: $danger-color;
    }

    &.disabled {
      color: $disabled-color;
    }
  }

  .caret {
    position: absolute;
    top: 10px;
    right: 5px;
    pointer-events: none;
    transition: all 0.2s ease;
    transform: rotate(0deg);

    &.focussing {
      color: $default-color;

      &.info {
        color: $info-color;
      }

      &.success {
        color: $success-color;
      }

      &.warning {
        color: $warning-color;
      }

      &.danger {
        color: $danger-color;
      }

      &.disabled {
        color: $disabled-color;
      }
    }
  }

  &.active {
    .caret {
      transform: translateY(-8px) rotate(-180deg);
    }
  }
}

.active {
  background: grey;
}
}
</style>
`;
