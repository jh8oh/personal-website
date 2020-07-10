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
            v-bind:class="{ active: activeExperienceIndex === index }"
          >
            <h3>
              {{ experience.employer }}
            </h3>
          </li>
        </ul>

        <section id="experience-item">
          <h4>
            {{ getActiveExperience().position }} @
            <a v-bind:href="getActiveExperience().website">
              {{ getActiveExperience().employer }}
            </a>
          </h4>
          <span>{{ getActiveExperience().dates }}</span>
          <p v-html="getActiveExperience().description" />
        </section>
      </section>
    </section>

    <section id="interests">
      <h2>Interests</h2>
      <br />
      <ul id="interest-group">
        <li
          v-for="(interestGroup, index) in interestGroups"
          :key="index"
          v-on:click="activeInterestGroupIndex = index"
          v-bind:class="{ active: activeInterestGroupIndex === index }"
        >
          <h3>
            {{ interestGroup.title }}
          </h3>
        </li>
      </ul>

      <ul id="interest">
        <li v-for="(interest, index) in getActiveInterests()" :key="index">
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
import androidDevelopment from "../assets/img/about/interests/development/android.png";
import webDevelopment from "../assets/img/about/interests/development/web.png";
import gameDevelopment from "../assets/img/about/interests/development/game.jpg";
import nierAutomata from "../assets/img/about/interests/video-games/nier-automata.jpg";
import redStringsClub from "../assets/img/about/interests/video-games/red-strings-club.jpg";
import discoElysium from "../assets/img/about/interests/video-games/disco-elysium.jpg";
import cyberpunk from "../assets/img/about/interests/worldbuilding/cyberpunk.jpg";
import lovecraftian from "../assets/img/about/interests/worldbuilding/lovecraftian.jpg";
import shinsekaiYori from "../assets/img/about/interests/worldbuilding/shinsekai-yori.jpg";

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
        {
          employer: "Innovapost",
          position: "iOS/Android App Developer",
          website: "https://innovapost.com/",
          dates: "September 2020 - Present",
          description:
            "TO BE ADDED",
        },
      ],
      activeInterestGroupIndex: 0,
      interestGroups: [
        {
          title: "Development",
          interests: [
            {
              img: androidDevelopment,
              title: "Android Development",
              description:
                "I got into Android trying to find a GUI for Java since the alternatives (AWT, JavaFX, and Swing) were all going out of style. There is a surprising amount of depth when trying to create mobile apps, especially regarding intuitivity. Though I'm taking a small break from Android development for now, I'll be back for more.",
            },
            {
              img: webDevelopment,
              title: "Web Development",
              description:
                "My first website was a small 'wiki' on Minecraft. I was 13 and it was for an IT class project. It was built on HTML, CSS, and a bit of JavaScript. Ever since I've picked up web development recently, I've realized that there is so much I've missed out on: web stacks, JavaScript frameworks, backend languages, etc. There's still much to learn on my journey to build bigger and better web applications.",
            },
            {
              img: gameDevelopment,
              title: "Game Development",
              description:
                "Game development is in a weird spot for me. I've made games before but they were purely functional. Nothing wrong with that but I've always wanted to create a game that has story, art, and music alongside the gameplay. There's a small struggle in imagining the game that I want to make and the game that's realistic to make. Nevertheless, I'm determined to create one if it's the last thing I do.",
            },
          ],
        },
        {
          title: "Video games",
          interests: [
            {
              img: nierAutomata,
              title: "Nier Automata",
              description:
                'Nier Automata is Nietzsche\'s "God is Dead" wrapped in a hack-and-slash bullet-hell JPRG about Androids dressed up in a French maid dresses sent to destroy robots (oh, Japan). I love the music in this game. Not just the <a href="https://www.youtube.com/watch?v=wNWShKuopic">battle music</a>, but the <a href="https://www.youtube.com/watch?v=DoLCLGx2E08">calm BGM</a> that conveys the quiet abandonment of the world. Even if you never play the game, the soundtrack is something that you should definitely listen to.',
            },
            {
              img: redStringsClub,
              title: "Red Strings Club",
              description:
                "If I had a nickel for every cyberpunk bartending game I played, I'd have 2 nickels, which isn't a lot but it's weird that it happened twice. One particular mechanic I enjoyed is that you are quizzed about your conversation partner afterwards which makes you pay close attention to subtexts. Though the game is short, it really delivers on its characters and leaves a lasting impression.",
            },
            {
              img: discoElysium,
              title: "Disco Elysium",
              description:
                '"The mind recoils in horror, unable to communicate with the spinal column." Disco Elysium is a role-playing game, except the role you play is a trash-fire of a detective after an amnesia-inducing alcohol bender. The exact trash you\'re setting fire to, however, is up to you. You can be a deranged "superstar cop", a prophet of the coming end, or a free-market capitalist preacher. It is an incredibly intelligent game that shines in the world it creates and the weirdness of its main character.',
            },
          ],
        },
        {
          title: "Worldbuilding",
          interests: [
            {
              img: cyberpunk,
              title: "Cyberpunk",
              description:
                "Cyberpunk worlds are always great to immerse yourself into. On the one hand, the massive conglomerates, artificial body modifications, and techy gadgets that might just become science-fact. On the other, loss of the sense of self, the dangers of unchecked technological leaps, and the capitalist controlled states that we might be heading into. One of the best introduction to both hands is <em>Ghost in the Shell</em> (1995).",
            },
            {
              img: lovecraftian,
              title: "Lovecraftian",
              description:
                "Cosmic horror has always facinated me. It's all about how insignificant we are compared to the vastness of time and space. Whatever impact we make is short-lived and inconsequential. Good cosmic horror is able to get us to come to grips with this concept without throwing us into despair or hedonism. Which might not be such bad ideas, actually.",
            },
            {
              img: shinsekaiYori,
              title: "Shinsekai Yori",
              description:
                "The world of <em>Shinsekai Yori</em> is a quiet dystopia. Vanishing children, speciest struggles, and haunting urban legends are swept under the rug. This world is explored through the eyes of our 5 protagonists, as they discover the sins of their ancestors and the hideous truth behind their quaint little village.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getActiveExperience() {
      return this.experiences[this.activeExperienceIndex];
    },
    getActiveInterests() {
      return this.interestGroups[this.activeInterestGroupIndex].interests;
    },
  },
};
</script>
