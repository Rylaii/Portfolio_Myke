import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/Scholarship.jpg";
import freshBurger from "../../assets/LandingPage.jpg";
import hipsster from "../../assets/Login.jpg";
import fitLift from '../../assets/portfolio.png';
import ProjectCard from "../../common/ProjectCard";
// import twitterIcon from "../../assets/twitter-light.svg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div>
        <h1 className="sectionTitle">Projects</h1>
        <p className="description">
          A collection of side projects I’ve built to explore new tools,
          experiment with ideas, and grow as a developer.
        </p>
      </div>
      <h2></h2>
      <div className={styles.projectsGrid}>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={viberr}
            link=""
            h3="Scholarship System"
            p="An online platform for applying and tracking scholarships, built to make scholarship management faster, simpler, and more transparent for Gonzaga, Cagayan students."
          />
          <div className={styles.language}>
            <span className="badge bg-secondary">PHP</span>
            <span className="badge bg-secondary">MySQL</span>
            <span className="badge bg-secondary">Bootstrap</span>
            <span className="badge bg-secondary">Javascript</span>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={freshBurger}
            link=""
            h3="LGU Gonzaga Landing Page"
            p="A clean and informative landing page that introduces the Municipality of Gonzaga, designed to enhance its digital presence and public visibility."
          />
          <div className={styles.language}>
            <span className="badge bg-secondary">PHP</span>
            <span className="badge bg-secondary">MySQL</span>
            <span className="badge bg-secondary">Bootstrap</span>
            <span className="badge bg-secondary">Javascript</span>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={hipsster}
            link=""
            h3="LGU Gonzaga Login Page"
            p="A modern login interface for the Municipality of Gonzaga’s web platform, enabling secure authentication and smooth access to municipal digital services."
          />
          <div className={styles.language}>
            <span className="badge bg-secondary">PHP</span>
            <span className="badge bg-secondary">MySQL</span>
            <span className="badge bg-secondary">Bootstrap</span>
            <span className="badge bg-secondary">Javascript</span>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={fitLift}
            link=""
            h3="Web Based Personalized Portfolio"
            p="A web-based personal portfolio showcasing my projects, technical skills, and professional experience. It highlights the systems I’ve built, the technologies I use, and my approach to creating efficient, user-focused solutions."
          />
          <div className={styles.language}>
            <span className="badge bg-secondary">React</span>
            <span className="badge bg-secondary">CSS</span>
            <span className="badge bg-secondary">Typescript</span>
            <span className="badge bg-secondary">Javascript</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
