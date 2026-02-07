import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Myke Avatar.png";
import heroImgLight from "../../assets/Myke Avatar Light1.png";
// import sun from "../../assets/sun.svg";
// import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

function Hero() {
  // const { theme, toggleTheme } = useTheme();
  const { theme } = useTheme();
  const showAlert = () => {
    Swal.fire({
      title: "Wanna know me more?",
      text: "Feel free to view my resume!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Okay, download it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "CV.pdf";
        link.click();

        Swal.fire({
          title: "Hooray!",
          text: "I'll be waiting for a call!",
          icon: "success",
        });
      }
    });
  };

  // const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const avatarImg = theme === "light" ? heroImgLight : heroImg;
  return (
    <div>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={avatarImg}
            className={styles.hero}
            alt="Profile picture of Myke Xardan Bognalon"
          />
          {/* <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          /> */}
        </div>
        <div className={styles.info}>
          <h2 className={styles.greetings}>Hello I'm,</h2>
          <h1 className={styles.name}>Myke Xardan</h1>
          <h2 className={styles.role}>
            <Typewriter
              words={[
                // "Full-Stack Developer specializing in Angular & .NET",
                "Full-Stack Developer • Angular & .NET",
              ]}
              loop={5}
              // cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
            />
          </h2>
          <span className={styles.socials}>
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
          <br />
          <span>
            <p className="description">
              I turn complex problems into clean, reliable systems—fixing tough
              bugs and building scalable solutions with Angular and .NET.
            </p>
          </span>
          <span>
              <button className={styles.projects}>Resume</button>
              <button className={styles.hover} onClick={showAlert}>
                View Projects
              </button>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Hero;
