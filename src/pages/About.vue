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
            v-on:click="activeExperienceIndex = index"
            v-bind:class="activeExperienceIndex == index ? 'active' : ''"
          >
            <h3>
              {{ experience.employer }}
            </h3>
          </li>
        </ul>
        <section id="experience-item">
          <h4>
            {{ experiences[activeExperienceIndex].position }} @
            <a v-bind:href="experiences[activeExperienceIndex].website">
              {{ experiences[activeExperienceIndex].employer }}
            </a>
          </h4>
          <span>{{ experiences[activeExperienceIndex].dates }}</span>
          <p
            id="description"
            v-html="experiences[activeExperienceIndex].description"
          />
        </section>
      </section>
    </section>

    <section id="interests">
      <h2>Interests</h2><br />
      <ul id="interest-group">
        <li
          v-for="(interestGroup, index) in interestGroups"
          :key="index"
          v-on:click="activeInterestGroupIndex = index"
          v-bind:class="activeInterestGroupIndex == index ? 'active' : ''"
        >
          <h3>
            {{ interestGroup.title }}
          </h3>
        </li>
      </ul>
      <ul id="interest">
        <li
          v-for="(interest, index) in interestGroups[activeInterestGroupIndex]
            .interests"
          :key="index"
        >
          <img v-bind:src="interest.img" v-bind:alt="interest.title" />
          <div>
            <h4>{{ interest.title }}</h4>
            <p v-html="interest.description"></p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeExperienceIndex: 0,
      experiences: [
        {
          employer: "DC Canada Education Publishing",
          position: "Web and Mobile App Developer",
          website: "https://www.dc-canada.ca/",
          dates: "January - April 2020",
          description:
            "This was my first internship/co-op position I took.<br /><strong>Website Developer:</strong><ul><li>Maintained and developed new content and features on a WordPress powered website.</li><li>Integrated MotionPay into the payment system for the Chinese domain which allowed customers to pay with Alipay and WeChat Pay.</li></ul><strong>Mobile Application Developer:</strong><ul><li>Solo development on an Android eBook reader titled 'One Story a Day'.</li><li>Connects with a <strong><a href=\"https://onestoryaday.ca\">website</a></strong> of the same name.</li></ul>",
        },
      ],
      activeInterestGroupIndex: 0,
      interestGroups: [
        {
          title: "Development",
          interests: [],
        },
        {
          title: "Video games",
          interests: [
            {
              img: require("../assets/img/about/interests/video-games/nier-automata.jpg"),
              title: "Nier Automata",
              description:
                'Nier Automata is Nietzsche\'s "God is Dead" wrapped in a hack-and-slash bullet-hell JPRG about Androids dressed up in a French maid dresses sent to destroy robots (oh, Japan). The nihilism seeps into every facet of the game, especially the music. Not just the <a href="https://www.youtube.com/watch?v=wNWShKuopic">battle music</a> that expresses such pain in an orchestra of instruments as you fight for your life, but the <a href="https://www.youtube.com/watch?v=DoLCLGx2E08">calm moment-to-moment melodies</a> that conveys the quiet abandonment of the world. Even if you never play the game, the soundtrack is something that you should definitely listen to.',
            },
            {
              img: require("../assets/img/about/interests/video-games/red-strings-club.jpg"),
              title: "Red Strings Club",
              description:
                "If I had a nickel for every cyberpunk bartending game I played, I'd have 2 nickels, which isn't a lot but it's weird that it happened twice. Red Strings Club tackles the particular question of how far we are willing to go to suppress our worst instincts. Would you be willing to install an emotion regulator that completely suppresses feelings of depression, rage, or anxiety? One particular mechanic I found interesting is that you are quizzed about your conversations which makes you pay close attention to subtexts. Though the game is short, it really delivers on its characters and leaves a lasting impression.",
            },
            {
              img: require("../assets/img/about/interests/video-games/disco-elysium.jpg"),
              title: "Disco Elysium",
              description: "",
            },
          ],
        },
        {
          title: "Worldbuilding",
          interests: [],
        },
      ],
    };
  },
};
</script>
