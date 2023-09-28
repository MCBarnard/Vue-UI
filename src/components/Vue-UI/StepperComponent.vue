<template>
  <div class="stepper" :style="`--progress: ${progress}%;`">
    <div class="stepper__track">
      <div class="stepper__track__fill"></div>
    </div>
    <div
      class="stepper__step"
      v-for="(item, key) in steps"
      :key="key"
      @click="handleIconClicked(item)"
    >
      <span
        :class="[
          'material-symbols-outlined icon',
          { completed: item.completed },
          { active: item.active },
        ]"
      >
        {{ item.icon }}
      </span>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps"], // [{icon: '', name: '', completed: false}]
  computed: {
    stepsDivisions() {
      return 100 / (this.steps.length - 1);
    },
    progress() {
      let total = this.steps.reduce((value, item) => {
        if (item.completed) value += this.stepsDivisions;
        return value;
      }, 0);
      return total;
    },
  },
  methods: {
    handleIconClicked($event) {
      this.$emit("manual-go-to", $event);
    },
  },
};
</script>

<style scoped lang="scss">
$active-color: #0084ff;
$todo-color: #d2d2d2;

.stepper {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;

  &__track {
    position: absolute;
    top: 14px;
    left: 0;
    height: 7px;
    width: 100%;
    border: 1px solid $todo-color;
    border-radius: 5px;

    &__fill {
      height: 100%;
      width: var(--progress);
      background-color: $active-color;
      transition: width 1s ease;
    }
  }

  &__step {
    position: relative;

    .icon {
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid $todo-color;
      margin: auto;
      display: block;
      text-align: center;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #d2d2d2;
      cursor: pointer;

      &:hover ~ p {
        opacity: 1;
      }

      &.completed {
        color: $active-color;
        border: 1px solid $active-color;
      }

      &.active {
        color: $active-color;
        border: 1px solid $active-color;

        & ~ p {
          opacity: 1;
        }
      }
    }
    p {
      position: absolute;
      bottom: 5px;
      left: -35px;
      text-align: center;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }
  }
}
</style>
