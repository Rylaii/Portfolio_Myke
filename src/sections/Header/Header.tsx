import React, { useEffect, useState } from "react";
import styles from "./HeaderStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/light-mode.png";
import moon from "../../assets/dark-mode.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Theme toggle (acts like your logo area) */}
        <button
          type="button"
          className={styles.themeBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle color mode"
        >
          <img className={styles.colorMode} src={themeIcon} alt="Theme icon" />
        </button>

        {/* Desktop links */}
        <ul className={styles.navLinksDesktop}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navLinksMobile}>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
