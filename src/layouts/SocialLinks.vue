<template>
  <nav id="social-links">
    <ul>
      <li v-for="link in links" :key="link.title" :title="link.title">
        <a :href="link.to">
          <img :src="getImg(link)" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import githubDark from "@/assets/ico/social-links/github-dark.png";
import githubLight from "@/assets/ico/social-links/github-light.png";
import linkedinDark from "@/assets/ico/social-links/linkedin-dark.png";
import linkedinLight from "@/assets/ico/social-links/linkedin-light.png";
import resumeDark from "@/assets/ico/social-links/resume-dark.png";
import resumeLight from "@/assets/ico/social-links/resume-light.png";
import resume from "@/assets/doc/resume.pdf";

export default {
  data() {
    return {
      links: [
        {
          title: "GitHub",
          iconDark: githubDark,
          iconLight: githubLight,
          to: "https://github.com/jh8oh",
        },
        {
          title: "LinkedIn",
          iconDark: linkedinDark,
          iconLight: linkedinLight,
          to: "https://www.linkedin.com/in/ji-ho-oh-63b590191/",
        },
        {
          title: "Resume",
          iconDark: resumeDark,
          iconLight: resumeLight,
          to: resume,
        },
      ],
    };
  },
  methods: {
    getImg(link) {
      return this.$store.getters.isLightTheme ? link.iconDark : link.iconLight;
    },
  },
};
</script>
