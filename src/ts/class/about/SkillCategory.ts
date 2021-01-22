import SkillTitle from "./SkillTitle";
import Skill from "./Skill";

export default class SkillCategory {
  id: number;
  skillTitle: SkillTitle;
  skills: Skill[];

  constructor(
    id: number,
    name: string,
    iconDark: string,
    iconPrimary: string,
    skills: Skill[]
  ) {
    this.id = id;
    this.skillTitle = new SkillTitle(name, iconDark, iconPrimary);
    this.skills = skills;
  }

  // Splits the skill array equally into n arrays
  splitSkills(n: number, emptyArrayIndex: number) {
    const out = [];

    if (n < 2) {
      out.push(this.skills);
    } else {
      const length = this.skills.length;
      let i = 0,
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
    }

    out.splice(emptyArrayIndex, 0, []);

    return out;
  }
}
