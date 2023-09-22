export default `<template>
<div>
  <div
    :class="[
      'input-field',
      { dark: dark },
      { active: focussing },
      variant,
      { disabled: disabled },
      { 'full-width': full },
    ]"
    :style="\`width: \${width};\`"
  >
    <textarea
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      :type="type"
      name=""
      required=""
      autocomplete="off"
      data-lpignore="true"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="\`height: \${height};\`"
    ></textarea>
    <label :class="[variant, { error: subTextColor === 'danger' }]">{{
      label
    }}</label>
  </div>
  <div
    :class="[
      'sub-text',
      { show: showSubText },
      variant,
      { sub: subTextColor === 'sub' },
      { error: subTextColor === 'danger' },
      { allGood: subTextColor === 'success' },
      { dark: dark },
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
    dark: false, // true / false
  };
},
props: {
  height: String, // 100px
  width: String, // 320px
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
methods: {
  handleFocus() {
    this.$emit("focus");
  },
  handleBlur() {
    this.$emit("blur");
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

&.full-width {
  width: 100% !important;
}

&:after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: $default-color;
  left: 0;
  bottom: 4px;
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

  &.error {
    color: $danger-color;
  }
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: $light-theme-text-color;
  border: none;
  border-bottom: 1px solid $light-theme-border-color;
  outline: none;
  background: $light-theme-background-color;
  box-sizing: border-box;
  resize: none;

  &:focus ~ label {
    color: $default-color;
  }

  &:focus ~ label.success {
    color: $success-color;
  }

  &:focus ~ label.info {
    color: $info-color;
  }
  &:focus ~ label.warning {
    color: $warning-color;
  }
  &:focus ~ label.danger {
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

  textarea {
    &:focus ~ label {
      color: $success-color;
    }
  }
}

&.warning {
  &:after {
    background: $warning-color;
  }

  textarea {
    &:focus ~ label {
      color: $warning-color;
    }
  }
}

&.danger {
  &:after {
    background: $danger-color;
  }

  textarea {
    &:focus ~ label {
      color: $danger-color;
    }
  }
}

&.disabled {
  cursor: not-allowed;

  textarea {
    background: $disabled-light-background;
    cursor: not-allowed;
  }

  label {
    color: $disabled-light-color;
  }
}

&.dark {
  textarea {
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

    textarea {
      &:focus ~ label {
        color: $info-color;
      }
    }
  }

  &.success {
    &:after {
      background: $success-color;
    }

    textarea {
      &:focus ~ label {
        color: $success-color;
      }
    }
  }

  &.warning {
    &:after {
      background: $warning-color;
    }

    textarea {
      &:focus ~ label {
        color: $warning-color;
      }
    }
  }

  &.danger {
    &:after {
      background: $danger-color;
    }

    textarea {
      &:focus ~ label {
        color: $danger-color;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;

    textarea {
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
margin-top: 4px;
color: $default-color;
opacity: 0;
pointer-events: none;
transition: $trans-04;

&.show {
  opacity: 1;
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

&.info {
  color: $info-color;
}

&.sub {
  color: $light-theme-subtext-sub-color;
}

&.error {
  color: $danger-color;
}

&.allGood {
  color: $success-color;
}

&.dark {
  &.sub {
    color: $dark-theme-subtext-sub-color;
  }
}
}
</style>

`;
