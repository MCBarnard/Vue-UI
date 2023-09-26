<template>
  <div
    :class="['skill', { showTrack }]"
    :style="`--total-skill: ${computedPercentage}; --circumference: ${computedCircumference};--box:${computedBoxSize}px;--border-size: ${computedBorder}px`"
  >
    <div class="outer">
      <div class="inner">
        <div id="number" v-if="!hideValue" :class="[{ bold }, size]">
          {{ counter }}%
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :width="`${computedBoxSize}px`"
      :height="`${computedBoxSize}px`"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" :stop-color="computedStartColor" />
          <stop offset="100%" :stop-color="computedEndColor" />
        </linearGradient>
      </defs>
      <circle
        :cx="computedRadius + computedBorder / 2"
        :cy="computedRadius + computedBorder / 2"
        :r="computedRadius"
        :stroke-linecap="capShape"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: setInterval(() => {}),
      counter: 0,
      percentage: 0,
    };
  },
  props: {
    variant: String, // '' / info / success / warning / danger
    rounded: Boolean, // true / false
    gradient: Boolean, // true / false
    value: Number, // 78
    showTrack: Boolean, // true / false
    size: String, // small, medium, large
    bold: Boolean, // true, false
    hideValue: Boolean, // true, false
  },
  computed: {
    computedPercentage() {
      return this.percentage < 100 ? this.percentage : 100;
    },
    computedBoxSize() {
      return this.computedRadius * 2 + this.computedBorder;
    },
    computedCircumference() {
      switch (this.size) {
        case "small":
          return 157.08;
        case "medium":
          return 219.91;
        case "large":
          return 345.58;
        case "extra-large":
          return 502.65;
        default:
          return 219.91;
      }
    },
    computedRadius() {
      switch (this.size) {
        case "small":
          return 25;
        case "medium":
          return 35;
        case "large":
          return 55;
        case "extra-large":
          return 80;
        default:
          return 35;
      }
    },
    computedBorder() {
      switch (this.size) {
        case "small":
          return 10;
        case "medium":
          return 15;
        case "large":
          return 20;
        case "extra-large":
          return 25;
        default:
          return 15;
      }
    },
    capShape() {
      return this.rounded ? "round" : "square";
    },
    computedStartColor() {
      if (this.gradient && !this.variant) {
        return "#f900ff";
      } else if (!this.gradient && !this.variant) {
        return "#ce00ff";
      } else if (!this.gradient && this.variant === "info") {
        return "#218afa";
      } else if (this.gradient && this.variant === "info") {
        return "#00a6eb";
      } else if (!this.gradient && this.variant === "success") {
        return "#00b014";
      } else if (this.gradient && this.variant === "success") {
        return "#00ff19";
      } else if (!this.gradient && this.variant === "warning") {
        return "#ff6300";
      } else if (this.gradient && this.variant === "warning") {
        return "#ff9d00";
      } else if (!this.gradient && this.variant === "danger") {
        return "#ff0000";
      } else if (this.gradient && this.variant === "danger") {
        return "#ff0000";
      }
      return "#a900ff";
    },
    computedEndColor() {
      if (this.gradient && !this.variant) {
        return "#673ab7";
      } else if (!this.gradient && !this.variant) {
        return "#ce00ff";
      } else if (!this.gradient && this.variant === "info") {
        return "#218afa";
      } else if (this.gradient && this.variant === "info") {
        return "#1046cf";
      } else if (!this.gradient && this.variant === "success") {
        return "#00b014";
      } else if (this.gradient && this.variant === "success") {
        return "#00b014";
      } else if (!this.gradient && this.variant === "warning") {
        return "#ff6300";
      } else if (this.gradient && this.variant === "warning") {
        return "#e20404";
      } else if (!this.gradient && this.variant === "danger") {
        return "#ff0000";
      } else if (this.gradient && this.variant === "danger") {
        return "#aa0625";
      }
      return "#a900ff";
    },
  },
  methods: {
    triggerAnimation() {
      setTimeout(() => {
        this.animateProgress(this.value);
      }, 100);
    },
    animateProgress(total) {
      this.percentage = total;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.counter > this.computedPercentage) {
          this.counter--;
        } else if (this.counter < this.computedPercentage) {
          this.counter++;
        } else {
          clearInterval(this.interval);
        }
        if (this.counter > 100) clearInterval(this.interval);
      }, 20);
    },
  },
  watch: {
    value() {
      this.triggerAnimation();
    },
  },
};
</script>

<style scoped lang="scss">
.skill {
  width: var(--box);
  height: var(--box);
  border-radius: 50%;
  position: relative;
  border: 1px solid transparent;

  &.showTrack {
    border: 1px solid #f1f1f1;
    background: #f1f1f1;
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% + 1px), calc(-50% + 1px));
      border: 1px solid #f1f1f1;
      width: calc(var(--box) - var(--border-size) * 2);
      height: calc(var(--box) - var(--border-size) * 2);
      border-radius: 50%;
      background: #fff;
    }
  }
}

.outer {
  height: var(--box);
  width: var(--box);
  border-radius: 50%;
  position: relative;
}

.inner {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

#number {
  color: #555;

  &.bold {
    font-weight: bold;
  }

  &.small {
    font-size: 12px;
  }

  &.medium {
    font-size: 16px;
  }

  &.large {
    font-size: 20px;
  }

  &.extra-large {
    font-size: 26px;
  }
}

circle {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: var(--border-size);
  stroke-dasharray: var(--circumference);
  stroke-dashoffset: calc(
    var(--circumference) - (var(--circumference) * var(--total-skill) / 100)
  );
  transition: all 2s;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 2s;
}
</style>
