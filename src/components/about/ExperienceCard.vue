<template>
  <div id="details">
    <h3>
      {{ activeExperience.position }} @ <a :href="activeExperience.website">{{ activeExperience.employer }}</a>
    </h3>
    <span id="dates">{{ activeExperience.dates }}</span>
    <p v-html="activeExperience.description" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ExperienceCard extends Vue {
  @Prop({ required: true, type: Object }) readonly activeExperience!: object;
}
</script>
