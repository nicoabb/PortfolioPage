import styles from "./ProjectsPrev.module.css";
import Card from "../Cards/Cards";
import p1 from "../../Img/project1.png";
import p2 from "../../Img/project2.png";
import p3 from "../../Img/project3.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const ProjectsPrev = (props) => {
    return (
        <section className={styles.proPrev}>
            <h3>{props.prevTitle}</h3>
            <div className={styles.cardContainer}>
                <Card
                    linkTo="/Projects"
                    image={p1}
                    imgAlt="Triveneco webpage"
                    lang="Languages"
                    htmlLogo={<AiFillHtml5 />}
                    cssLogo={<FaCss3 />}
                    jsLogo={<SiJavascript />}
                    reactLogo={<FaReact />}
                />
                <Card
                    linkTo="/Projects"
                    image={p2}
                    imgAlt="iOS calculator"
                    lang="Languages"
                    htmlLogo={<AiFillHtml5 />}
                    cssLogo={<FaCss3 />}
                    jsLogo={<SiJavascript />}
                    reactLogo={null}
                />
                <Card
                    linkTo="/Projects"
                    image={p3}
                    imgAlt="Random webpage"
                    lang="Languages"
                    htmlLogo={<AiFillHtml5 />}
                    cssLogo={<FaCss3 />}
                    jsLogo={null}
                    reactLogo={null}
                />
            </div>
        </section>
    );
};

export default ProjectsPrev;
