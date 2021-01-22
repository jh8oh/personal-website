export default class SidebarLink {
  title: string;
  icon: string;
  iconDark: string;
  iconPrimary: string;
  to: string;

  constructor(
    title: string,
    iconDark: string,
    iconPrimary: string,
    to: string
  ) {
    this.title = title;
    this.icon = iconDark;
    this.iconDark = iconDark;
    this.iconPrimary = iconPrimary;
    this.to = to;
  }

  setIcon(isHovered: boolean) {
    this.icon = isHovered ? this.iconPrimary : this.iconDark;
  }
}
