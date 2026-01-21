import React, { useState } from "react";
import styles from "./HeaderStyles.module.css";
import logo from "../../assets/fresh-burger.png"; // replace with your logo
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="header" className={styles.container}>
      <nav className={styles.navbar}>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          title="Toggle color mode"
        />
        {/* <div className={styles.logo}>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div> */}

        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          &#9776; {/* hamburger icon */}
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
