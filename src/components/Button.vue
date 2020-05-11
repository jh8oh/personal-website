<template>
  <button class="button" :class="'class'">
    <h4>{{ text }}</h4>
  </button>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: "",
    },
    text: {
      type: String,
    },
  },
};
</script>
