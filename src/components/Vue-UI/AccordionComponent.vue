<template>
  <div v-for="(item, key) in items" :key="key">
    <button
      @click="
        () => {
          toggleItem(key);
        }
      "
      :class="[
        'accordion',
        `${rand}`,
        `${rand}-${key}`,
        { 'rounded-top': key === 0 && rounded },
        { 'rounded-bottom': key === items.length - 1 && rounded },
      ]"
    >
      {{ item.title }}
    </button>
    <div
      :class="[
        'panel',
        `${rand}`,
        `${rand}-${key}`,
        { 'rounded-bottom': key === items.length - 1 && rounded },
      ]"
    >
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
// move data values into props to make this component re- usable
export default {
  data() {
    return {
      rand: `id-${(Math.random() + 1).toString(36).substring(2)}`,
    };
  },
  props: {
    autoClose: Boolean, // true / false
    rounded: Boolean, // true / false
    items: Array, // {title: "What is the ultimate answer to life?", content: "The answer to the question of life"}
  },
  computed: {
    computedAutoClose() {
      return this.autoClose;
    },
  },
  methods: {
    closeAllDropDowns(key) {
      const buttons = document.querySelectorAll(`.accordion.${this.rand}`);
      const panels = document.querySelectorAll(`.panel.${this.rand}`);

      buttons.forEach((item) => {
        // Do not close the currently clicked item if it is clicked again
        if (item.classList.contains(`${this.rand}-${key}`)) {
          return false;
        }
        if (item.classList.contains("active")) {
          item.classList.toggle("active");
        }
      });

      panels.forEach((item) => {
        // Do not close the currently clicked item if it is clicked again
        if (item.classList.contains(`${this.rand}-${key}`)) {
          return false;
        }
        if (item.style.maxHeight !== null) {
          item.style.maxHeight = null;
        }
      });
    },
    toggleItem(item) {
      // Close all
      if (this.computedAutoClose) this.closeAllDropDowns(item);

      // Toggle new Dropdown
      const button = document.querySelector(`.accordion.${this.rand}-${item}`);
      const panel = document.querySelector(`.panel.${this.rand}-${item}`);

      button.classList.toggle("active");
      this.$emit("toggled", `${this.rand}-${item}`);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.rounded-top {
  border-radius: 10px 10px 0 0;
}
.rounded-bottom {
  border-radius: 0 0 10px 10px;

  &.active {
    border-radius: 0;
  }
}

.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;

  &:after {
    content: "\002B";
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;

  &.active.rounded-bottom {
    border-radius: 0 0 10px 10px;
  }
}
</style>
