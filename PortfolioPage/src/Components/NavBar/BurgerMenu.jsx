import styles from "./Navbar.module.css";

const Burger = () => {
    return (
        <div className={styles.burgerMenu}>
            <a className={styles.burgerLinks} href="">
                About Me
            </a>
            <a className={styles.burgerLinks} href="">
                Projects
            </a>
            <a className={styles.burgerLinks} href="">
                GitHub
            </a>
            <a className={styles.burgerLinks} href="">
                LinkedIn
            </a>
            <a className={styles.burgerLinks} href="">
                Resume
            </a>
        </div>
    );
};

export default Burger;
