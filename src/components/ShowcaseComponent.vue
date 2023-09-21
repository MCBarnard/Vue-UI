<template>
  <div class="showcase">
    <div class="showcase__top">
      <div class="showcase__top__center">
        <slot name="component"></slot>
      </div>
    </div>
    <div class="showcase__bottom">
      <p>Props</p>
      <p class="subtext">Live playground for you to play around in</p>
      <div class="showcase__bottom__controls">
        <slot name="controls"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseComponent",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat&family=Poppins:wght@300;400;500;600;700;800&display=swap");

.showcase {
  color: #000;

  &__top {
    max-width: 600px;
    margin: auto;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    border-radius: 2rem 0 2rem;
    box-shadow: 0px 0px 30px -20px #828282;
    padding: 0 2rem;

    &__center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
  }

  &__bottom {
    margin-top: 2rem;
    background: #fff;
    padding: 2rem;

    p {
      font-family: "Lobster", cursive;
      font-size: 28px;
      margin: 0;
      max-width: 600px;
      margin: auto;

      &.subtext {
        font-family: "Montserrat";
        font-size: 12px;
        max-width: 600px;
        margin: 0 auto 16px;
        color: grey;
      }
    }

    &__controls {
      position: relative;
      max-width: 600px;
      margin: auto;
    }
  }
}
</style>
