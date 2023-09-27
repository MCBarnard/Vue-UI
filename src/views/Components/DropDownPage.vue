<template>
  <div class="dropdown-page">
    <ShowcaseComponent :wide-items="computedWide">
      <template v-slot:component>
        <dropdown-component
          :items="items"
          :selected="computedSelected"
          @selected="dropDownSelectedChanged"
          :variant="selectedVariant"
          :disabled="computedDisabled"
          :full="computedWide"
          :placeholder="computedPlaceholder"
          :focus="computedFocussing"
          @opened="console.log('\'opened\' event emitted ')"
          @closed="console.log('\'closed\' event emitted ')"
        />
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
          <tr>
            <td>full</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedWide"
                @toggle="wideChange"
              />
            </td>
            <td class="divider"></td>
            <td>selected</td>
            <td>
              <select-component
                :state="computedSelected"
                @selected="selectedChanged"
                :data="selectableItems"
                defaults="default"
              />
            </td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <input-component
                :value="computedPlaceholder"
                @change="placeholderChanged"
              />
            </td>
            <td class="divider"></td>
            <td>focus</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedFocussing"
                @toggle="focussingChanged"
              />
            </td>
          </tr>
        </table>
        <table class="props-table">
          <tr>
            <td>items</td>
            <td>
              <text-area-component
                :value="JSON.stringify(items)"
                variant="info"
                full
                width="450px"
                height="115px"
                :focussing="focussingtextArea"
                @focus="focussingtextArea = true"
                @blur="focussingtextArea = false"
                @change="itemsChanged"
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
import DropdownComponent from "@/components/Vue-UI/DropdownComponent.vue";
import ToggleComponent from "@/components/Controls/ToggleComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import TextAreaComponent from "@/components/Vue-UI/TextAreaComponent";
import InputComponent from "@/components/Controls/InputComponent";
import * as DropdownComponentMarkdown from "@/assets/ComponentMarkdown/DropdownComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    SelectComponent,
    ToggleComponent,
    PrismComponent,
    TableComponent,
    TextAreaComponent,
    InputComponent,
    DropdownComponent,
  },
  data() {
    return {
      focussingtextArea: false,
      wide: false,
      disabled: false,
      variant: "",
      placeholder: "",
      selected: "",
      size: "large",
      corners: "rounded",
      variantOptions: ["info", "success", "warning", "danger"],
      sizeOptions: ["small", "medium", "large"],
      cornerOptions: ["round", "rounded", "sharp"],
      focussing: true,
      items: [
        { value: "1", text: "One" },
        { value: "2", text: "Two" },
        { value: "3", text: "Three" },
        { value: "4", text: "Five" },
        { value: "5", text: "Six" },
        { value: "6", text: "Seven" },
        { value: "7", text: "Eight" },
        { value: "8", text: "Nine" },
        { value: "9", text: "Ten" },
      ],
      code: DropdownComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "variant",
          "String",
          "'' / 'info' / 'success' / 'warning' / 'danger'",
          "No",
          "This defines what flavor your dropdown will be.",
        ],
        [
          "selected",
          "String",
          "1",
          "No",
          "This controls what the selected value is that you will be using",
        ],
        [
          "placeholder",
          "String",
          "Select a number",
          "No",
          "This will display this message if the selected value is undefined",
        ],
        [
          "full",
          "Boolean",
          "true",
          "No",
          "Toggles the dropdown to be full width or not",
        ],
        [
          "disabled",
          "Boolean",
          "true",
          "No",
          "Turn the dropdown into a disabled state with slightly lighter variant shades and wont emit events",
        ],
        [
          "focus",
          "Boolean",
          "true",
          "No",
          "Force the dropdown into a focussed state",
        ],
      ],
    };
  },
  methods: {
    placeholderChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.placeholder = item.target.value;
      }
    },
    variantChanged(item) {
      this.variant = item;
    },
    itemsChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.items = JSON.parse(item.target.value);
      }
    },
    sizeChanged(item) {
      this.size = item;
    },
    focussingChanged() {
      this.focussing = !this.focussing;
    },
    handleCornersChange(item) {
      this.corners = item;
    },
    wideChange() {
      this.wide = !this.wide;
    },
    disabledChange() {
      this.disabled = !this.disabled;
    },
    dropDownSelectedChanged({ value }) {
      this.selected = value;
    },
    selectedChanged(item) {
      this.selected = item;
    },
  },
  computed: {
    selectableItems() {
      return this.items.map((item) => item.value);
    },
    computedSelected() {
      return this.selected;
    },
    computedFocussing() {
      return this.focussing;
    },
    computedPlaceholder() {
      return this.placeholder;
    },
    selectedVariant() {
      return this.variant;
    },
    computedSize() {
      return this.size;
    },
    computedCorners() {
      return this.corners;
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

.dropdown-page {
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
