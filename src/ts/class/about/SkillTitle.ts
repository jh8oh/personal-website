export default class SkillTitle {
  name: string;
  icon: string;
  iconDark: string;
  iconPrimary: string;

  constructor(name: string, iconDark: string, iconPrimary: string) {
    this.name = name;
    this.icon = iconDark;
    this.iconDark = iconDark;
    this.iconPrimary = iconPrimary;
  }

  setIcon(isHovered: boolean) {
    this.icon = isHovered ? this.iconPrimary : this.iconDark;
  }
}
