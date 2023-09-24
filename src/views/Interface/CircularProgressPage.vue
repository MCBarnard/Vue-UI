<template>
  <div class="circular-progress-page">
    <ShowcaseComponent>
      <template v-slot:component>
        <circular-progress-component
          :rounded="computedRounded"
          height="160px"
          width="160px"
          :gradient="gradient"
          :variant="variant"
          :value="computedProgressValue"
          ref="circulatProgress"
        />
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
            <td>gradient</td>
            <td>
              <input-component
                :value="computedProgressValue"
                @change="progressValueChanged"
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
      progressValue: 78,
      rounded: true,
      gradient: true,
      variant: "",
      variantOptions: ["info", "success", "warning", "danger"],
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
      this.$refs.circulatProgress.triggerAnimation();
    },
    roundedChanged() {
      this.rounded = !this.rounded;
    },
    variantChanged(item) {
      this.variant = item;
    },
    gradientChanged() {
      this.gradient = !this.gradient;
    },
  },
  computed: {
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
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.circular-progress-page {
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
