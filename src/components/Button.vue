<template>
  <button :class="color" v-on:click="emitClick()">
    <strong>{{ text }}</strong>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitClick() {
      this.$emit("clicked");
    },
  },
};
</script>
