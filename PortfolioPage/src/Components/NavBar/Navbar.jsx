import styles from "./Navbar.module.css";
import { FaLaptopCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.limit}>
                <a className={styles.logo} href="">
                    <FaLaptopCode className={styles.icons} />
                    Nicolás Briceño
                </a>
                <div className={styles.links}>
                    <a href="">About Me</a>
                    <a href="">Projects</a>
                </div>
                <div className={styles.btns}>
                    <a href="">
                        <button>Resume</button>
                    </a>
                    <a href="">
                        <FaGithubSquare className={styles.icons} />
                    </a>
                    <a href="">
                        <FaLinkedin className={styles.icons} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
