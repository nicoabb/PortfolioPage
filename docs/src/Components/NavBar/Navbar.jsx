import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Burger from "./BurgerMenu";
import { FaLaptopCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import resumePdf from "../../Assets/resume_nicolas.pdf";

const NavBar = () => {
    // LANGUAGE
    const [t, i18n] = useTranslation("global");

    // SCREEN WIDTH READER
    const [windowDimension, detectW] = useState({
        winWidth: window.innerWidth,
    });

    const detectSize = () => {
        detectW({
            winWidth: window.innerWidth,
        });
        // This way the burger menu closes when is not necessary
        if (window.innerWidth > 720) {
            setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimension]);

    // REPLACE MENU LOGO FOR X WHEN CLICKED
    const [open, setOpen] = useState(false);

    return (
        <nav
            className={
                open === true && windowDimension.winWidth <= 720
                    ? `${styles.navbar} ${styles.burger}`
                    : styles.navbar
            }
        >
            <div className={styles.limit}>
                <div className={styles.logo}>
                    <a>
                        {windowDimension.winWidth <= 720 ? (
                            open === true ? (
                                <IoClose
                                    className={styles.icons}
                                    onClick={() => setOpen(!open)}
                                />
                            ) : (
                                <FiMenu
                                    className={styles.icons}
                                    onClick={() => setOpen(!open)}
                                />
                            )
                        ) : (
                            <FaLaptopCode className={styles.icons} />
                        )}
                    </a>
                    <Link to="/">Nicolás Briceño</Link>
                    {open && <Burger />}
                </div>
                {windowDimension.winWidth > 720 ? (
                    <div className={styles.links}>
                        <Link to="/About">{t("navbar.about")}</Link>
                        <Link to="/Projects">{t("navbar.project")}</Link>
                    </div>
                ) : null}
                {windowDimension.winWidth > 480 ? (
                    <div className={styles.btns}>
                        <a  
                            href={resumePdf}
                            download="Resume_NicolasBriceno"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Resume</button>
                        </a>
                        <a
                            href="https://github.com/nicoabb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare className={styles.icons} />
                        </a>
                        <a
                            href="https://linkedin.com/in/nicoabb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className={styles.icons} />
                        </a>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default NavBar;
