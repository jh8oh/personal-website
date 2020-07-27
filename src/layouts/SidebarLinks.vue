<template>
  <nav id="sidebar-links">
    <ul>
      <li v-for="link in links" :key="link.title" :title="link.title">
        <a :href="link.to">
          <img :src="link.icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import arrowUpDarkIcon from "../assets/ico/sidebar-links/arrow-up-dark.png";
import githubDarkIcon from "../assets/ico/sidebar-links/github-dark.png";
import linkedinDarkIcon from "../assets/ico/sidebar-links/linkedin-dark.png";
import resumeDarkIcon from "../assets/ico/sidebar-links/resume-dark.png";
import resume from "../assets/doc/resume.pdf";

export default {
  data() {
    return {
      links: [
        {
          title: "To Top",
          icon: arrowUpDarkIcon,
          to: "#top",
        },
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
