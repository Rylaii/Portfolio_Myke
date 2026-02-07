import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

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

const skills = [
  { src: angular_svg, skill: "Angular" },
  { src: csharp_svg, skill: "C#" },
  { src: dotnet_svg, skill: ".NET" },
  { src: mongoDb_svg, skill: "MongoDB" },
  { src: mysql_svg, skill: "MySQL" },
  { src: postman_svg, skill: "Postman" },
  { src: react_svg, skill: "React" },
  { src: php_svg, skill: "PHP" },
  { src: html_svg, skill: "HTML" },
  { src: css_svg, skill: "CSS" },
  { src: ts_svg, skill: "TypeScript" },
  { src: js_svg, skill: "JavaScript" },
] as const;

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Skills</h1>
        <p className="description">
          These are the tools, technologies, and problem-solving capabilities I
          apply in real-world projects.
        </p>
      </div>

      <div className={styles.skillGrid}>
        {skills.map((s) => (
          <SkillList
            key={s.skill}
            src={s.src}
            skill={s.skill}
            itemClassName={styles.skillItem}
            iconClassName={styles.skillIcon}
            labelClassName={styles.skillLabel}
          />
        ))}
      </div>
    </section>
  );
}
