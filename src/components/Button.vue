<template>
  <button @click="emitClicked()" :class="buttonClass">
    <strong>{{ text }}</strong>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true, type: String }) readonly text!: string;
  @Prop({ required: false, type: String, default: "" }) readonly buttonClass!: string;

  private emitClicked() {
    setTimeout(() => this.$emit("clicked"), 100);
  }
}
</script>
