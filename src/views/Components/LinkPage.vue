<template>
  <div class="link-page">
    <ShowcaseComponent>
      <template v-slot:component>
        <p>
          If only we had
          <link-component
            :to="computedRouteName"
            :href="computedHref"
            :text="computedText"
            :title="computedLinkTitle"
            :openOnNewPage="targetToggle"
            :variant="selectedVariant"
          />, that would save us a lot of time
        </p>
      </template>
      <template v-slot:controls>
        <table class="props-table">
          <tr>
            <td>variant</td>
            <td>
              <select-component
                @selected="variantChanged"
                :data="variantOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>to</td>
            <td>
              <input-component
                :value="computedRouteName"
                @change="handleLinkChange"
              />
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <input-component
                :value="computedLinkTitle"
                @change="handleLinkTitleChange"
              />
            </td>
            <td class="divider"></td>
            <td>text</td>
            <td>
              <input-component
                :value="computedText"
                @change="handleTextChange"
              />
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>
              <input-component
                :value="computedHref"
                @change="handleHrefChange"
              />
            </td>
            <td class="divider"></td>
            <td>openOnNewPage</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedTargetToggle"
                @toggle="handleToggledChange"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component :code="code" />
      </template>
    </ShowcaseComponent>
  </div>
</template>

<script>
import ShowcaseComponent from "@/components/ShowcaseComponent";
import LinkComponent from "@/components/Vue-UI/LinkComponent";
import SelectComponent from "@/components/Controls/SelectComponent";
import InputComponent from "@/components/Controls/InputComponent";
import ToggleComponent from "@/components/Controls/ToggleComponent";
import PrismComponent from "@/components/PrismComponent";
// import * as LinkComponentMarkdown from "@/assets/ComponentMarkdown/LinkComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    LinkComponent,
    SelectComponent,
    InputComponent,
    ToggleComponent,
    PrismComponent,
  },
  data() {
    return {
      routeName: "link",
      text: "Some Link going some where",
      linkTitle: "A link to somewhere",
      targetToggle: true,
      linkVariant: "",
      href: "",
      variantOptions: ["info", "success", "warning", "danger"],
      code: "<template><div>Some code</div></template>",
    };
  },
  methods: {
    variantChanged(item) {
      this.linkVariant = item;
    },
    handleLinkChange(item) {
      if (item.target.value) {
        this.routeName = "link";
        this.href = "";
        alert(`Will make this link point to {name: ${item.target.value}}`);
      }
    },
    handleHrefChange(item) {
      if (item.target.value) {
        this.routeName = "";
        this.href = item.target.value;
        alert(`Will make this link point to src="${item.target.value}"`);
      }
    },
    handleTextChange(item) {
      if (item.target.value) this.text = item.target.value;
    },
    handleLinkTitleChange(item) {
      if (item.target.value) this.linkTitle = item.target.value;
    },
    handleToggledChange() {
      console.log("=======");
      console.log(this.targetToggle);
      console.log(!this.targetToggle);
      console.log("=======");
      this.targetToggle = !this.targetToggle;
    },
  },
  computed: {
    selectedVariant() {
      return this.linkVariant;
    },
    computedHref() {
      return this.href;
    },
    computedText() {
      return this.text;
    },
    computedRouteName() {
      return this.routeName;
    },
    computedLinkTitle() {
      return this.linkTitle;
    },
    computedTargetToggle() {
      return this.targetToggle;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.link-page {
  padding-top: 3rem;

  .props-table {
    td {
      padding: 0 5px;
    }
    .divider {
      width: 50px;
      height: 100%;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: -2px;
        transform: translateX(-50%);
        left: 50%;
        width: 2px;
        height: calc(100% + 4px);
        background: grey;
      }
    }
  }
}
</style>
