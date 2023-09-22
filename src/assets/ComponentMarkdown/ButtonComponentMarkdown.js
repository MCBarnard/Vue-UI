export default `<template>
<button
  @click="clickHandler"
  :class="[
    'btn',
    { dark: computedDark },
    computedSize,
    computedVariant,
    computedCorners,
    computedFinish,
    { disabled: computedDisabled },
    { wide: computedWide },
  ]"
  :disabled="computedDisabled"
>
  <slot></slot>
</button>
</template>

<script>
export default {
props: {
  size: String, // small / medium / large
  variant: String, // "" / info / success / warning / danger
  corners: String, // rounded, round, sharp
  finish: String, // "" / outlined
  disabled: Boolean, // true / false
  dark: Boolean, // true / false
  wide: Boolean, // true / false
},
methods: {
  clickHandler() {
    if (this.disabled) return;
    this.$emit("clicked");
  },
},
computed: {
  computedSize() {
    return this.size;
  },
  computedVariant() {
    return this.variant;
  },
  computedCorners() {
    return this.corners;
  },
  computedFinish() {
    return this.finish;
  },
  computedDisabled() {
    return this.disabled;
  },
  computedDark() {
    return this.dark;
  },
  computedWide() {
    return this.wide;
  },
},
};
</script>

<style scoped lang="scss">
// ====== Buttons ========= //

// Full //
$default-button: #a900ff;
$default-button-hover: #8b04cf;
$default-button-text: #fff;
$info-button: #218afa;
$info-button-hover: #1f7adc;
$info-button-text: #fff;
$success-button: #00b014;
$success-button-hover: #02a215;
$success-button-text: #fff;
$danger-button: #e20404;
$danger-button-hover: #d00303;
$danger-button-text: #fff;
$warning-button: #e3a700;
$warning-button-hover: #d8a106;
$warning-button-text: #fff;
$disabled-button: #ececec;
$disabled-button-hover: #ececec;
$disabled-button-text: #bcbcbc;

// Outlined //
$default-outlined-button: #fff;
$default-outlined-button-hover: #8b04cf;
$default-outlined-button-text: #a900ff;
$default-outlined-button-hover-text: #fff;
$default-outlined-button-border: #a900ff;
$default-outlined-button-hover-border: #8b04cf;

$info-outlined-button: #fff;
$info-outlined-button-hover: #218afa;
$info-outlined-button-text: #218afa;
$info-outlined-button-hover-text: #fff;
$info-outlined-button-border: #218afa;
$info-outlined-button-hover-border: #218afa;

$success-outlined-button: #fff;
$success-outlined-button-hover: #00b014;
$success-outlined-button-text: #00b014;
$success-outlined-button-hover-text: #fff;
$success-outlined-button-border: #00b014;
$success-outlined-button-hover-border: #00b014;

$danger-outlined-button: #fff;
$danger-outlined-button-hover: #e20404;
$danger-outlined-button-text: #e20404;
$danger-outlined-button-hover-text: #fff;
$danger-outlined-button-border: #e20404;
$danger-outlined-button-hover-border: #e20404;

$warning-outlined-button: #fff;
$warning-outlined-button-hover: #e3a700;
$warning-outlined-button-text: #e3a700;
$warning-outlined-button-hover-text: #fff;
$warning-outlined-button-border: #e3a700;
$warning-outlined-button-hover-border: #e3a700;

$disabled-outlined-button: #eaeaea;
$disabled-outlined-button-hover: #eaeaea;
$disabled-outlined-button-text: #bcbcbc;
$disabled-outlined-button-hover-text: #bcbcbc;
$disabled-outlined-button-border: #f1f1f1;
$disabled-outlined-button-hover-border: #f1f1f1;

// Dark mode
$dark-default-outlined-button-text: $default-button;
$dark-default-outlined-button-hover-text: #fff;
$dark-default-outlined-button-border: $default-button;

$dark-disabled-button: #525252;
$dark-disabled-button-hover: #525252;
$dark-disabled-button-text: #bcbcbc;
$dark-disabled-outlined-button-hover-border: #bcbcbc;

$dark-disabled-outlined-button-hover: #525252;
$dark-disabled-outlined-button-hover-text: #bcbcbc;
$dark-disabled-outlined-button-border: #bcbcbc;
$dark-disabled-outlined-button-text: #bcbcbc;
$dark-disabled-outlined-button: #525252;

$dark-default-outlined-button-hover-border: $default-button;
$dark-default-outlined-button-hover: $default-button;

$dark-default-outlined-button: #202021;

$dark-info-outlined-button: #202021;
$dark-info-outlined-button-border: $info-button;
$dark-danger-outlined-button: #202021;
$dark-danger-outlined-button-border: #e20404;
$dark-success-outlined-button: #202021;
$dark-success-outlined-button-border: #00b014;
$dark-warning-outlined-button: #202021;
$dark-warning-outlined-button-border: #e3a700;

.btn {
border: none;
cursor: pointer;
display: block;
transition: all 0.4s ease;
width: fit-content;
box-sizing: border-box;
font-size: 18px;
padding: 6px 16px;

&.rounded {
  border-radius: 5px;
}

&.round {
  border-radius: 10px;
}

&.wide {
  width: 100%;
}

&.small {
  font-size: 10px;
  padding: 2px 6px;

  &.rounded {
    border-radius: 2px;
  }

  &.round {
    border-radius: 10px;
  }
}

&.medium {
  font-size: 14px;
  padding: 4px 12px;

  &.rounded {
    border-radius: 4px;
  }

  &.round {
    border-radius: 20px;
  }
}

&.large {
  font-size: 20px;
  padding: 8px 24px;

  &.rounded {
    border-radius: 7px;
  }

  &.round {
    border-radius: 40px;
  }
}

&.sharp {
  border-radius: 0;
}

// Plain
color: $default-button-text;
background: $default-button;

&:hover {
  background: $default-button-hover;
}

&.disabled:hover {
  background: $default-button;
}

&.info {
  color: $info-button-text;
  background: $info-button;

  &:hover {
    background: $info-button-hover;
  }

  &.disabled:hover {
    background: $info-button;
  }
}

&.success {
  color: $success-button-text;
  background: $success-button;

  &:hover {
    background: $success-button-hover;
  }

  &.disabled:hover {
    background: $success-button;
  }
}

&.warning {
  color: $warning-button-text;
  background: $warning-button;

  &:hover {
    background: $warning-button-hover;
  }

  &.disabled:hover {
    background: $warning-button;
  }
}

&.danger {
  color: $danger-button-text;
  background: $danger-button;

  &:hover {
    background: $danger-button-hover;
  }

  &.disabled:hover {
    background: $danger-button;
  }
}

&.disabled {
  box-shadow: inset 0px 0px 10px 20px #ffffff50;
  cursor: not-allowed;
}

&.outlined {
  color: $default-outlined-button-text;
  background: $default-outlined-button;
  border: 2px solid $default-outlined-button-border;

  &:hover {
    color: $default-outlined-button-hover-text;
    background: $default-outlined-button-hover;
    border: 2px solid $default-outlined-button-hover-border;
  }

  &.disabled:hover {
    color: $default-outlined-button-text;
    background: $default-outlined-button;
  }

  &.info {
    color: $info-outlined-button-text;
    background: $info-outlined-button;
    border: 2px solid $info-outlined-button-border;

    &:hover {
      color: $info-outlined-button-hover-text;
      background: $info-outlined-button-hover;
      border: 2px solid $info-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $info-outlined-button-text;
      background: $info-outlined-button;
    }
  }

  &.success {
    color: $success-outlined-button-text;
    background: $success-outlined-button;
    border: 2px solid $success-outlined-button-border;

    &:hover {
      color: $success-outlined-button-hover-text;
      background: $success-outlined-button-hover;
      border: 2px solid $success-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $success-outlined-button-text;
      background: $success-outlined-button;
    }
  }

  &.warning {
    color: $warning-outlined-button-text;
    background: $warning-outlined-button;
    border: 2px solid $warning-outlined-button-border;

    &:hover {
      color: $warning-outlined-button-hover-text;
      background: $warning-outlined-button-hover;
      border: 2px solid $warning-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $warning-outlined-button-text;
      background: $warning-outlined-button;
    }
  }

  &.danger {
    color: $danger-outlined-button-text;
    background: $danger-outlined-button;
    border: 2px solid $danger-outlined-button-border;

    &:hover {
      color: $danger-outlined-button-hover-text;
      background: $danger-outlined-button-hover;
      border: 2px solid $danger-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $danger-outlined-button-text;
      background: $danger-outlined-button;
    }
  }

  &.disabled {
    box-shadow: inset 0px 0px 10px 20px #ffffff50;
    cursor: not-allowed;
  }
}

&.dark.outlined {
  color: $dark-default-outlined-button-text;
  background: $dark-default-outlined-button;
  border: 2px solid $dark-default-outlined-button-border;

  &:hover {
    color: $dark-default-outlined-button-hover-text;
    background: $dark-default-outlined-button-hover;
    border: 2px solid $dark-default-outlined-button-hover-border;
  }

  &.disabled:hover {
    color: $dark-default-outlined-button-text;
    background: $dark-default-outlined-button;
    border: 2px solid $dark-default-outlined-button-border;
  }

  &.info {
    color: $info-outlined-button-text;
    background: $dark-default-outlined-button;
    border: 2px solid $dark-info-outlined-button-border;

    &:hover {
      color: $info-outlined-button-hover-text;
      background: $info-outlined-button-hover;
      border: 2px solid $info-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $info-outlined-button-text;
      background: $dark-default-outlined-button;
    }
  }

  &.success {
    color: $success-outlined-button-text;
    background: $dark-default-outlined-button;
    border: 2px solid $dark-success-outlined-button-border;

    &:hover {
      color: $success-outlined-button-hover-text;
      background: $success-outlined-button-hover;
      border: 2px solid $success-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $success-outlined-button-text;
      background: $dark-success-outlined-button;
      border: 2px solid $dark-success-outlined-button-border;
    }
  }

  &.warning {
    color: $warning-outlined-button-text;
    background: $dark-default-outlined-button;
    border: 2px solid $dark-warning-outlined-button-border;

    &:hover {
      color: $warning-outlined-button-hover-text;
      background: $warning-outlined-button-hover;
      border: 2px solid $warning-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $warning-outlined-button-text;
      background: $dark-default-outlined-button;
    }
  }

  &.danger {
    color: $danger-outlined-button-text;
    background: $dark-default-outlined-button;
    border: 2px solid $dark-danger-outlined-button-border;

    &:hover {
      color: $danger-outlined-button-hover-text;
      background: $danger-outlined-button-hover;
      border: 2px solid $danger-outlined-button-hover-border;
    }

    &.disabled:hover {
      color: $danger-outlined-button-text;
      background: $dark-default-outlined-button;
    }
  }

  &.disabled {
    box-shadow: inset 0px 0px 10px 20px #565656a6;
    cursor: not-allowed;
  }
}
}
</style>
`;
