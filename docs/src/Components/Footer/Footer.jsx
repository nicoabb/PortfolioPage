import styles from "./Footer.module.css";
import { FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const [t, i18n] = useTranslation("global");
    const [ln, changeLn] = useState(i18n.language);
    const [lnText, changeLnText] = useState("English");

    useEffect(() => {
        if (i18n.language === "es") {
            changeLnText("English");
            changeLn("en");
        } else {
            changeLnText("Spanish");
            changeLn("es");
        }
    });

    return (
        <footer>
            <div className={styles.limit}>
                <div className={styles.container}>
                    <h4>{t("footer.contact")}</h4>
                    <a href="mailto:nicolasbricenob@gmail.com">
                        nicolasbricenob@gmail.com
                    </a>
                    <a href="mailto:nicolas.briceno@correo.unimet.edu.ve">
                        nicolas.briceno@correo.unimet.edu.ve
                    </a>
                </div>
                <div className={styles.line}></div>
                <div className={styles.container}>
                    <h4
                        className={styles.langLink}
                        onClick={() => i18n.changeLanguage(ln)}
                    >
                        {lnText}
                    </h4>
                    <div className={styles.madeWith}>
                        <FaReact />
                        <small>{t("footer.made")}</small>
                    </div>
                    <small>© 2022 Nicolás Briceño. {t("footer.rights")}</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
