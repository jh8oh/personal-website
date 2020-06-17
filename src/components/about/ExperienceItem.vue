<template>
  <section id="experience-item">
    <h3>
      {{ experience.position }} @
      <span>
        <a v-bind:href="experience.website">
          {{ experience.employer }}
        </a>
      </span>
    </h3>
    <span>{{ experience.dates }}</span>
    <p id="description" v-html="experience.description" />
  </section>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
