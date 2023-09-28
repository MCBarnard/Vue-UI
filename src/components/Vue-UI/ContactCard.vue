<template>
  <div
    @click="$emit('selected', identifier)"
    :class="['small-icon-card', { active }]"
  >
    <div class="small-icon-card__heading">
      <span class="material-symbols-outlined icon">
        {{ icon }}
      </span>
      <p>{{ name }}</p>
    </div>
    <p class="sub-title">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  props: [
    "width",
    "height",
    "icon",
    "identifier",
    "name",
    "subTitle",
    "active",
  ],
};
</script>

<style scoped lang="scss">
.small-icon-card {
  width: var(--small-icon-card-width);
  height: var(--small-icon-card-width);
  padding: 16px;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;

  .sub-title {
    margin: 8px 0 0;
  }

  &:hover {
    border: 1px solid #0084ff;
    box-shadow: 0 0 8px -5px #0084ff;

    .small-icon-card__heading,
    p {
      color: #1048ae;
    }
  }

  &__heading {
    margin: auto;
    display: flex;
    gap: 8px;
    line-height: 18px;
    font-size: 15px;
    color: #101a2a;

    span {
      margin: 0;
      line-height: 18px;
      font-size: 24px;
    }

    p {
      margin: 0;
      line-height: 18px;
      font-size: 18px;
      font-family: "Lobster", cursive;
    }
  }

  &.active {
    border: 1px solid #0084ff;
    box-shadow: 0 0 8px -5px #0084ff;

    .small-icon-card__heading,
    p {
      color: #1048ae;
    }
  }
}
</style>
