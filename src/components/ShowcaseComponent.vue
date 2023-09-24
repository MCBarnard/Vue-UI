<template>
  <div class="showcase">
    <div class="showcase__top">
      <div :class="['showcase__top__center', { wide: wideItems }]">
        <slot name="component"></slot>
      </div>
      <div class="contextual">
        <slot name="contextual"></slot>
      </div>
    </div>
    <div class="showcase__bottom">
      <p>Props</p>
      <p class="subtext">Live playground for you to play around in</p>
      <div class="showcase__bottom__controls">
        <slot name="controls"></slot>
      </div>
      <div class="showcase__bottom__code">
        <div class="content">
          <div class="intro">
            <p class="intro-heading">Copy the code</p>
            <p class="intro-sub">
              Copy and create this component hassle free in your own repository.
            </p>
          </div>
          <slot name="code"></slot>
        </div>
      </div>
      <div class="showcase__bottom__docs">
        <p>Docs</p>
        <p class="subtext">What do the different props do specifically</p>
        <slot name="docs"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseComponent",
  props: {
    wideItems: Boolean,
  },
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
    position: relative;

    .contextual {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      color: #b4b4b4;
      font-family: "Lobster", cursive;
    }

    &__center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      &.wide {
        width: 100%;
      }
    }
  }

  &__bottom {
    margin-top: 2rem;
    background: #fff;
    padding: 2rem 0;

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

    &__code {
      position: relative;
      margin: 2rem auto;
      padding: 2rem 0;
      background: #ebecee;
      position: relative;
      overflow-x: hidden;

      &:after {
        content: "";
        background: #3b424e45;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        transform: translateX(500px) skewX(-45deg);
        width: calc(100% * 2);
      }

      .content {
        position: relative;
        z-index: 2;

        .intro {
          max-width: 600px;
          width: 100%;
          margin: auto;
        }
        .intro-heading {
          margin: 0 auto;
          font-family: "Lobster", cursive;
          font-size: 28px;
        }

        .intro-sub {
          margin: 0 auto 1.5rem;
          font-size: 12px;
          font-family: Montserrat;
        }
      }
    }
  }
}
</style>
