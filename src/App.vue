<template>
  <div class="site-wrap">
    <nav class="site-nav">
      <div class="name">Vue UI Library</div>
      <ul class="nav-list">
        <li :class="['nav-list-item', { active: $route.name === 'overview' }]">
          <router-link :to="{ name: 'overview' }">Overview</router-link>
        </li>
        <li
          :class="[
            'nav-list-item',
            { active: $route.path.includes('/components') },
          ]"
        >
          <a @click="toggleComponentsDropdown">Basic Components</a>
          <div :class="['caret', { active: showComponentsDropdown }]">
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul
            id="componentsDropdown"
            :class="['sub-nav-list', { open: showComponentsDropdown }]"
          >
            <li>
              <router-link
                :to="{ name: 'link' }"
                :class="[{ active: $route.name === 'link' }]"
              >
                Link
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'button' }"
                :class="[{ active: $route.name === 'button' }]"
              >
                Button
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'toggle' }"
                :class="[{ active: $route.name === 'toggle' }]"
              >
                Toggle
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'input' }"
                :class="[{ active: $route.name === 'input' }]"
              >
                Input
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'text-area' }"
                :class="[{ active: $route.name === 'text-area' }]"
              >
                TextArea
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'dropdown' }"
                :class="[{ active: $route.name === 'dropdown' }]"
              >
                Dropdown
              </router-link>
            </li>
          </ul>
        </li>
        <li
          :class="[
            'nav-list-item',
            { active: $route.path.includes('/ui-components') },
          ]"
        >
          <a @click="toggleUIComponentsDropdown">UI Components</a>
          <div :class="['caret', { active: showUIComponentsDropdown }]">
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul
            id="uiComponentsDropdown"
            :class="['sub-nav-list', { open: showUIComponentsDropdown }]"
          >
            <li>
              <router-link
                :to="{ name: 'accordion' }"
                :class="[{ active: $route.name === 'accordion' }]"
              >
                Accordion
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'notification' }"
                :class="[{ active: $route.name === 'notification' }]"
              >
                Notification
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'circular-progress' }"
                :class="[{ active: $route.name === 'circular-progress' }]"
              >
                Circular Progress
              </router-link>
            </li>
          </ul>
        </li>
        <li
          :class="[
            'nav-list-item',
            { active: $route.path.includes('/fully-built') },
          ]"
        >
          <a @click="toggleReadyMadeComponentsDropdown">Fully Built</a>
          <div :class="['caret', { active: showReadyMadeComponentsDropdown }]">
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul
            id="readyMadeComponentsDropdown"
            :class="['sub-nav-list', { open: showReadyMadeComponentsDropdown }]"
          >
            <li>
              <router-link
                :to="{ name: 'fully-built-sign-up' }"
                :class="[{ active: $route.name === 'fully-built-sign-up' }]"
              >
                Onboarding
              </router-link>
            </li>
          </ul>
        </li>
        <li
          :class="['nav-list-item', { active: $route.name === 'developers' }]"
        >
          <router-link :to="{ name: 'developers' }">The Developers</router-link>
        </li>
      </ul>
      <div class="note">
        <h3>Spread the word</h3>
        <p>
          These components are free for anyone to use, share it with others!
        </p>
      </div>
    </nav>
    <main class="page-content">
      <header>
        <div class="breadcrumbs">
          <a>{{ subHeading }}</a>
        </div>

        <h1 class="title">{{ heading }}</h1>
        <p>{{ intro }}</p>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showComponentsDropdown: false,
      showUIComponentsDropdown: false,
      showReadyMadeComponentsDropdown: false,
    };
  },
  computed: {
    subHeading() {
      return this.$route.meta.subTitle;
    },
    heading() {
      return this.$route.meta.cleanname;
    },
    intro() {
      return this.$route.meta.intro;
    },
  },
  methods: {
    toggleComponentsDropdown() {
      const dropdown = document.getElementById("componentsDropdown");
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      } else {
        this.closeToggle("uiComponentsDropdown");
        this.closeToggle("readyMadeComponentsDropdown");
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      }
      this.showComponentsDropdown = !this.showComponentsDropdown;
    },
    toggleUIComponentsDropdown() {
      const dropdown = document.getElementById("uiComponentsDropdown");
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        this.closeToggle("componentsDropdown");
        this.closeToggle("readyMadeComponentsDropdown");
      }
      this.showUIComponentsDropdown = !this.showUIComponentsDropdown;
    },
    toggleReadyMadeComponentsDropdown() {
      const dropdown = document.getElementById("readyMadeComponentsDropdown");
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        this.closeToggle("componentsDropdown");
        this.closeToggle("uiComponentsDropdown");
      }
      this.showReadyMadeComponentsDropdown =
        !this.showReadyMadeComponentsDropdown;
    },
    closeToggle(id) {
      const dropdown = document.getElementById(id);
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      }
      if (id === "readyMadeComponentsDropdown") {
        this.showReadyMadeComponentsDropdown = false;
      }
      if (id === "uiComponentsDropdown") {
        this.showUIComponentsDropdown = false;
      }
      if (id === "componentsDropdown") {
        this.showComponentsDropdown = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat&family=Poppins:wght@300;400;500;600;700;800&display=swap");
* {
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  background: #fff;
  padding: 0;
  margin: 0;
  font-size: 12px;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
  display: grid;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
}

#app {
  height: 100%;
  width: 100%;
}

.site-wrap {
  display: flex;
  height: 100%;
}

.site-nav {
  background: #0b121b;
  color: white;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;

  a {
    color: inherit;
    font-weight: 400;
    line-height: 1.5;
    cursor: pointer;
    text-decoration: none;
  }

  .nav-list {
    margin: 0;
    padding: 0;
    margin-bottom: auto;
    list-style: none;
    max-height: 380px;
    overflow-y: auto;

    .nav-list-item {
      position: relative;

      .caret {
        position: absolute;
        top: 10px;
        right: 45px;
        pointer-events: none;
        transition: all 0.2s ease;
        transform: rotate(0deg);

        &.active {
          transform: translateY(-5px) rotate(-180deg);
        }
      }
      a {
        display: block;
        padding: 0.75rem 0.5rem 0.75rem 2rem;
        position: relative;
        &:hover {
          color: #4371c5;
        }
      }
      &.active > a {
        background: linear-gradient(to right, #101b2d, transparent);
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #4676cd;
          width: 5px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
    .sub-nav-list {
      list-style: none;
      padding-left: 1rem;
      margin-bottom: 0.5rem;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      a {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;

        &.active {
          color: #4371c5;
          font-weight: bold;
        }
      }
    }
  }
}

.page-content {
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  overflow-y: auto;
  max-height: 100vh;

  header {
    display: block;
    background: #fff;
    border-top-left-radius: 2rem;

    .breadcrumbs {
      color: #4a4a4a;
      font-weight: 400;
      line-height: 1.5;
      font-family: "Lobster", cursive;

      a {
        color: #3273dc;
        cursor: default;
        text-decoration: none;
      }
    }

    .title {
      margin: 0;
      padding: 0;
      word-break: break-word;
      color: #363636;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.125;
    }

    p {
      margin: 0.5rem 0 0;
      max-width: 600px;
      font-size: 12px;
      color: #939393;
    }
  }
}

.note {
  width: calc(100% - 6rem);
  margin: 2rem;
  background: #171c26;
  border-radius: 10px;
  padding: 1rem;
  h3 {
    font-size: 0.9rem;
    margin: 0 0 0.4rem 0;
  }
  p {
    color: #717783;
  }
}

.name {
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.3rem;
  position: relative;
  margin: 2rem 0 2rem 0;
  padding: 0 2.5rem 0.5rem 2rem;
  width: calc(100% - 3rem);
}

main {
  border-top-left-radius: 2rem;
  background: #ebecee;
  margin-left: -2rem;
  position: relative;
  > header {
    padding: 2rem;
  }
}
</style>
