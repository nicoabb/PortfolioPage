import styles from "./Projects.module.css";
import PCards from "./pCards";
import img1 from "../../Img/project1.png";
import img2 from "../../Img/project2.png";
import img3 from "../../Img/project3.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Projects = (props) => {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={styles.proj}>
            <h1>{t("projects.title")}</h1>
            <PCards
                pLink="https://triveneco.web.app/"
                img={img1}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={<SiJavascript />}
                reactLogo={<FaReact />}
                name="Triveneco"
                desc={t("projects.firstDesc")}
            ></PCards>
            <PCards
                pLink="https://nicoabb.github.io/Random-page/"
                img={img3}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={null}
                reactLogo={null}
                name="Random Page"
                desc={t("projects.secondDesc")}
            ></PCards>
            <PCards
                pLink="https://nicoabb.github.io/iOS-Calculator/"
                img={img2}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={<SiJavascript />}
                reactLogo={null}
                name="iOS Calculator"
                desc={t("projects.thirdDesc")}
            ></PCards>
        </section>
    );
};

export default Projects;
