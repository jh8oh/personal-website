<template>
  <div id="about">
    <section id="intro" class="page">
      <div class="container">
        <h1>About Me</h1>
        <div id="intro-content">
          <img src="../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
          <p>
            Hello! I'm Ji Ho Oh (오지호), or Jay if that's easier to pronounce, and I'm a 2nd-year student at the
            University of Waterloo. I like making user-facing software, though the user's me most of the time. This has
            led to me building websites, Android applications, and games. I also enjoy learning new technologies and
            expanding my repertoire of libraries, frameworks, and languages. Aside from coding, my hobbies include
            playing video games, reading manga, and world-building. One of my goals is to learn how to compose music,
            specifically BGM for video games.
          </p>
        </div>
      </div>
      <NextSectionButton :href="'#experience'" />
    </section>
    <section id="abilities" class="background-alt">
      <div class="container">
        <h2>What I do</h2>
        <div id="abilities-content">
          <AbilityCard
            v-for="ability in activeAbilities"
            :key="ability.id"
            :ability="ability"
            @toggleExpand="abilityExpanded = !abilityExpanded"
          />
        </div>
      </div>
      <NextSectionButton :href="'#experience'" />
    </section>
    <section id="experience">
      <div class="container">
        <h2>Experience</h2>
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
          <transition name="fade-slide-left" mode="out-in">
            <ExperienceCard :key="activeExperienceId" :experience="experiences[activeExperienceId]" />
          </transition>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import NextSectionButton from "../components/NextSectionButton.vue";
import AbilityCard from "../components/about/AbilityCard.vue";
import ExperienceCard from "../components/about/ExperienceCard.vue";
import Footer from "../layouts/Footer.vue";

import abilities from "../assets/json/about/abilities.json";
import experiences from "../assets/json/about/experiences.json";

export default {
  components: { NextSectionButton, AbilityCard, ExperienceCard, Footer },
  data() {
    return {
      abilities: abilities,
      abilityExpanded: false,
      experiences: experiences,
      activeExperienceId: 0,
    };
  },
  computed: {
    activeAbilities: function() {
      return this.abilityExpanded
        ? this.abilities.filter(function(ability) {
            return ability.isExpanded;
          })
        : this.abilities;
    },
  },
};
</script>
