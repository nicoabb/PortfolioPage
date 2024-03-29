import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import resumePdf from "../../Assets/resume_nicolas.pdf";

const Burger = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className={styles.burgerMenu}>
            <Link to="/About" className={styles.burgerLinks}>
                {t("navbar.about")}
            </Link>
            <Link to="/Projects" className={styles.burgerLinks}>
                {t("navbar.project")}
            </Link>
            <a
                className={styles.burgerLinks}
                href="https://github.com/nicoabb"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a
                className={styles.burgerLinks}
                href="https://linkedin.com/in/nicoabb"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
            <a 
                className={styles.burgerLinks}
                href={resumePdf}
                download="Resume_NicolasBriceno"
                target="_blank"
                rel="noreferrer"
            >
                Resume
            </a>
        </div>
    );
};

export default Burger;
