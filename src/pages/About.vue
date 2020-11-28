<template>
  <div id="about" class="page">
    <div id="about-content">
      <h1>About Me</h1>
      <section id="intro">
        <img src="../assets/img/about/profile-pic.png" alt="Profile Picture" />
        <p>
          Hello! I'm Ji Ho Oh (오지호) but I also go by Jay. I'm a 3rd-year undergrad at the University of Waterloo.<br /><br />
          I like creating user-facing software, UI/UX and all that, mostly because I want the things I make to look
          <em>a e s t h e t i c</em>. This has led to me building websites, Android applications, and games. I also like
          learning new libraries and frameworks, preferring to learn a little about a lot of things over specializing in
          one aspect.<br /><br />Aside from coding, my hobbies include playing video games, reading manga, and
          world-building.
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div id="experience-content">
          <ul id="timeline" class="no-decoration" :class="{ 'horizontal-selector': isBelowBreakpoint }">
            <h4>
              <li
                v-for="experience in experiences"
                :key="experience.id"
                @click="activeExperience = experience"
                :class="{ active: activeExperience === experience }"
              >
                {{ experience.employer }}
              </li>
            </h4>
          </ul>
          <transition :name="experienceTransitionName" mode="out-in">
            <ExperienceCard :key="activeExperience.id" :activeExperience="activeExperience" />
          </transition>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import ExperienceCard from "@/components/about/ExperienceCard.vue";
import experiences from "@/assets/content/about/experience.ts";

@Component({
  components: { ExperienceCard },
})
export default class About extends Vue {
  private experiences = experiences;
  private activeExperience = experiences[0];
  private experienceTransitionName = "";

  private isBelowBreakpoint = false;

  created() {
    window.addEventListener("resize", this.onResize);
  }

  destroyed() {
    window.removeEventListener("resize", this.onResize);
  }

  @Watch("activeExperience.id", { immediate: true, deep: true })
  onExperienceChange(from: number, to: number) {
    if (to > from) {
      this.experienceTransitionName = "slide-fade-down";
    } else {
      this.experienceTransitionName = "slide-fade-up";
    }
  }

  onResize() {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    this.isBelowBreakpoint = width <= 840;
  }
}
</script>
