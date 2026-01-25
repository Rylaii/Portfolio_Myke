import styles from "./SkillsStyles.module.css";
import angular_svg from "../../assets/angular-svgrepo-com.svg";
import csharp_svg from "../../assets/csharp-svgrepo-com.svg";
import dotnet_svg from "../../assets/dotnet-svgrepo-com.svg";
import mongoDb_svg from "../../assets/mongodb-svgrepo-com.svg";
import mysql_svg from "../../assets/mysql-logo-svgrepo-com.svg";
import postman_svg from "../../assets/postman-icon-svgrepo-com.svg";
import react_svg from "../../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import php_svg from "../../assets/php-svgrepo-com.svg";
import html_svg from "../../assets/html-5-svgrepo-com.svg";
import css_svg from "../../assets/css3-svgrepo-com.svg";
import ts_svg from "../../assets/typescript-official-svgrepo-com.svg";
import js_svg from "../../assets/javascript-svgrepo-com.svg";
import SkillList from "../../common/SkillList";
// import twitterLight from "../../assets/twitter-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  // const { theme } = useTheme();
  // const checkMarkIcon =
  //   theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={angular_svg} skill="Angular" />
        <SkillList src={csharp_svg} skill="CSharp" />
        <SkillList src={dotnet_svg} skill="Dotnet" />
        <SkillList src={mongoDb_svg} skill="MongoDB" />
      </div>
      <br />
      <div className={styles.skillList}>
        <SkillList src={mysql_svg} skill="Mysql" />
        <SkillList src={postman_svg} skill="Postman" />
        <SkillList src={react_svg} skill="React" />
        <SkillList src={php_svg} skill="PHP" />
      </div>
      <br />
      <div className={styles.skillList}>
        <SkillList src={html_svg} skill="HTML" />
        <SkillList src={css_svg} skill="CSS" />
        <SkillList src={ts_svg} skill="Typescript" />
        <SkillList src={js_svg} skill="Javascript" />
      </div>
    </section>
  );
}

export default Skills;
