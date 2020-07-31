<template>
  <div id="about">
    <section id="intro" class="page">
      <h1>About Me</h1>
      <div id="intro-content">
        <img src="../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <p>
          Hello! I'm Ji Ho Oh (오지호), or Jay if that's easier to pronounce,
          and I'm a 2nd-year student at the University of Waterloo. I like
          making user-facing software, though the user's me most of the time.
          This has led to me building websites, Android applications, and games.
          I also enjoy learning new technologies and expanding my repertoire of
          libraries, frameworks, and languages. Aside from coding, my hobbies
          include playing video games, reading manga, and world-building. One of
          my goals is to learn how to compose music, specifically BGM for video
          games.
        </p>
      </div>
      <NextSectionButton :href="'#experience'" />
    </section>
    <section id="experience" class="background-alt">
      <div id="experience-container">
        <h2>Experiences</h2>
        <div id="experience-content">
          <ul id="timeline">
            <li
              v-for="experience in experiences"
              :key="experience.id"
              @click="activeExperienceId = experience.id"
              :class="{ active: activeExperienceId === experience.id }"
            >
              <h3>{{ experience.employer }}</h3>
            </li>
          </ul>
          <ExperienceCard :experience="experiences[activeExperienceId]" />
        </div>
      </div>
      <NextSectionButton :href="'#interests'" />
    </section>
    <section id="interests"></section>
    <Footer />
  </div>
</template>

<script>
import NextSectionButton from "../components/NextSectionButton.vue";
import ExperienceCard from "../components/about/ExperienceCard.vue";
import Footer from "../layouts/Footer.vue";

import experiences from "../assets/json/about/experiences.json";

export default {
  components: { NextSectionButton, ExperienceCard, Footer },
  data() {
    return {
      activeExperienceId: 0,
      experiences: experiences,
    };
  },
};
</script>
