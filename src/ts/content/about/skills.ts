import SkillCategory from "../../class/about/SkillCategory";
import Skill from "../../class/about/Skill";

import androidDark from "@/assets/ico/about/skills/android-dark.png";
import androidPrimary from "@/assets/ico/about/skills/android-primary.png";
import webDark from "@/assets/ico/about/skills/web-dark.png";
import webPrimary from "@/assets/ico/about/skills/web-primary.png";

// Android
const androidSkills = [
  new Skill("Kotlin", 5),
  new Skill("Java", 4),
  new Skill("XML", 5),
  new Skill("MVVM Pattern", 5),
  new Skill("Coroutines", 3),
  new Skill("Dagger 2", 3),
  new Skill("Data Binding", 4),
  new Skill("LiveData", 5),
  new Skill("Room (SQLite)", 5),
  new Skill("Volley", 3),
  new Skill("Navigation", 5),
  new Skill("Motion Sensors", 2),
];
const android = new SkillCategory(
  0,
  "Android Development",
  androidDark,
  androidPrimary,
  androidSkills
);

// Web
const webSkills = [
  new Skill("HTML5", 5),
  new Skill("CSS3", 5),
  new Skill("SCSS", 4),
  new Skill("Javascript", 4),
  new Skill("Typescript", 4),
  new Skill("Vue.js", 5),
  new Skill("WordPress", 3),
  new Skill("PHP", 2),
];
const web = new SkillCategory(
  1,
  "Web Development",
  webDark,
  webPrimary,
  webSkills
);

const skills = [android, web];

export default skills;
