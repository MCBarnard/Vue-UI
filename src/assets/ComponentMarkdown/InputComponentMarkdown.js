export default `<template>
<div>
  <div
    :class="[
      'input-field',
      { 'full-width': full },
      { dark: dark },
      { active: focussingInput },
      variant,
      { disabled: disabled },
    ]"
  >
    <input
      :autofocus="autofocus"
      :type="type"
      name=""
      required=""
      autocomplete="off"
      data-lpignore="true"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="blurInput"
      @focus="focusInput"
    />

    <label :class="[{ danger: subTextColor === 'danger' }]">{{
      label
    }}</label>
  </div>
  <div
    :class="[
      'sub-text',
      { show: showSubText },
      variant,
      subTextColor,
      { dark: dark },
      { 'full-width': full },
    ]"
  >
    {{ subText }}
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    manualFocus: false,
    dark: false, // true / false
  };
},
methods: {
  focusInput() {
    this.manualFocus = true;
    this.$emit("focus");
  },
  blurInput() {
    this.manualFocus = false;
    this.$emit("blur");
  },
},
computed: {
  focussingInput() {
    return this.focussing || this.manualFocus;
  },
},
props: {
  focussing: Boolean,
  value: String,
  full: Boolean,
  label: String,
  placeholder: String,
  subText: String,
  variant: String, // "", info, success, warning, danger, disabled
  showSubText: Boolean, // true / false,
  disabled: Boolean, // true / false,
  subTextColor: String, // "", sub, success, danger
  type: String, // text, date, number
  autofocus: Boolean, // true / false
},
};
</script>

<style scoped lang="scss">
$default-color: #a900ff;
$info-color: #218afa;
$success-color: #00b014;
$warning-color: #e3a700;
$danger-color: #e20404;

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

.input-field {
position: relative;
width: 320px;
margin-top: 30px;

&:after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: $default-color;
  left: 0;
  bottom: 0;
  transition: $trans-04;
}

&.active {
  &:after {
    width: 100%;
  }

  label {
    color: $light-theme-text-color;
  }
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: $light-theme-text-color;
  border: none;
  border-bottom: 1px solid $light-theme-border-color;
  outline: none;
  background: $light-theme-background-color;
  box-sizing: border-box;
  box-shadow: 0 0 5px -2px #d0d0d0;

  &:focus ~ label {
    color: $default-color;
  }
}

label {
  box-sizing: border-box;
  position: absolute;
  padding: 10px 0;
  color: $light-theme-text-color;
  pointer-events: none;
  transition: 0.5s;
  top: -30px;
  left: 0;
  font-size: 12px;

  &.danger {
    color: $danger-color;
  }
}

&.full-width {
  width: 100%;
}

&.info {
  &:after {
    background: $info-color;
  }

  input {
    &:focus ~ label {
      color: $info-color;
    }
  }
}

&.success {
  &:after {
    background: $success-color;
  }

  input {
    &:focus ~ label {
      color: $success-color;
    }
  }
}

&.warning {
  &:after {
    background: $warning-color;
  }

  input {
    &:focus ~ label {
      color: $warning-color;
    }
  }
}

&.danger {
  &:after {
    background: $danger-color;
  }

  input {
    &:focus ~ label {
      color: $danger-color;
    }
  }
}

&.disabled {
  cursor: not-allowed;

  input {
    background: $disabled-light-background;
    cursor: not-allowed;
  }

  label {
    color: $disabled-light-color;
  }
}

&.dark {
  input {
    color: $dark-theme-text-color;
    border-bottom: 1px solid $dark-theme-border-color;
    background: $dark-theme-background-color;

    &:focus ~ label,
    &:valid ~ label {
      top: -30px;
      left: 0;
      font-size: 12px;
    }

    &:focus ~ label {
      color: $default-color;
    }
  }

  label {
    color: $dark-theme-text-color;

    &.danger {
      color: $danger-color;
    }
  }

  &.info {
    &:after {
      background: $info-color;
    }

    input {
      &:focus ~ label {
        color: $info-color;
      }
    }
  }

  &.success {
    &:after {
      background: $success-color;
    }

    input {
      &:focus ~ label {
        color: $success-color;
      }
    }
  }

  &.warning {
    &:after {
      background: $warning-color;
    }

    input {
      &:focus ~ label {
        color: $warning-color;
      }
    }
  }

  &.danger {
    &:after {
      background: $danger-color;
    }

    input {
      &:focus ~ label {
        color: $danger-color;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;

    input {
      background: $disabled-dark-background;
      cursor: not-allowed;
    }

    label {
      color: $disabled-dark-color;
    }
  }
}
}

.sub-text {
font-size: 12px;
margin-top: 8px;
color: $default-color;
opacity: 0;
pointer-events: none;
transition: $trans-04;
width: 320px;

&.full-width {
  width: 100%;
}

&.show {
  opacity: 1;
}

&.info {
  color: $info-color;
}

&.warning {
  color: $warning-color;
}

&.success {
  color: $success-color;
}

&.danger {
  color: $danger-color;
}

&.sub {
  color: $light-theme-subtext-sub-color;
}

&.dark {
  &.sub {
    color: $dark-theme-subtext-sub-color;
  }
}
}
</style>
`;
