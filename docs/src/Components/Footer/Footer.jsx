import styles from "./Footer.module.css";
import { FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className={styles.limit}>
                <div className={styles.container}>
                    <h4>Contact me</h4>
                    <a href="mailto:nicolasbricenob@gmail.com">
                        nicolasbricenob@gmail.com
                    </a>
                    <a href="mailto:nicolas.briceno@correo.unimet.edu.ve">
                        nicolas.briceno@correo.unimet.edu.ve
                    </a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.container}>
                    <h4>Spanish</h4>
                    <div className={styles.madeWith}>
                        <FaReact />
                        <small>Made with React</small>
                    </div>
                    <small>© 2022 Nicolás Briceño. All rights reserved</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
