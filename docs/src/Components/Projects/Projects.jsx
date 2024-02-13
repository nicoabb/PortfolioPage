import styles from "./Projects.module.css";
import PCards from "./pCards";
import img1 from "../../Img/1.png";
import img2 from "../../Img/2.png";
import img3 from "../../Img/3.png";
import img4 from "../../Img/4.png";
import img5 from "../../Img/5.png";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';

const Projects = (props) => {
    const [t, i18n] = useTranslation("global");
    const isMobile = useMediaQuery({ query: '(max-width: 719px)' });
    const projects = [
        {image: img1, name: t("projects.oneTitle"), desc: t("projects.oneDesc"), url: "https://github.com/nicoabb/F4_Front_Tesis", view: t("projects.viewf"), extraView: t("projects.viewb"), secondButton: true, extraUrl: "https://github.com/nicoabb/F4_Back_Tesis"},
        {image: img2, name: t("projects.twoTitle"), desc: t("projects.twoDesc"), url: "https://github.com/nicoabb/Proyecto1_EDD", view: t("projects.view"), secondButton: false},
        {image: img3, name: t("projects.threeTitle"), desc: t("projects.threeDesc"), url: "https://github.com/nicoabb/Proyecto2_EDD", view: t("projects.view"), secondButton: false},
        {image: img4, name: t("projects.fourTitle"), desc: t("projects.fourDesc"), url: "https://github.com/nicoabb/Proyecto1_SO", view: t("projects.view"), secondButton: false},
        {image: img5, name: t("projects.fiveTitle"), desc: t("projects.fiveDesc"), url: "https://github.com/nicoabb/iOS-Calculator", view: t("projects.view"), extraView: t("projects.web"), secondButton: true, extraUrl: "https://nicoabb.github.io/iOS-Calculator/"}
    ];

    return (
        <section className={styles.proj}>
            <h1>{t("projects.title")}</h1>
            {projects.map((project, index) => (
                <div 
                    key={`p${index}`}
                    className={styles.cardBox} 
                    style={{
                        backgroundColor: index % 2 === 0 ? "var(--primary-color-200)" : "var(--primary-color-150)"
                    }}
                >
                    <PCards
                        image={project.image}
                        name={project.name}
                        desc={project.desc}
                        url={project.url}
                        view={project.view}
                        extraStyle={{flexDirection: isMobile ? "column" : (index % 2 === 0 ? "row" : "row-reverse")}}
                        secondBtn={ project.secondButton && 
                            <>
                                <a 
                                    href={project.extraUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button style={{
                                        backgroundColor: "var(--primary-color-100)",
                                        border: "3px solid var(--primary-color-300)",
                                        color: "var(--neutral-color)"
                                    }}>{project.extraView}</button>
                                </a>
                            </>
                        }
                    ></PCards>
                </div>
            ))}
        </section>
    );
};


export default Projects;
