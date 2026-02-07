import React, { useEffect, useState } from "react";
import styles from "./HeaderStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/light-mode.png";
import moon from "../../assets/dark-mode.png";
import logo from "../../../public/mb-icon.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>("#hero");

  const themeIcon = theme === "light" ? sun : moon;

  useEffect(() => {
    // 1) lock scroll when drawer is open
    document.body.style.overflow = isOpen ? "hidden" : "";

    // 2) scroll spy for active links
    const ids = ["hero", "projects", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65],
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      document.body.style.overflow = "";
      observer.disconnect();
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* LEFT: hamburger (mobile) + brand */}
        <div className={styles.left}>
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

          <a href="#hero" className={styles.brand} onClick={closeMenu}>
            <span className={styles.brandIcon}>
              <img src={logo} alt="Portfolio logo" />
            </span>
            {/* <span className={styles.brandText}>MykeBognalon</span> */}
          </a>
        </div>

        {/* CENTER: desktop links */}
        <ul className={styles.navLinksDesktop}>
          <li>
            <a
              href="#hero"
              className={active === "#hero" ? styles.activeLink : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "#projects" ? styles.activeLink : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={active === "#skills" ? styles.activeLink : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "#contact" ? styles.activeLink : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* RIGHT: theme toggle (desktop) */}
        <div className={styles.right}>
          <button
            type="button"
            className={`${styles.themeBtn} ${styles.themeBtnDesktop}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle color mode"
          >
            <img
              className={styles.colorMode}
              src={themeIcon}
              alt="Theme icon"
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <aside
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Top header (profile + close) */}
        <div className={styles.drawerTop}>
          <div className={styles.drawerProfile}>
            <div className={styles.avatar} aria-hidden="true" />
            <div className={styles.profileMeta}>
              <div className={styles.profileName}>Myke Xardan</div>
              <div className={styles.profileSub}>
                Full-Stack • Angular & .NET
              </div>
            </div>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* ✅ Theme toggle moved INSIDE drawer */}
        <button
          type="button"
          className={styles.themeRow}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span>Theme</span>
          <img className={styles.themeIcon} src={themeIcon} alt="Theme icon" />
        </button>

        {/* Main nav links */}
        <ul className={styles.drawerLinks}>
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

        <hr className={styles.drawerDivider} />

        {/* Secondary links */}
        <ul className={styles.drawerSubLinks}>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Profile
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Settings
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Help
            </a>
          </li>
        </ul>

        {/* Bottom CTA */}
        <div className={styles.drawerBottom}>
          <button
            type="button"
            className={styles.ctaBtn}
            onClick={() => {
              closeMenu();
              window.location.hash = "#contact";
            }}
          >
            Get in touch
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Header;
