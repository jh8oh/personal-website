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
import githubDarkIcon from "../assets/ico/social-links/github-dark.png";
import linkedinDarkIcon from "../assets/ico/social-links/linkedin-dark.png";
import resumeDarkIcon from "../assets/ico/social-links/resume-dark.png";
import resume from "../assets/doc/resume.pdf";

export default {
  data() {
    return {
      links: [
        {
          title: "GitHub",
          icon: githubDarkIcon,
          to: "https://github.com/jh8oh",
        },
        {
          title: "LinkedIn",
          icon: linkedinDarkIcon,
          to: "https://www.linkedin.com/in/ji-ho-oh-63b590191/",
        },
        {
          title: "Resume",
          icon: resumeDarkIcon,
          to: resume,
        },
      ],
    };
  },
};
</script>
