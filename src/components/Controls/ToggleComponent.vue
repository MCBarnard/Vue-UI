<template>
  <div
    :class="[
      'toggle-container',
      { dark: dark },
      { reverse: labelBehind },
      size,
      variant,
      { disabled: disabled },
    ]"
  >
    <p v-if="label" @click="toggleButton">{{ label }}</p>
    <input
      @change="toggled"
      :disabled="disabled"
      :checked="computedState"
      type="checkbox"
      :id="computedName"
    />
    <label :for="computedName"></label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cleanName: "",
    };
  },
  mounted() {
    this.cleanName = this.name || this.generateRandomLetters(5);
  },
  props: {
    state: Boolean, // true / false
    label: String, // ""
    labelBehind: Boolean, // true / false
    size: String, // "" / small / medium / large
    variant: String, // "" / info / success / warning / danger
    dark: Boolean, // true / false
    disabled: Boolean, // true / false,
    name: String,
  },
  methods: {
    toggleButton() {
      if (this.disabled) return;
      this.toggled();
    },
    toggled() {
      this.$emit("toggle", this.state);
    },
    generateRandomLetters(length) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let result = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        result += letters.charAt(randomIndex);
      }

      return result;
    },
  },
  computed: {
    computedState() {
      return this.state;
    },
    computedName() {
      return this.cleanName;
    },
  },
};
</script>

<style scoped lang="scss">
// =========== Colors ================== //
$default-text-color: #000;
$dark-text-color: #fff;
$default-slider-color: #fff;
$dark-slider-color: #3d3d3d;
$default-slider-tray-color: grey;
$dark-slider-tray-color: grey;
$default-theme-color: #d400ff;
$info-theme-color: #0094f9;
$success-theme-color: #00ff00;
$warning-theme-color: #ffb000;
$danger-theme-color: #ff0000;
$disabled-theme-color: #b5b5b5;

// =========== Sizes ================== //

$small-label-width: 30px;
$small-label-height: 16px;
$small-position-from: 1px;
$small-label-border-radius: 100px;
$small-label-slider-top: 1px;
$small-label-slider-left: 2px;
$small-label-slider-size: 14px;
$small-label-line-height: 18px;
$small-label-font-size: 12px;
$small-label-toggle-gap: 4px;

$medium-label-width: 45px;
$medium-label-height: 26px;
$medium-position-from: 5px;
$medium-label-border-radius: 100px;
$medium-label-slider-top: 3px;
$medium-label-slider-left: 3px;
$medium-label-slider-size: 20px;
$medium-label-line-height: 30px;
$medium-label-font-size: 18px;
$medium-label-toggle-gap: 8px;

$large-label-width: 70px;
$large-label-height: 36px;
$large-position-from: 5px;
$large-label-border-radius: 100px;
$large-label-slider-top: 3px;
$large-label-slider-left: 3px;
$large-label-slider-size: 30px;
$large-label-line-height: 40px;
$large-label-font-size: 30px;
$large-label-toggle-gap: 12px;

// light mode
$default-background-active: $default-theme-color;
$default-background: $default-slider-tray-color;
$default-slider-background: $default-slider-color;
$default-label-color: $default-text-color;

$info-background-active: $info-theme-color;
$info-background: $default-slider-tray-color;
$info-slider-background: $default-slider-color;
$info-label-color: $default-text-color;

$success-background-active: $success-theme-color;
$success-background: $default-slider-tray-color;
$success-slider-background: $default-slider-color;
$success-label-color: $default-text-color;

$warning-background-active: $warning-theme-color;
$warning-background: $default-slider-tray-color;
$warning-slider-background: $default-slider-color;
$warning-label-color: $default-text-color;

$danger-background-active: $danger-theme-color;
$danger-background: $default-slider-tray-color;
$danger-slider-background: $default-slider-color;
$danger-label-color: $default-text-color;

$disabled-background-active: $disabled-theme-color;
$disabled-background: $default-slider-tray-color;
$disabled-slider-background: $default-slider-color;
$disabled-label-color: $default-text-color;

// Dark mode
$dark-default-background-active: $default-theme-color;
$dark-default-background: $dark-slider-tray-color;
$dark-default-slider-background: $dark-slider-color;
$dark-default-label-color: $dark-text-color;

$dark-info-background-active: $info-theme-color;
$dark-info-background: $dark-slider-tray-color;
$dark-info-slider-background: $dark-slider-color;
$dark-info-label-color: $dark-text-color;

$dark-success-background-active: $success-theme-color;
$dark-success-background: $dark-slider-tray-color;
$dark-success-slider-background: $dark-slider-color;
$dark-success-label-color: $dark-text-color;

$dark-warning-background-active: $warning-theme-color;
$dark-warning-background: $dark-slider-tray-color;
$dark-warning-slider-background: $dark-slider-color;
$dark-warning-label-color: $dark-text-color;

$dark-danger-background-active: $danger-theme-color;
$dark-danger-background: $dark-slider-tray-color;
$dark-danger-slider-background: $dark-slider-color;
$dark-danger-label-color: $dark-text-color;

$dark-disabled-background-active: $disabled-theme-color;
$dark-disabled-background: $dark-slider-tray-color;
$dark-disabled-slider-background: $dark-slider-color;
$dark-disabled-label-color: $dark-text-color;

.toggle-container {
  display: flex;
  gap: $medium-label-toggle-gap;

  &.reverse {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  p {
    line-height: $medium-label-line-height;
    font-size: $medium-label-font-size;
    margin: 0;
    cursor: pointer;
    color: $default-label-color;
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: $medium-label-width;
    height: $medium-label-height;
    background: $default-background;
    display: block;
    border-radius: $medium-label-border-radius;
    position: relative;
  }

  label:after {
    content: "";
    position: absolute;
    top: $medium-label-slider-top;
    left: $medium-label-slider-left;
    width: $medium-label-slider-size;
    height: $medium-label-slider-size;
    background: $default-slider-background;
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + label {
    background: $default-background-active;
  }

  input:checked + label:after {
    left: calc(100% - #{$medium-label-slider-left});
    transform: translateX(-100%);
  }

  &.small {
    gap: $small-label-toggle-gap;

    p {
      line-height: $small-label-line-height;
      font-size: $small-label-font-size;
    }

    label {
      width: $small-label-width;
      height: $small-label-height;
      border-radius: $small-label-border-radius;
    }

    label:after {
      top: $small-label-slider-top;
      left: $small-label-slider-left;
      width: $small-label-slider-size;
      height: $small-label-slider-size;
    }

    input:checked + label:after {
      left: calc(100% - #{$small-label-slider-left});
    }
  }

  &.large {
    gap: $large-label-toggle-gap;

    p {
      line-height: $large-label-line-height;
      font-size: $large-label-font-size;
    }

    label {
      width: $large-label-width;
      height: $large-label-height;
      border-radius: $large-label-border-radius;
    }

    label:after {
      top: $large-label-slider-top;
      left: $large-label-slider-left;
      width: $large-label-slider-size;
      height: $large-label-slider-size;
    }

    input:checked + label:after {
      left: calc(100% - #{$large-label-slider-left});
    }
  }

  &.info {
    p {
      color: $info-label-color;
    }

    label {
      background: $info-background;
    }

    label:after {
      background: $info-slider-background;
    }

    input:checked + label {
      background: $info-background-active;
    }
  }

  &.success {
    p {
      color: $success-label-color;
    }

    label {
      background: $success-background;
    }

    label:after {
      background: $success-slider-background;
    }

    input:checked + label {
      background: $success-background-active;
    }
  }

  &.warning {
    p {
      color: $warning-label-color;
    }

    label {
      background: $warning-background;
    }

    label:after {
      background: $warning-slider-background;
    }

    input:checked + label {
      background: $warning-background-active;
    }
  }

  &.danger {
    p {
      color: $danger-label-color;
    }

    label {
      background: $danger-background;
    }

    label:after {
      background: $danger-slider-background;
    }

    input:checked + label {
      background: $danger-background-active;
    }
  }

  &.disabled {
    p {
      cursor: not-allowed;
      color: $disabled-label-color;
    }

    label {
      cursor: not-allowed;
      background: $disabled-background;
    }

    label:after {
      cursor: not-allowed;
      background: $disabled-slider-background;
    }

    input:checked + label {
      cursor: not-allowed;
      background: $disabled-background-active;
    }
  }

  &.dark {
    p {
      color: $dark-default-label-color;
    }

    label {
      background: $dark-default-background;
    }

    label:after {
      background: $dark-default-slider-background;
    }

    input:checked + label {
      background: $dark-default-background-active;
    }

    &.info {
      p {
        color: $dark-info-label-color;
      }

      label {
        background: $dark-info-background;
      }

      label:after {
        background: $dark-info-slider-background;
      }

      input:checked + label {
        background: $dark-info-background-active;
      }
    }

    &.success {
      p {
        color: $dark-success-label-color;
      }

      label {
        background: $dark-success-background;
      }

      label:after {
        background: $dark-success-slider-background;
      }

      input:checked + label {
        background: $dark-success-background-active;
      }
    }

    &.warning {
      p {
        color: $dark-warning-label-color;
      }

      label {
        background: $dark-warning-background;
      }

      label:after {
        background: $dark-warning-slider-background;
      }

      input:checked + label {
        background: $dark-warning-background-active;
      }
    }

    &.danger {
      p {
        color: $dark-danger-label-color;
      }

      label {
        background: $dark-danger-background;
      }

      label:after {
        background: $dark-danger-slider-background;
      }

      input:checked + label {
        background: $dark-danger-background-active;
      }
    }

    &.disabled {
      p {
        cursor: not-allowed;
        color: $dark-disabled-label-color;
      }

      label {
        cursor: not-allowed;
        background: $dark-disabled-background;
      }

      label:after {
        cursor: not-allowed;
        background: $dark-disabled-slider-background;
      }

      input:checked + label {
        cursor: not-allowed;
        background: $dark-disabled-background-active;
      }
    }
  }
}
</style>
