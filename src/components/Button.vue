<template>
  <a class="button" :class="color" :href="href">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
    href: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
