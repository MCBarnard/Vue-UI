<template>
  <div class="input-component">
    <label>{{ label }}</label>
    <input :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped lang="scss">
.input-component {
  display: flex;
  gap: 16px;

  input {
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
