<template>
  <div class="skill" :style="`--total-skill: ${percentage}`">
    <div class="outer">
      <div class="inner">
        <div id="number">{{ counter }}</div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :width="width"
      :height="height"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" :stop-color="computedStartColor" />
          <stop offset="100%" :stop-color="computedEndColor" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="70" :stroke-linecap="capShape" />
    </svg>
  </div>
</template>

<script>
// move data values into props to make this component re- usable
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
    width: String, // 160px
    height: String, // 160px
  },
  computed: {
    capShape() {
      return this.rounded ? "round" : "square";
    },
    computedStartColor() {
      // default gradient: #e91e63 -> #673ab7
      // info gradient: #1046cf -> #00a6eb
      if (this.gradient && !this.variant) {
        return "#e91e63";
      } else if (!this.gradient && !this.variant) {
        return "#a900ff";
      } else if (!this.gradient && this.variant === "info") {
        return "#218afa";
      } else if (this.gradient && this.variant === "info") {
        return "#1046cf";
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
      // default gradient: #e91e63 -> #673ab7
      // info gradient: #1046cf -> #00a6eb
      if (this.gradient && !this.variant) {
        return "#673ab7";
      } else if (!this.gradient && !this.variant) {
        return "#a900ff";
      } else if (!this.gradient && this.variant === "info") {
        return "#218afa";
      } else if (this.gradient && this.variant === "info") {
        return "#00a6eb";
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
  mounted() {
    setTimeout(() => {
      this.animateProgress(78);
    }, 100);
  },
  methods: {
    animateProgress(total) {
      this.percentage = total;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.counter > this.percentage) {
          this.counter--;
        } else if (this.counter < this.percentage) {
          this.counter++;
        } else {
          clearInterval(this.interval);
        }
        if (this.counter > 100) clearInterval(this.interval);
      }, 20);
    },
  },
};
</script>

<style>
.skill {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
}

.outer {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  padding: 20px;
  position: relative;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}

.inner {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
}

#number {
  font-weight: 600;
  color: #555;
}

circle {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: 20px;
  stroke-dasharray: 440;
  stroke-dashoffset: calc(440 - (440 * var(--total-skill) / 100));
  transition: all 2s;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 2s;
}
</style>
