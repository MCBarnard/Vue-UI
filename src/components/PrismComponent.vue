<template>
  <div>
    <pre>
      <code class="language-vue">
{{ code }}
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // you can change
export default {
  data() {
    return {
      //
    };
  },
  // mounted
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = false;
    Prism.highlightAll(); // highlight your code on mount
  },
  props: {
    code: String,
  },
};
</script>
