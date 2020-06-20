<template>
  <a class="button" :class="color" :href="href">
    <strong>{{ text }}</strong>
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
