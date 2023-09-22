<template>
  <div class="input-page">
    <ShowcaseComponent :wide-items="computedFull">
      <template v-slot:component>
        <vue-u-i-input-component
          :value="computedValue"
          :label="computedLabel"
          :full="computedFull"
          :placeholder="computedPlaceholder"
          :subText="computedSubText"
          :variant="computedVariant"
          :disabled="computedDisabled"
          :showSubText="computedShowSubText"
          :subTextColor="computedSubTextColor"
          :type="computedType"
          :focussing="computedFocussing"
          :autofocus="computedAutofocus"
          @change="valueChanged"
          @blur="blurInput"
          @focus="focusInput"
        />
      </template>
      <template v-slot:controls>
        <table class="props-table">
          <tr>
            <td>value</td>
            <td>
              <input-component :value="computedValue" @change="valueChanged" />
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
            <td>focussing</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedFocussing"
                @toggle="focussingChanged"
              />
            </td>
          </tr>
          <tr>
            <td>subText</td>
            <td>
              <input-component
                :value="computedSubText"
                @change="subTextChanged"
              />
            </td>
            <td class="divider"></td>
            <td>placeholder</td>
            <td>
              <input-component
                :value="computedPlaceholder"
                @change="placeholderChanged"
              />
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
            <td class="divider"></td>
            <td>showSubText</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedShowSubText"
                @toggle="showSubTextChanged"
              />
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <select-component
                :state="computedType"
                @selected="typeChanged"
                :data="typeOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>subTextColor</td>
            <td>
              <select-component
                :state="computedSubTextColor"
                @selected="subTextColorChanged"
                :data="subTextColorOptions"
                defaults="default"
              />
            </td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedAutofocus"
                @toggle="autofocusChanged"
              />
            </td>
            <td class="divider"></td>
            <td>full</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedFull"
                @toggle="fullChanged"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component :code="code" nameOfFile="InputComponent.vue" />
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
import VueUIInputComponent from "@/components/Vue-UI/InputComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import * as InputComponentMarkdown from "@/assets/ComponentMarkdown/InputComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    SelectComponent,
    InputComponent,
    ToggleComponent,
    PrismComponent,
    TableComponent,
    VueUIInputComponent,
  },
  data() {
    return {
      value: "",
      variant: "",
      label: "Your Toggle",
      full: false,
      focussing: false,
      disabled: false,
      placeholder: "Some Placeholder",
      subText: "This usually contains validation messages",
      showSubText: true,
      subTextColor: "",
      type: "",
      autofocus: true,
      variantOptions: ["info", "success", "warning", "danger"],
      subTextColorOptions: ["sub", "success", "danger"],
      typeOptions: ["text", "date", "number"],
      code: InputComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "variant",
          "String",
          "'' / 'info' / 'success' / 'warning' / 'danger'",
          "No",
          "This defines what color your input underline and label will be.",
        ],
        [
          "focussing",
          "Boolean",
          "true",
          "No",
          "This triggers the underline animation below the input",
        ],
        [
          "value",
          "String",
          "''",
          "yes",
          "This is the value inside the input and will be used to bind the component input to the outer component",
        ],
        [
          "full",
          "Boolean",
          "true",
          "No",
          "This forces the input field to be full width",
        ],
        [
          "label",
          "String",
          "'Your label'",
          "No",
          "Sets the value displayed above your input field",
        ],
        [
          "placeholder",
          "String",
          "'Enter something, anything!'",
          "No",
          "Sets the placeholder value on the input",
        ],
        [
          "subText",
          "String",
          "'Requires minimum of 1 character'",
          "No",
          "Displays a message below the input field, useful for validation feedback",
        ],
        [
          "showSubText",
          "Boolean",
          "true",
          "No",
          "Shows or hides the subtext content",
        ],
        [
          "subTextColor",
          "String",
          "'sub' / 'success' / 'danger'",
          "No",
          "Determines what color the subText should be, if not specified, we will use the variant. Danger will make the label red as well",
        ],
        ["disabled", "Boolean", "true", "No", "Makes the input field disabled"],
        [
          "type",
          "String",
          "'text' / 'date' / 'number'",
          "No",
          "Determines what type of input field we have",
        ],
        [
          "autofocus",
          "Boolean",
          "false",
          "No",
          "Configures the autofocus property on the input field",
        ],
      ],
    };
  },
  methods: {
    focusInput() {
      this.focussing = true;
    },
    blurInput() {
      this.focussing = false;
    },
    valueChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.value = item.target.value;
      }
    },
    variantChanged(item) {
      this.variant = item;
    },
    subTextColorChanged(item) {
      this.subTextColor = item;
    },
    labelChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.label = item.target.value;
      }
    },
    disabledChanged() {
      this.disabled = !this.disabled;
    },
    showSubTextChanged() {
      this.showSubText = !this.showSubText;
    },
    focussingChanged() {
      this.focussing = !this.focussing;
    },
    fullChanged() {
      this.full = !this.full;
    },
    autofocusChanged() {
      this.autofocus = !this.autofocus;
    },
    placeholderChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.placeholder = item.target.value;
      }
    },
    subTextChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.subText = item.target.value;
      }
    },
    typeChanged(item) {
      this.type = item;
    },
  },
  computed: {
    computedValue() {
      return this.value;
    },
    computedVariant() {
      return this.variant;
    },
    computedLabel() {
      return this.label;
    },
    computedDisabled() {
      return this.disabled;
    },
    computedFull() {
      return this.full;
    },
    computedPlaceholder() {
      return this.placeholder;
    },
    computedSubText() {
      return this.subText;
    },
    computedShowSubText() {
      return this.showSubText;
    },
    computedSubTextColor() {
      return this.subTextColor;
    },
    computedFocussing() {
      return this.focussing;
    },
    computedType() {
      return this.type;
    },
    computedAutofocus() {
      return this.autofocus;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.input-page {
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
