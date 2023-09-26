<template>
  <div class="circular-progress-page">
    <ShowcaseComponent>
      <template v-slot:component>
        <circular-progress-component
          :rounded="computedRounded"
          :gradient="gradient"
          :variant="variant"
          :value="computedProgressValue"
          ref="circulatProgress"
          :show-track="computedShowTrack"
          :bold="computedWeight"
          :size="computedSize"
          :hide-value="computedHideValue"
        />
      </template>
      <template v-slot:contextual>
        <div :class="['context', { showContext }]">
          Click on the toggle animation button...
        </div>
      </template>
      <template v-slot:controls>
        <table class="props-table">
          <tr>
            <td>variant</td>
            <td>
              <select-component
                :state="computedVariant"
                @selected="variantChanged"
                :data="variantOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>rounded</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedRounded"
                @toggle="roundedChanged"
              />
            </td>
          </tr>
          <tr>
            <td>gradient</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedGradient"
                @toggle="gradientChanged"
              />
            </td>
            <td class="divider"></td>
            <td>triggerAnimation()</td>
            <td>
              <vue-u-i-button-component
                size="medium"
                variant="info"
                corners="rounded"
                @click="triggerProgressAnimation"
              >
                Trigger Animation
              </vue-u-i-button-component>
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <input-component
                :value="computedProgressValue"
                @change="progressValueChanged"
                type="number"
              />
            </td>
            <td class="divider"></td>
            <td>showTrack</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedShowTrack"
                @toggle="showTrackChanged"
              />
            </td>
          </tr>
          <tr>
            <td>bold</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedWeight"
                @toggle="weightChanged"
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
            <td>hideValue</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedHideValue"
                @toggle="hideValueChanged"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component
          :code="code"
          nameOfFile="CircularProgressComponent.vue"
        />
      </template>
      <template v-slot:docs>
        <table-component :headings="propHeadings" :items="propDetails" />
      </template>
    </ShowcaseComponent>
  </div>
</template>

<script>
import ShowcaseComponent from "@/components/ShowcaseComponent";
import ToggleComponent from "@/components/Controls/ToggleComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import SelectComponent from "@/components/Controls/SelectComponent";
import CircularProgressComponent from "@/components/Vue-UI/CircularProgressComponent";
import VueUIButtonComponent from "@/components/Vue-UI/ButtonComponent";
import InputComponent from "@/components/Controls/InputComponent";
import * as CircularProgressComponentMarkdown from "@/assets/ComponentMarkdown/CircularProgressComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    ToggleComponent,
    PrismComponent,
    TableComponent,
    SelectComponent,
    CircularProgressComponent,
    VueUIButtonComponent,
    InputComponent,
  },
  data() {
    return {
      showContext: true,
      progressValue: 78,
      size: "extra-large",
      bold: true,
      rounded: true,
      hideValue: false,
      gradient: true,
      showTrack: false,
      variant: "",
      variantOptions: ["info", "success", "warning", "danger"],
      sizeOptions: ["small", "medium", "large", "extra-large"],
      weightOptions: ["normal", "bold"],
      code: CircularProgressComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "autoClose",
          "Boolean",
          "true",
          "No",
          "If true, the accordion will automatically close previous tabs",
        ],
        [
          "rounded",
          "Boolean",
          "true",
          "No",
          "Will round the top and bottom items giving it a rounded look",
        ],
        [
          "variant",
          "String",
          "'' / info / success / warning / danger",
          "No",
          "Selects the color scheme of the component",
        ],
        [
          "gradient",
          "Boolean",
          "true",
          "No",
          "Changes the color of the fill to a gradient",
        ],
        [
          "value",
          "Number",
          "99",
          "Yes",
          "Determines the total fillness of the progress bar",
        ],
        [
          "bold",
          "Boolean",
          "true",
          "No",
          "Sets the fontWeight css property of the percentage count",
        ],
        [
          "hideValue",
          "Boolean",
          "false",
          "No",
          "Shows or hides the percentage count",
        ],
        [
          "triggerAnimation()",
          "Function",
          "",
          "Yes",
          "Allows you to start the animation, call on mounted or when you want a specific event to trigger it",
        ],
        [
          "showTrack",
          "Boolean",
          "true",
          "No",
          "Shows or hides the gradient track",
        ],
        [
          "size",
          "String",
          "small / medium / large / extra-large",
          "No",
          "Sets the size of the component",
        ],
      ],
    };
  },
  methods: {
    progressValueChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.progressValue = item.target.value;
      }
    },
    triggerProgressAnimation() {
      this.showContext = false;
      this.$refs.circulatProgress.triggerAnimation();
    },
    roundedChanged() {
      this.rounded = !this.rounded;
    },
    variantChanged(item) {
      this.variant = item;
    },
    weightChanged() {
      this.bold = !this.bold;
    },
    sizeChanged(item) {
      this.size = item;
    },
    gradientChanged() {
      this.gradient = !this.gradient;
    },
    showTrackChanged() {
      this.showTrack = !this.showTrack;
    },
    hideValueChanged() {
      this.hideValue = !this.hideValue;
    },
  },
  computed: {
    computedHideValue() {
      return this.hideValue;
    },
    computedProgressValue() {
      return this.progressValue;
    },
    computedRounded() {
      return this.rounded;
    },
    computedVariant() {
      return this.variant;
    },
    computedGradient() {
      return this.gradient;
    },
    computedShowTrack() {
      return this.showTrack;
    },
    computedWeight() {
      return this.bold;
    },
    computedSize() {
      return this.size;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.circular-progress-page {
  padding-top: 3rem;

  .context {
    transition: all 2s ease;
    pointer-events: none;
    opacity: 0;

    &.showContext {
      opacity: 1;
    }
  }

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
