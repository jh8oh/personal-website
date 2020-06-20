<template>
  <div id="about">
    <h1>About Me</h1>

    <section id="intro">
      <img src="../assets/img/about/profile-pic.jpg" alt="Profile picture" />
      <p>
        Hello! My name is Ji Ho Oh (오지호) and I'm a 2nd year Math Honours
        student at University of Waterloo.<br /><br />
        I am a passionate creator of user-facing software. This has led me to
        developing an interest in building websites, Android applications,
        games, and more. I quite enjoy learning new technologies and expanding
        my repetoire of libraries, frameworks, and languages I can use to
        develop better software.<br /><br />
        Aside from coding, my hobbies include sketching, world-building, and
        playing video games. I also wish to learn to compose music for video
        games.
      </p>
    </section>

    <section id="experience" class="background-dark">
      <h2>Experience</h2>
      <section id="experience-container">
        <ul id="timeline">
          <li
            v-for="(experience, index) in experiences"
            :key="index"
            v-on:click="shownExperienceIndex = index"
            v-bind:class="shownExperienceIndex == index ? 'active' : ''"
          >
            <strong>
              {{ experience.employer }}
            </strong>
          </li>
        </ul>
        <ExperienceItem :experience="experiences[shownExperienceIndex]" />
      </section>
    </section>

    <section id="interests">
      <h2>Interests</h2>
    </section>
  </div>
</template>

<script>
import ExperienceItem from "../components/about/ExperienceItem.vue";

export default {
  components: {
    ExperienceItem,
  },
  data() {
    return {
      shownExperienceIndex: 0,
      experiences: [
        {
          employer: "DC Canada Education Publishing",
          position: "Web and Mobile App Developer",
          website: "https://www.dc-canada.ca/",
          dates: "January - April 2020",
          description:
            "<strong>Website Developer:</strong><ul><li>Maintained and developed new content and features on a WordPress powered website.</li><li>Integrated MotionPay into the payment system for the Chinese domain which allowed customers to pay with Alipay and WeChat Pay.</li></ul><strong>Mobile Application Developer:</strong><ul><li>Solo development on an Android eBook reader titled 'One Story a Day'.</li><li>Connects with a <strong><a href=\"https://onestoryaday.ca\">website</a></strong> of the same name.</li></ul>",
        },
      ],
    };
  },
};
</script>
