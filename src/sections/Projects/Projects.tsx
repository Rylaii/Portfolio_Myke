import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/Scholarship.jpg";
import freshBurger from "../../assets/LandingPage.jpg";
import hipsster from "../../assets/Login.jpg";
import fitLift from "../../assets/porfolio.png";
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
            p="A full-stack scholarship management system that allows students to apply and track applications while enabling administrators to review, approve, and manage records efficiently. I built the authentication flow, application tracking logic, and admin dashboard."
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
            p="A clean and informative landing page developed for the Municipality of Gonzaga to improve public visibility and digital accessibility. The site presents key information about the local government, services, and announcements in a structured and user-friendly layout. I focused on responsive design, content organization, and performance to ensure accessibility across devices."
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
            p="A modern login interface built for Gonzaga’s municipal web platform to support secure user authentication and controlled access to internal services. The project includes form validation, session handling, and secure credential processing. I implemented the UI and authentication flow to ensure a smooth and reliable login experience for authorized users."
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
            p="A web-based personal portfolio designed to showcase my projects, technical skills, and professional background. The site highlights my development experience through clean UI design, responsive layouts, and interactive components. I built this project to demonstrate my approach to creating user-focused interfaces and well-structured frontend applications."
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
