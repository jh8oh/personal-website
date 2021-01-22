import androidDark from "@/assets/ico/about/skills/android-dark.png";
import androidPrimary from "@/assets/ico/about/skills/android-primary.png";
import webDark from "@/assets/ico/about/skills/web-dark.png";
import webPrimary from "@/assets/ico/about/skills/web-primary.png";

class SkillCategory {
  name: string;
  iconDark: string;
  iconPrimary: string;
  skills: Skill[];

  constructor(
    name: string,
    iconDark: string,
    iconPrimary: string,
    skills: Skill[]
  ) {
    this.name = name;
    this.iconDark = iconDark;
    this.iconPrimary = iconPrimary;
    this.skills = skills;
  }

  // Splits the skill array equally into n arrays
  splitSkills(n: number) {
    if (n < 2) {
      return this.skills;
    }

    var length = this.skills.length,
      out = [],
      i = 0,
      size;

    if (length % n === 0) {
      size = length / n;
      while (i < length) {
        out.push(this.skills.slice(i, (i += size)));
      }
    } else {
      while (i < length) {
        size = Math.ceil((length - i) / n--);
        out.push(this.skills.slice(i, (i += size)));
      }
    }

    return out;
  }
}

class Skill {
  name: string;
  proficiency: number;

  constructor(name: string, proficiency: number) {
    this.name = name;
    this.proficiency = proficiency;
  }
}

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
  "Web Development",
  webDark,
  webPrimary,
  webSkills
);

const skills = [android, web];

export default skills;
