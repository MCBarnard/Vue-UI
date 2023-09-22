<template>
  <div class="prism-component">
    <div class="prism-component__header">
      <span class="heading">{{ nameOfFile }}</span>
      <button class="code-copy-btn" @click="handleCodeClicked">Copy</button>
    </div>
    <div class="prism-component__code">
      <pre>
        <code class="language-html">
{{ computedCode }}
        </code>
      </pre>
    </div>
    <div class="prism-component__footer"></div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // you can change
export default {
  // mounted
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  },
  props: {
    code: String,
    nameOfFile: String,
  },
  computed: {
    computedCode() {
      return this.code;
    },
  },
  methods: {
    async handleCodeClicked() {
      try {
        await navigator.clipboard.writeText(this.computedCode);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
      alert("Code copied");
    },
  },
};
</script>

<style scoped lang="scss">
$prism-background: #171c26;

.prism-component {
  background: $prism-background;
  border-radius: 1rem;
  max-width: 600px;
  margin: auto;
  box-shadow: 0px 0px 30px -20px #828282;

  pre {
    background: #1b2738;
  }

  &__header {
    background: $prism-background;
    color: #fff;
    border-radius: 1rem 1rem 0 0;
    padding: 0.6rem 1rem 0.2rem;
    font-weight: bold;
    font-family: "Montserrat", cursive;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .heading {
      display: inline-block;
      line-height: 25px;
    }

    .code-copy-btn {
      border-radius: 5px;
      padding: 4px 8px;
      background: $prism-background;
      color: #fff;
      border: 2px solid #4676cd;
      outline: none;
      cursor: pointer;

      &:active {
        font-weight: bold;
      }
    }
  }

  &__code {
    max-height: 350px;
    overflow-y: auto;
  }

  &__footer {
    background: $prism-background;
    color: #fff;
    border-radius: 0 0 1rem 1rem;
    padding: 0.6rem 1rem 0.2rem;
    font-weight: bold;
    font-family: "Montserrat", cursive;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
  }
}
</style>
