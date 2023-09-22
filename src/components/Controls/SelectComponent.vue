<template>
  <div class="select-component">
    <label>{{ label }}</label>
    <select v-model="selected" @change="handleOptionsSelected">
      <option value="">
        {{ defaults }}
      </option>
      <option v-for="(option, key) in data" :key="key" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  mounted() {
    this.selected = this.$props.state;
  },
  props: {
    label: String,
    data: Array,
    defaults: String,
    state: String,
  },
  methods: {
    handleOptionsSelected() {
      this.$emit("selected", this.computedSelected);
    },
  },
  computed: {
    computedSelected() {
      return this.selected;
    },
  },
  watch: {
    state(val) {
      this.selected = val;
    },
  },
};
</script>

<style scoped lang="scss">
.select-component {
  display: flex;
  gap: 16px;

  select {
    display: block;
    height: 30px;
    border: 1px solid #cdcdcd;
    border-radius: 0;
    outline: none;
  }

  label {
    display: block;
    font-size: 14px;
    line-height: 30px;
  }
}
</style>
