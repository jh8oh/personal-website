<template>
  <div>
    <h4>
      {{ experience.position }} @
      <a v-bind:href="experience.website">
        {{ experience.employer }}
      </a>
    </h4>
    <span>{{ experience.dates }}</span>
    <p v-html="experience.description" />
  </div>
</template>

<script>
export default {
	props:{
		experience:{
			type: Object,
			required: true
		}
	}
};
</script>
