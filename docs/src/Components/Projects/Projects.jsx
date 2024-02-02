import styles from "./Projects.module.css";
import PCards from "./pCards";
import img1 from "../../Img/1.png";
import img2 from "../../Img/2.png";
import img3 from "../../Img/3.png";
import img4 from "../../Img/4.png";
import img5 from "../../Img/5.png";
import { useTranslation } from "react-i18next";

const Projects = (props) => {
    const [t, i18n] = useTranslation("global");
    const projects = [
        {image: img1, name: "Triveneco", desc: t("projects.firstDesc")},
        {image: img2, name: "Triveneco", desc: t("projects.secondDesc")},
        {image: img3, name: "Triveneco", desc: t("projects.secondDesc")},
        {image: img4, name: "Triveneco", desc: t("projects.secondDesc")},
        {image: img5, name: "Triveneco", desc: t("projects.secondDesc")}
    ];

    return (
        <section className={styles.proj}>
            <h1>{t("projects.title")}</h1>
            {projects.map((project, index) => (
                <div 
                    className={styles.cardBox} 
                    style={{
                        backgroundColor: index % 2 === 0 ? "var(--primary-color-200)" : "var(--primary-color-150)"
                    }}
                >
                    <PCards
                        image={project.image}
                        name={project.name}
                        desc={project.desc}
                        view={t("projects.view")}
                        extraStyle={{flexDirection: index % 2 === 0 ? "row-reverse" : "row"}}
                    ></PCards>
                </div>
            ))}
        </section>
    );
};


export default Projects;
