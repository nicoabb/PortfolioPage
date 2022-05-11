import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Burger = () => {
    return (
        <div className={styles.burgerMenu}>
            <Link to="/About" className={styles.burgerLinks}>
                About
            </Link>
            <Link to="/Projects" className={styles.burgerLinks}>
                Projects
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
            <a className={styles.burgerLinks}>Resume</a>
        </div>
    );
};

export default Burger;
