<template>
  <div id="about" class="page">
    <div id="about-content" class="page-content">
      <h1>About Me</h1>
      <section id="intro">
        <img src="@/assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <p>
          Hello! I'm Ji Ho Oh (오지호) but I also go by Jay. I'm a 3rd-year
          undergrad at the University of Waterloo.<br /><br />
          I like creating user-facing software mostly because I want the things
          I make to look
          <span><em>a e s t h e t i c</em></span
          >. This has led to me building websites, Android applications, and
          games. At the moment, I am focusing on learning new libraries and
          frameworks over specializing in one specific aspect. However, I am
          also looking for a field that might capture my interest and allow me
          to dive deeper.<br /><br />Aside from coding, my hobbies include
          playing video games, reading manga, and world-building.
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li
            v-for="skill in skills"
            :key="skill.id"
            @click="setActiveSkill(skill)"
          >
            <SkillCard
              :skillTitle="skill.skillTitle"
              :activeTitle="activeSkill === skill"
              :showContent="activeSkill != null && activeSkill != skill"
              :skills="skillContent[skill.id]"
            />
          </li>
        </ul>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div id="experience-content">
          <ul id="timeline">
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
          <transition name="flicker" mode="out-in">
            <ExperienceCard
              :key="activeExperience.id"
              :activeExperience="activeExperience"
            />
          </transition>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SkillCard from "@/components/about/SkillCard.vue";
import ExperienceCard from "@/components/about/ExperienceCard.vue";
import Footer from "@/layouts/Footer.vue";

import SkillCategory from "@/ts/class/about/SkillCategory";
import Skill from "@/ts/class/about/Skill";
import skills from "@/ts/content/about/skills";
import experiences from "@/ts/content/about/experiences";

@Component({
  components: { SkillCard, ExperienceCard, Footer },
})
export default class About extends Vue {
  private skills = skills;
  private activeSkill: SkillCategory | null = null;
  private skillContent: Skill[][] = [];

  private experiences = experiences;
  private activeExperience = experiences[0];

  private setActiveSkill(skill: SkillCategory) {
    if (this.activeSkill === null) {
      this.activeSkill = skill;
      this.skillContent = skill.splitSkills(this.skills.length - 1, skill.id);
    } else if (this.activeSkill === skill) {
      this.activeSkill = null;
      this.skillContent = [];
    }
  }

  private isBelowBreakpoint =
    (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 840;

  created() {
    window.addEventListener("resize", this.onResize);
  }

  destroyed() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    this.isBelowBreakpoint = width <= 840;
  }
}
</script>
