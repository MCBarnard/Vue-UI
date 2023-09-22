<template>
  <div class="toggle-page">
    <ShowcaseComponent>
      <template v-slot:component>
        <toggle-component
          :state="computedActive"
          :label="computedLabel"
          :labelBehind="computedLabelBehind"
          :size="computedSize"
          :variant="computedVariant"
          :disabled="computedDisabled"
          :name="computedName"
        />
      </template>
      <template v-slot:controls>
        <table class="props-table">
          <tr>
            <td>state</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedActive"
                @toggle="activeChanged"
              />
            </td>
            <td class="divider"></td>
            <td>variant</td>
            <td>
              <select-component
                :state="computedVariant"
                @selected="variantChanged"
                :data="variantOptions"
                defaults="default"
              />
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <input-component :value="computedLabel" @change="labelChanged" />
            </td>
            <td class="divider"></td>
            <td>labelBehind</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedLabelBehind"
                @toggle="labelBehindChanged"
              />
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <select-component
                :state="computedSize"
                @selected="sizeChanged"
                :data="sizeOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>name</td>
            <td>
              <input-component :value="computedName" @change="nameChanged" />
            </td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedLabelBehind"
                @toggle="labelBehindChanged"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component :code="code" nameOfFile="LinkComponent.vue" />
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
import InputComponent from "@/components/Controls/InputComponent";
import ToggleComponent from "@/components/Controls/ToggleComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import * as ToggleComponentMarkdown from "@/assets/ComponentMarkdown/ToggleComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    SelectComponent,
    InputComponent,
    ToggleComponent,
    PrismComponent,
    TableComponent,
  },
  data() {
    return {
      active: true,
      variant: "",
      label: "",
      labelBehind: false,
      size: "",
      disabled: false,
      name: "toggle-name",
      variantOptions: ["info", "success", "warning", "danger"],
      sizeOptions: ["", "small", "medium", "large"],
      code: ToggleComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "variant",
          "String",
          "'' / 'info' / 'success' / 'warning' / 'danger'",
          "No",
          "This defines what color your link will be.",
        ],
        [
          "text",
          "String",
          "true",
          "Yes",
          "This configures the rendered text on the screen",
        ],
        [
          "to",
          "String",
          "link",
          "No",
          "This defines what component gets used under the hood, if it isn't empty we use a vue-route component, to which you we pass {name: 'theNameYouSpecified'}",
        ],
        [
          "href",
          "String",
          "http://localhost",
          "No",
          "This defines what component gets used under the hood, if it isn't empty and the 'to' prop is empty we use an anchor tag, to which you we pass href='theHrefYouSpecified'",
        ],
        [
          "title",
          "String",
          "Text to come up when hovering the link",
          "No",
          "We set the title prop on the anchor tag",
        ],
        [
          "openOnNewPage",
          "Boolean",
          "true",
          "No",
          "This will cause the link to open in a new tab",
        ],
      ],
    };
  },
  methods: {
    variantChanged(item) {
      this.variant = item;
    },
    activeChanged() {
      this.active = !this.active;
    },
    labelBehindChanged() {
      this.labelBehind = !this.labelBehind;
    },
    labelChanged(item) {
      if (item.target.value) {
        this.label = item.target.value;
      }
    },
    sizeChanged(item) {
      this.size = item;
    },
    disabledChanged() {
      this.disabled = !this.disabled;
    },
    nameChanged(item) {
      if (item.target.value) {
        this.toggleName = item.target.value;
        alert(
          `This sets the toggle id behind the scenes to ${item.target.value}`
        );
      }
    },
  },
  computed: {
    computedVariant() {
      return this.variant;
    },
    computedActive() {
      return this.active;
    },
    computedLabel() {
      return this.label;
    },
    computedLabelBehind() {
      return this.labelBehind;
    },
    computedSize() {
      return this.size;
    },
    computedDisabled() {
      return this.disabled;
    },
    computedName() {
      return this.name;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.toggle-page {
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
