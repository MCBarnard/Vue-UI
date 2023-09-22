<template>
  <div class="accorion-page">
    <ShowcaseComponent :wide-items="true">
      <template v-slot:component>
        <accordion-component
          :rounded="computedRounded"
          :autoClose="computedAutoClose"
          :items="items"
        />
      </template>
      <template v-slot:controls>
        <table class="props-table">
          <tr>
            <td>autoClose</td>
            <td>
              <toggle-component
                size="small"
                variant="info"
                :state="computedAutoClose"
                @toggle="autoCloseChanged"
              />
            </td>
            <td class="divider"></td>
            <td>rounded</td>
            <toggle-component
              size="small"
              variant="info"
              :state="computedRounded"
              @toggle="roundedChanged"
            />
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
                height="250px"
                :focussing="focusTextArea"
                @focus="focusTextArea = true"
                @blur="focusTextArea = false"
                @change="itemsChanged"
              />
            </td>
          </tr>
        </table>
      </template>
      <template v-slot:code>
        <prism-component :code="code" nameOfFile="AccordionComponent.vue" />
      </template>
      <template v-slot:docs>
        <table-component :headings="propHeadings" :items="propDetails" />
      </template>
    </ShowcaseComponent>
  </div>
</template>

<script>
import AccordionComponent from "@/components/Vue-UI/AccordionComponent";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import ToggleComponent from "@/components/Controls/ToggleComponent";
import TextAreaComponent from "@/components/Vue-UI/TextAreaComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import * as AccordionComponentMarkdown from "@/assets/ComponentMarkdown/AccordionComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    ToggleComponent,
    PrismComponent,
    TableComponent,
    AccordionComponent,
    TextAreaComponent,
  },
  data() {
    return {
      focusTextArea: false,
      autoClose: false,
      rounded: false,
      items: [
        {
          title: "What is the answer to life, the universe and everything?",
          content: "42",
        },
        {
          title: " How do you catch a squirrel?",
          content: "Climb a tree and act like a nut!",
        },
        {
          title: "What do you call a snowman with a six-pack?",
          content: "An abdominal snowman!",
        },
      ],
      code: AccordionComponentMarkdown.default,
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
          "items",
          "Array",
          "[{title: 'Some question', content: 'some answer'}]",
          "Yes",
          "The content of your accordion",
        ],
      ],
    };
  },
  methods: {
    autoCloseChanged() {
      this.autoClose = !this.autoClose;
    },
    roundedChanged() {
      this.rounded = !this.rounded;
    },
    itemsChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.items = JSON.parse(item.target.value);
      }
    },
  },
  computed: {
    computedAutoClose() {
      return this.autoClose;
    },
    computedRounded() {
      return this.rounded;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.accorion-page {
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
