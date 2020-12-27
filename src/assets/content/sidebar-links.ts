import githubDark from "@/assets/ico/sidebar-links/github-dark.png";
import githubPrimary from "@/assets/ico/sidebar-links/github-primary.png";
import linkedInDark from "@/assets/ico/sidebar-links/linkedin-dark.png";
import linkedInPrimary from "@/assets/ico/sidebar-links/linkedin-primary.png";
import resumeDark from "@/assets/ico/sidebar-links/resume-dark.png";
import resumePrimary from "@/assets/ico/sidebar-links/resume-primary.png";
import resumeTo from "@/assets/docs/resume.pdf";

class SidebarLink {
  title: string;
  icon: string;
  iconDark: string;
  iconPrimary: string;
  to: string;

  constructor(title: string, iconDark: string, iconPrimary: string, to: string) {
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

const github = new SidebarLink("Github", githubDark, githubPrimary, "https://github.com/jh8oh");

const linkedIn = new SidebarLink(
  "LinkedIn",
  linkedInDark,
  linkedInPrimary,
  "https://www.linkedin.com/in/ji-ho-oh-63b590191/"
);

const resume = new SidebarLink("Resume", resumeDark, resumePrimary, resumeTo);

const sidebarLinks = [github, linkedIn, resume];

export default sidebarLinks;
