<template>
  <div
    @animationend="animationend"
    :class="[
      'notification',
      computedVariant,
      { hidden },
      { deleted: deleted },
      { dark },
    ]"
  >
    <div class="icon-container">
      <span class="material-symbols-outlined icon">{{ computedIcon }}</span>
    </div>
    <div class="context">
      <h3>{{ computedTitle }}</h3>
      <p>{{ subText }}</p>
    </div>
    <span @click="hideNotification" class="material-symbols-outlined close-btn"
      >close</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: false,
      deleted: false,
      hasLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  },
  props: {
    variant: String,
    dark: Boolean,
    icon: String,
    title: String,
    subText: String,
  },
  methods: {
    hideNotification() {
      this.hidden = true;
    },
    animationend() {
      if (this.hasLoaded) {
        this.deleted = true;
        this.$emit("closed");
      }
    },
  },
  computed: {
    computedVariant() {
      return this.variant;
    },
    computedIcon() {
      return this.icon ? this.icon : "chat_bubble";
    },
    computedTitle() {
      return this.title.length > 24
        ? this.title.slice(0, 24) + "..."
        : this.title;
    },
  },
};
</script>

<style scoped lang="scss">
$default-color: #a900ff;
$default-light-background: #c794e1;
$default-dark-background: #420c5e;

$info-color: #218afa;
$info-light-background: #9cc9ff;
$info-dark-background: #042c5c;

$success-color: #26f26a;
$success-light-background: #9effbe;
$success-dark-background: #0a4f3a;

$warning-color: #e3a700;
$warning-light-background: #ffe7a5;
$warning-dark-background: #47370a;

$danger-color: #ff5c5a;
$danger-light-background: #ffc2c2;
$danger-dark-background: #590e0e;

$background-color: #232631;
$background-dark-fade-color: #232631;
$background-light-fade-color: #fafafa;
$sub-text-light-color: #656565;
$sub-text-dark-color: #b4b4b4;
$box-shadow: 0 0 18px -10px #939393;
$icon-light-box-shadow: 0 0 16px -9px #7d7d7d;
$icon-dark-box-shadow: 0 0 16px -9px #000;

.notification {
  max-width: 335px;
  background: linear-gradient(
    90deg,
    $default-light-background 0%,
    $background-light-fade-color 40%
  );
  box-shadow: $box-shadow;
  padding: 16px;
  border-radius: 10px;
  color: #898c97;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 16px;
  align-items: center;
  opacity: 0;
  animation: showNotification 400ms ease-out 0.3s forwards;

  &.hidden {
    opacity: 1;
    animation: fadeOut 400ms ease-out 0.3s forwards;
  }

  &.deleted {
    display: none;
  }
}

.notifications,
.notification > .context {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.context {
  flex-direction: column;
  display: flex;
  align-items: flex-start;

  h3,
  p {
    margin: 0;
  }

  p {
    color: $sub-text-light-color;
    max-height: 55px;
    overflow: auto;
  }
}

.close-btn {
  cursor: pointer;
}

.notification h3 {
  color: $default-color;
}

.icon-container {
  max-width: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  background: $default-light-background;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: $icon-light-box-shadow;
}

.icon {
  color: $default-color;
  font-size: 20px;
}

.info {
  background: linear-gradient(
    90deg,
    $info-light-background 0%,
    $background-light-fade-color 40%
  );

  .icon-container {
    background: $info-light-background;
  }

  h3 {
    color: $info-color;
  }
}

.info .icon {
  color: $info-color;
  background: $info-light-background;
}

.success {
  background: linear-gradient(
    90deg,
    $success-light-background 0%,
    $background-light-fade-color 40%
  );

  .icon-container {
    background: $success-light-background;
  }

  h3 {
    color: $success-color;
  }
}

.success .icon {
  color: $success-color;
  background: $success-light-background;
}

.warning {
  background: linear-gradient(
    90deg,
    $warning-light-background 0%,
    $background-light-fade-color 40%
  );

  .icon-container {
    background: $warning-light-background;
  }

  h3 {
    color: $warning-color;
  }
}

.warning .icon {
  color: $warning-color;
  background: $warning-light-background;
}

.danger {
  background: linear-gradient(
    90deg,
    $danger-light-background 0%,
    $background-light-fade-color 40%
  );

  .icon-container {
    background: $danger-light-background;
  }

  h3 {
    color: $danger-color;
  }
}

.danger .icon {
  color: $danger-color;
  background: $danger-light-background;
}

.dark {
  &.notification {
    background: linear-gradient(
      90deg,
      $default-dark-background 0%,
      $background-dark-fade-color 40%
    );
    box-shadow: $box-shadow;
    color: #898c97;
  }

  .context {
    p {
      color: $sub-text-dark-color;
    }
    h3 {
      color: $default-color;
    }
  }

  .icon-container {
    background: $default-dark-background;
    box-shadow: $icon-dark-box-shadow;
  }

  .icon {
    color: $default-color;
  }

  &.info {
    background: linear-gradient(
      90deg,
      $info-dark-background 0%,
      $background-dark-fade-color 40%
    );

    .icon-container {
      color: $info-color;
      background: $info-dark-background;

      .icon {
        color: $info-color;
      }
    }

    h3 {
      color: $info-color;
    }
  }

  &.info .icon {
    background: $info-dark-background;
  }

  &.success {
    background: linear-gradient(
      90deg,
      $success-dark-background 0%,
      $background-dark-fade-color 40%
    );

    .icon-container {
      background: $success-dark-background;
    }

    h3 {
      color: $success-color;
    }
  }

  &.success .icon {
    color: $success-color;
    background: $success-dark-background;
  }

  &.warning {
    background: linear-gradient(
      90deg,
      $warning-dark-background 0%,
      $background-dark-fade-color 40%
    );

    .icon-container {
      background: $warning-dark-background;
    }

    h3 {
      color: $warning-color;
    }
  }

  &.warning .icon {
    color: $warning-color;
    background: $warning-dark-background;
  }

  &.danger {
    background: linear-gradient(
      90deg,
      $danger-dark-background 0%,
      $background-dark-fade-color 40%
    );

    .icon-container {
      background: $danger-dark-background;
    }

    h3 {
      color: $danger-color;
    }
  }

  &.danger .icon {
    color: $danger-color;
    background: $danger-dark-background;
  }
}

@keyframes fadeOut {
  100% {
    opacity: 0;
  }
}

@keyframes showNotification {
  100% {
    opacity: 1;
  }
}
</style>
