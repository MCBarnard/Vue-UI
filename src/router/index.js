import { createRouter, createWebHashHistory } from "vue-router";
import OverviewPage from "../views/OverviewPage.vue";
import DevelopersPage from "../views/DevelopersPage.vue";
import LinkPage from "../views/Components/LinkPage.vue";
import ButtonPage from "../views/Components/ButtonPage.vue";
import TogglePage from "../views/Components/TogglePage.vue";
import InputPage from "../views/Components/InputPage.vue";
import TextAreaPage from "../views/Components/TextAreaPage.vue";
import AccordionPage from "../views/Interface/AccordionPage.vue";
import NotificationPage from "../views/Interface/NotificationPage.vue";
import CircularProgressPage from "../views/Interface/CircularProgressPage";

const routes = [
  {
    path: "/",
    name: "overview",
    component: OverviewPage,
    meta: {
      subTitle: "Overview",
      cleanname: "What is Vue UI",
      intro:
        "The team that gets the dream going. We are a small team at the cusp of greatness",
    },
  },
  {
    path: "/about-the-developers",
    name: "developers",
    component: DevelopersPage,
    meta: {
      subTitle: "The team",
      cleanname: "Meet the developers",
      intro:
        "The team that gets the dream going. We are a small team at the cusp of greatness",
    },
  },
  {
    path: "/components",
    name: "components",
    children: [
      {
        path: "/components/link",
        name: "link",
        component: LinkPage,
        meta: {
          subTitle: "Components",
          cleanname: "Link Component",
          intro:
            "We've designed quite possibly the most over engineered hyperlinks... Enjoy",
        },
      },
      {
        path: "/components/button",
        name: "button",
        component: ButtonPage,
        meta: {
          subTitle: "Components",
          cleanname: "Button Component",
          intro:
            "Press Here for Button Brilliance (Disclaimer: No buttons were harmed in the making of this showcase, but their egos may have taken a hit!)",
        },
      },
      {
        path: "/components/toggle",
        name: "toggle",
        component: TogglePage,
        meta: {
          subTitle: "Components",
          cleanname: "Toggle Component",
          intro:
            "Get ready to switch it up in the most togglific way possible. May cause spam clicking!",
        },
      },
      {
        path: "/components/input",
        name: "input",
        component: InputPage,
        meta: {
          subTitle: "Components",
          cleanname: "Input Component",
          intro:
            "Interacting with these inputs may result in sudden bouts of inspiration",
        },
      },
      {
        path: "/components/text-area",
        name: "text-area",
        component: TextAreaPage,
        meta: {
          subTitle: "Components",
          cleanname: "Text Area Component",
          intro:
            "Welcome to the thrill-filled world of text areas, where the only thing scarier than writer's block is running out of space.",
        },
      },
    ],
  },
  {
    path: "/ui-components",
    name: "ui-components",
    children: [
      {
        path: "/ui-components/accordion",
        name: "accordion",
        component: AccordionPage,
        meta: {
          subTitle: "Interface",
          cleanname: "Accordion Component",
          intro:
            "Accordion to the developers, they were harmonizing while building this component...",
        },
      },
      {
        path: "/ui-components/notification",
        name: "notification",
        component: NotificationPage,
        meta: {
          subTitle: "Interface",
          cleanname: "Notification Component",
          intro:
            "Accordion to the developers, they were harmonizing while building this component...",
        },
      },
      {
        path: "/ui-components/circular-progress",
        name: "circular-progress",
        component: CircularProgressPage,
        meta: {
          subTitle: "Interface",
          cleanname: "Circular Progress Component",
          intro:
            "I promise not to make a joke about progress bars... I'll wheelie try",
        },
      },
    ],
    meta: {
      subTitle: "The team",
      cleanname: "Meet the developers",
      intro:
        "The team that gets the dream going. We are a small team at the cusp of greatness",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
