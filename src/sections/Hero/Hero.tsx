import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Myke Avatar.png";
import heroImgLight from "../../assets/Myke Avatar Light.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const avatarImg = theme === "light" ? heroImgLight : heroImg;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={avatarImg}
          className={styles.hero}
          alt="Profile picture of Myke Xardan Bognalon"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Myke Xardan
          <br />
          Bognalon
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          <Typewriter
            words={[
              "I’m a full-stack problem-solver who loves turning chaos into working systems, fixing bugs nobody else dares to touch, and sprinkling a little fun into every line of code I write.",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={0}
          />
        </p>
        <a href={CV} download>
          {/* <button className="hover">Resume</button> */}
        </a>
      </div>
    </section>
  );
}

export default Hero;
