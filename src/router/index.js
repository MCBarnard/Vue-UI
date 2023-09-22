import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "overview",
    component: () =>
      import(
        /* webpackChunkName: "overview-page" */ "../views/OverviewPage.vue"
      ),
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
    component: () =>
      import(
        /* webpackChunkName: "developers" */ "../views/DevelopersPage.vue"
      ),
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
        path: "/components/get-started",
        name: "get-started",
        component: () =>
          import(
            /* webpackChunkName: "get-started" */ "../views/Components/GetStarted.vue"
          ),
        meta: {
          subTitle: "Components",
          cleanname: "Get Started with Vue UI",
          intro:
            "The team that gets the dream going. We are a small team at the cusp of greatness",
        },
      },
      {
        path: "/components/link",
        name: "link",
        component: () =>
          import(
            /* webpackChunkName: "link-page" */ "../views/Components/LinkPage.vue"
          ),
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
        component: () =>
          import(
            /* webpackChunkName: "button-page" */ "../views/Components/ButtonPage.vue"
          ),
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
        component: () =>
          import(
            /* webpackChunkName: "toggle-page" */ "../views/Components/TogglePage.vue"
          ),
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
        component: () =>
          import(
            /* webpackChunkName: "input-page" */ "../views/Components/InputPage.vue"
          ),
        meta: {
          subTitle: "Components",
          cleanname: "Input Component",
          intro:
            "The team that gets the dream going. We are a small team at the cusp of greatness",
        },
      },
      {
        path: "/components/text-area",
        name: "text-area",
        component: () =>
          import(
            /* webpackChunkName: "text-area-page" */ "../views/Components/TextAreaPage.vue"
          ),
        meta: {
          subTitle: "Components",
          cleanname: "Text Area Component",
          intro:
            "The team that gets the dream going. We are a small team at the cusp of greatness",
        },
      },
      {
        path: "/components/accordion",
        name: "accordion",
        component: () =>
          import(
            /* webpackChunkName: "accordion-page" */ "../views/Components/AccordionPage.vue"
          ),
        meta: {
          subTitle: "Components",
          cleanname: "Accordion Component",
          intro:
            "The team that gets the dream going. We are a small team at the cusp of greatness",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
