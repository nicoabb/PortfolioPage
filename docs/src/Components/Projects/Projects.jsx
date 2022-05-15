import styles from "./Projects.module.css";
import PCards from "./pCards";
import img1 from "../../Img/project1.png";
import img2 from "../../Img/project2.png";
import img3 from "../../Img/project3.png";

const Projects = (props) => {
    return (
        <section className={styles.proj}>
            <h1>{props.title}</h1>
            <PCards img={img1} lang="" name="" desc=""></PCards>
            <PCards img={img2} lang="" name="" desc=""></PCards>
            <PCards img={img3} lang="" name="" desc=""></PCards>
        </section>
    );
};

export default Projects;
