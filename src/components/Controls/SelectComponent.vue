<template>
  <div class="select-component">
    <label>{{ label }}</label>
    <select v-model="selected" @change="handleOptionsSelected">
      <option value="" disabled selected>{{ defaults }}</option>
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
  props: {
    label: String,
    data: Array,
    defaults: String,
  },
  methods: {
    handleOptionsSelected() {
      this.$emit("selected", this.selected);
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
