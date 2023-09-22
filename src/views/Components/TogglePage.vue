<template>
  <div class="toggle-page">
    <ShowcaseComponent>
      <template v-slot:component>
        <vue-u-i-toggle-component
          :state="computedActive"
          :label="computedLabel"
          :labelBehind="computedLabelBehind"
          :size="computedSize"
          :variant="computedVariant"
          :disabled="computedDisabled"
          :name="computedName"
          @toggle="activeChanged"
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
                :state="computedDisabled"
                @toggle="disabledChanged"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component :code="code" nameOfFile="ToggleComponent.vue" />
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
import VueUIToggleComponent from "@/components/Vue-UI/ToggleComponent";
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
    VueUIToggleComponent,
  },
  data() {
    return {
      active: true,
      variant: "",
      label: "Your Toggle",
      labelBehind: false,
      size: "",
      disabled: false,
      name: "toggle_name",
      variantOptions: ["info", "success", "warning", "danger"],
      sizeOptions: ["small", "medium", "large"],
      code: ToggleComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "variant",
          "String",
          "'' / 'info' / 'success' / 'warning' / 'danger'",
          "No",
          "This defines what color your toggle will be.",
        ],
        [
          "state",
          "Boolean",
          "true",
          "Yes",
          "This caters for programmatic changing of a toggle",
        ],
        [
          "labelBehind",
          "Boolean",
          "true",
          "No",
          "This positions your label infront or behind the toggle",
        ],
        [
          "size",
          "String",
          "'small' / 'medium' / 'large'",
          "No",
          "This will set the size of your toggle and the font size of the label",
        ],
        [
          "disabled",
          "Boolean",
          "true",
          "No",
          "This will disabled the toggle but if you programmatically update the toggle it will still change",
        ],
        [
          "name",
          "String",
          "some_name",
          "No",
          "Sets the id of the input field behind the scenes",
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
      if (item.target.value || item.target.value === "") {
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
      if (item.target.value || item.target.value === "") {
        this.toggleName = item.target.value;
        alert(
          `This sets the toggle id behind the scenes to "${item.target.value}""`
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
