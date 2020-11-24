<template>
  <div id="about" class="page">
    <h1>About Me</h1>
    <section id="intro">
      <p>
        Hello! I'm Ji Ho Oh (오지호) but I also go by Jay. I'm a 3rd-year undergrad at the University of Waterloo.<br /><br />
        I like creating user-facing software, UI/UX and all that, mostly because I want the things I make to look
        <em>a e s t h e t i c</em>. This has led to me building websites, Android applications, and games. I also like learning
        new libraries and frameworks, preferring to learn a little about a lot of things over specializing in one
        aspect.<br /><br />Aside from coding, my hobbies include playing video games,
        reading manga, and world-building.
      </p>
      <img src="../assets/img/about/profile-pic.png" alt="Profile Picture" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>
