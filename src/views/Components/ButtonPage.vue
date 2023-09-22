<template>
  <div class="button-page">
    <ShowcaseComponent :wide-items="computedWide">
      <template v-slot:component>
        <button-component
          :variant="selectedVariant"
          :size="computedSize"
          :corners="computedCorners"
          :finish="computedFinish"
          :wide="computedWide"
          :disabled="computedDisabled"
        >
          Button
        </button-component>
      </template>
      <template v-slot:controls>
        <table class="props-table">
          <tr>
            <td>variant</td>
            <td>
              <select-component
                @selected="variantChanged"
                :state="selectedVariant"
                :data="variantOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>size</td>
            <td>
              <select-component
                :state="computedSize"
                @selected="sizeChanged"
                :data="sizeOptions"
                defaults="default"
              />
            </td>
          </tr>
          <tr>
            <td>corners</td>
            <td>
              <select-component
                :state="computedCorners"
                @selected="handleCornersChange"
                :data="cornerOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>finish</td>
            <td>
              <select-component
                :state="computedFinish"
                @selected="finishChange"
                :data="finishOptions"
                defaults="default"
              />
            </td>
          </tr>
          <tr>
            <td>wide</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedWide"
                @toggle="wideChange"
              />
            </td>
            <td class="divider"></td>
            <td>disabled</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedDisabled"
                @toggle="disabledChange"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component :code="code" nameOfFile="ButtonComponent.vue" />
      </template>
      <template v-slot:docs>
        <table-component :headings="propHeadings" :items="propDetails" />
      </template>
    </ShowcaseComponent>
  </div>
</template>

<script>
import ShowcaseComponent from "@/components/ShowcaseComponent";
import SelectComponent from "@/components/Controls/SelectComponent";
import ToggleComponent from "@/components/Controls/ToggleComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import ButtonComponent from "@/components/Vue-UI/ButtonComponent";
import * as ButtonComponentMarkdown from "@/assets/ComponentMarkdown/ButtonComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    SelectComponent,
    ToggleComponent,
    PrismComponent,
    TableComponent,
    ButtonComponent,
  },
  data() {
    return {
      wide: false,
      disabled: false,
      variant: "",
      size: "large",
      corners: "rounded",
      finish: "",
      variantOptions: ["info", "success", "warning", "danger"],
      sizeOptions: ["small", "medium", "large"],
      cornerOptions: ["round", "rounded", "sharp"],
      finishOptions: ["outlined"],
      code: ButtonComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "variant",
          "String",
          "'' / 'info' / 'success' / 'warning' / 'danger'",
          "No",
          "This defines what flavor your button will be.",
        ],
        [
          "size",
          "String",
          "'small' / 'medium' / 'large'",
          "Yes",
          "This determines how big the button will be by the amount of padding around the text",
        ],
        [
          "corners",
          "String",
          "'sharp' / 'rounded' / 'round'",
          "Yes",
          "Specify the corner border radius of your button",
        ],
        [
          "finish",
          "String",
          "'' / 'outlined'",
          "No",
          "This turns the button into a white/dark button with a bordered outline around and a fill on hover",
        ],
        [
          "wide",
          "Boolean",
          "true",
          "No",
          "Toggles the button to be full width or not",
        ],
        [
          "disabled",
          "Boolean",
          "true",
          "No",
          "Turn the button into a disabled state with slightly lighter variant shades and wont emit the click event",
        ],
      ],
    };
  },
  methods: {
    variantChanged(item) {
      this.variant = item;
    },
    sizeChanged(item) {
      this.size = item;
    },
    handleCornersChange(item) {
      this.corners = item;
    },
    finishChange(item) {
      this.finish = item;
    },
    wideChange() {
      this.wide = !this.wide;
    },
    disabledChange() {
      this.disabled = !this.disabled;
    },
  },
  computed: {
    selectedVariant() {
      return this.variant;
    },
    computedSize() {
      return this.size;
    },
    computedCorners() {
      return this.corners;
    },
    computedFinish() {
      return this.finish;
    },
    computedWide() {
      return this.wide;
    },
    computedDisabled() {
      return this.disabled;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.button-page {
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
