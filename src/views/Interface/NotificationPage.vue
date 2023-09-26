<template>
  <div class="notification-page">
    <ShowcaseComponent :key="key">
      <template v-slot:component>
        <notification-component
          :variant="computedVariant"
          :dark="false"
          @closed="handleAcknowledged"
          :icon="computedIcon"
          ref="notifications"
          :title="computedTitle"
          :sub-text="computedSubTitle"
        ></notification-component>
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
            <td>hideNotification()</td>
            <td>
              <button @click="acknowledgeNotification">
                {{ notificationButtonText }}
              </button>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <select-component
                :state="computedIcon"
                @selected="iconChanged"
                :data="iconOptions"
                defaults="default"
              />
            </td>
            <td class="divider"></td>
            <td>title</td>
            <td>
              <input-component :value="computedTitle" @change="titleChanged" />
            </td>
          </tr>
          <tr>
            <td>subTitle</td>
            <td>
              <input-component
                :value="computedSubTitle"
                @change="subTitleChanged"
              />
            </td>
            <td class="divider"></td>
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
import NotificationComponent from "@/components/Vue-UI/NotificationComponent";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import SelectComponent from "@/components/Controls/SelectComponent";
import PrismComponent from "@/components/PrismComponent";
import TableComponent from "@/components/TableComponent";
import InputComponent from "@/components/Controls/InputComponent";
import * as NotificationComponentMarkdown from "@/assets/ComponentMarkdown/NotificationComponentMarkdown";

export default {
  components: {
    ShowcaseComponent,
    PrismComponent,
    TableComponent,
    NotificationComponent,
    SelectComponent,
    InputComponent,
  },
  data() {
    return {
      key: 0,
      variant: "",
      icon: "",
      title: "John Doe",
      subTitle: "Great, thanks a lot for the quick response!",
      deleted: false,
      variantOptions: ["info", "success", "warning", "danger"],
      iconOptions: ["chat_bubble", "done", "delete", "grade"],
      code: NotificationComponentMarkdown.default,
      propHeadings: ["Prop", "Type", "Example", "Required", "Description"],
      propDetails: [
        [
          "variant",
          "String",
          "info",
          "No",
          "Selects the theme for the notification",
        ],
        [
          "icon",
          "String",
          "done",
          "No",
          "Inserts a specific google icons icon into the notification section",
        ],
        [
          "title",
          "String",
          "Success!",
          "Yes",
          "Sets the heading of the notification",
        ],
        [
          "subTitle",
          "String",
          "You have saved your progress",
          "Yes",
          "Sets the subtext section of the notification",
        ],
      ],
    };
  },
  methods: {
    variantChanged(item) {
      return (this.variant = item);
    },
    iconChanged(item) {
      return (this.icon = item);
    },
    acknowledgeNotification() {
      if (this.deleted) {
        this.key++;
        this.deleted = false;
      } else {
        this.$refs.notifications.hideNotification();
      }
    },
    handleAcknowledged() {
      this.deleted = true;
    },
    titleChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.title = item.target.value;
      }
    },
    subTitleChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.subTitle = item.target.value;
      }
    },
  },
  computed: {
    computedVariant() {
      return this.variant;
    },
    computedIcon() {
      return this.icon;
    },
    notificationButtonText() {
      return this.deleted ? "Reset" : "Acknowledge Notification";
    },
    computedTitle() {
      return this.title;
    },
    computedSubTitle() {
      return this.subTitle;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.notification-page {
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
