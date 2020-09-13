<template>
  <div id="about">
    <section id="intro" class="page">
      <div class="container">
        <h1>About Me</h1>
        <img id="profile-pic" src="../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <div id="summary-container">
          <p id="summary">
            Hello! My name's Ji Ho Oh (오지호) but I also go by Jay. I'm a 2nd-year Math Honours student at the
            University of Waterloo. I like making user-facing software, because I want the things I make to look
            <em>æ s t h e t i c</em>, so I mostly focus on building websites, Android applications, and games. I also
            enjoy learning new technologies, preferring to learn a little about a lot of things over dedicating myself
            to one specific thing. Aside from coding, my hobbies include playing video games, reading manga, and
            world-building.
          </p>
        </div>
      </div>
      <NextSectionButton :href="'#abilities'" />
    </section>
    <section id="abilities" class="background-alt">
      <div class="container">
        <h2>What I do</h2>
        <ul>
          <li v-for="ability in activeAbilities" :key="ability.id">
            <AbilityCard :ability="ability" @toggleExpand="abilityExpanded = !abilityExpanded" />
          </li>
        </ul>
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
import NextSectionButton from "@/components/NextSectionButton.vue";
import AbilityCard from "@/components/about/AbilityCard.vue";
import ExperienceCard from "@/components/about/ExperienceCard.vue";
import Footer from "@/layouts/Footer.vue";

import abilities from "@/assets/json/about/abilities.json";
import experiences from "@/assets/json/about/experiences.json";

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
