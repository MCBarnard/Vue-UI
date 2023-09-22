export default `<template>
  <span :class="[variant]">
    <router-link
      class="simple-link"
      v-if="to && !computedOpenOnNewPage"
      :to="{ name: to }"
    >
      {{ text }}
    </router-link>
    <router-link
      class="simple-link"
      v-else-if="to && computedOpenOnNewPage"
      :to="{ name: to }"
      target="_blank"
    >
      {{ text }}
    </router-link>

    <a
      v-else-if="href && !to && !computedOpenOnNewPage"
      :class="['simple-link']"
      :href="href"
      :title="title"
    >
      {{ text }}
    </a>
    <a
      v-else-if="href && !to && computedOpenOnNewPage"
      :class="['simple-link']"
      :href="href"
      :title="title"
      target="_blank"
      rel="noreferrer"
    >
      {{ text }}
    </a>
  </span>
</template>

<script>
export default {
  name: "LinkComponent",
  props: {
    to: String, // "", "Something"
    href: String, // "", "Something"
    text: String, // "", "Something"
    title: String, // "", "Something"
    openOnNewPage: Boolean, // true / false
    variant: String, // "", info, success, warning, danger, sub
  },
  computed: {
    computedOpenOnNewPage() {
      return this.openOnNewPage;
    },
  },
};
</script>

<style scoped lang="scss">
$default-color: #a900ff;
$info-color: #218afa;
$success-color: #00b014;
$warning-color: #e3a700;
$danger-color: #e20404;
$sub-color: #aaaaaa;

$default-color-darker: #7d05ba;
$info-color-darker: #0075f3;
$success-color-darker: #049314;
$warning-color-darker: #c89300;
$danger-color-darker: #ac0101;
$sub-color-darker: #8b8989;

.simple-link {
  text-decoration: none;
  outline: none;
  color: $default-color;
  cursor: pointer;

  &:hover {
    outline: none;
    text-decoration: underline;
    color: $default-color-darker;
  }
}

.info {
  .simple-link {
    color: $info-color;

    &:hover {
      color: $info-color-darker;
    }
  }
}

.success {
  .simple-link {
    color: $success-color;

    &:hover {
      color: $success-color-darker;
    }
  }
}

.warning {
  .simple-link {
    color: $warning-color;

    &:hover {
      color: $warning-color-darker;
    }
  }
}

.danger {
  .simple-link {
    color: $danger-color;

    &:hover {
      color: $danger-color-darker;
    }
  }
}

.sub {
  .simple-link {
    color: $sub-color;

    &:hover {
      color: $sub-color-darker;
    }
  }
}
</style>
`;
