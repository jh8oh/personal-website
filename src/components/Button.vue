<template>
  <button @click="emitClicked()" :glitch-text="text">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true, type: String }) readonly text!: string;

  private emitClicked() {
    setTimeout(() => this.$emit("clicked"), 100);
  }
}
</script>
