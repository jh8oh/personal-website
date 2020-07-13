<template>
  <footer>
    <span>© 2020 Ji Ho Oh</span>
    <ul id="footer-links">
      <li v-for="link in links" :key="link.title">
        <a v-bind:href="link.to">
          <img align="center" v-bind:src="link.icon" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import github from "../assets/ico/footer/github.png";
import linkedIn from "../assets/ico/footer/linkedin.png";
import resumeIcon from "../assets/ico/footer/resume.png";
import resume from "../assets/doc/resume.pdf";

export default {
  data() {
    return {
      links: [
        {
          title: "GitHub",
          icon: github,
          to: "https://github.com/jh8oh",
        },
        {
          title: "LinkedIn",
          icon: linkedIn,
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
