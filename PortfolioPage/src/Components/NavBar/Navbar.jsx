import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import Burger from "./BurgerMenu";
import { FaLaptopCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
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
                    <a href="#top">Nicolás Briceño</a>
                    {open && <Burger />}
                </div>
                {windowDimension.winWidth > 720 ? (
                    <div className={styles.links}>
                        <a href="">About Me</a>
                        <a href="">Projects</a>
                    </div>
                ) : null}
                {windowDimension.winWidth > 480 ? (
                    <div className={styles.btns}>
                        <a href="">
                            <button>Resume</button>
                        </a>
                        <a
                            href="https://github.com/nicoabb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare className={styles.icons} />
                        </a>
                        <a href="">
                            <FaLinkedin className={styles.icons} />
                        </a>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default NavBar;
