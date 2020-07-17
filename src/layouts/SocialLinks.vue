<template>
  <nav id="social-links">
    <ul>
      <li v-for="link in links" :key="link.title" v-bind:title="link.title">
        <a v-bind:href="link.to">
          <img align="center" v-bind:src="link.icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import githubIcon from "../assets/ico/social-links/github.svg";
import linkedinIcon from "../assets/ico/social-links/linkedin.svg";
import resumeIcon from "../assets/ico/social-links/document.svg";
import resume from "../assets/doc/resume.pdf";

export default {
  data() {
    return {
      links: [
        {
          title: "GitHub",
          icon: githubIcon,
          to: "https://github.com/jh8oh",
        },
        {
          title: "LinkedIn",
          icon: linkedinIcon,
          to: "https://www.linkedin.com/in/ji-ho-oh-63b590191/",
        },
        {
          title: "Resume",
          icon: resumeIcon,
          to: resume,
        },
      ],
    };
  },
};
</script>
