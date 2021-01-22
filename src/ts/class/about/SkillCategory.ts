import Skill from "./Skill";

export default class SkillCategory {
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
