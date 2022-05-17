import styles from "./Projects.module.css";
import PCards from "./pCards";
import img1 from "../../Img/project1.png";
import img2 from "../../Img/project2.png";
import img3 from "../../Img/project3.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Projects = (props) => {
    return (
        <section className={styles.proj}>
            <h1>Projects</h1>
            <PCards
                pLink="https://triveneco.web.app/"
                img={img1}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={<SiJavascript />}
                reactLogo={<FaReact />}
                name="Triveneco"
                desc="This project is inspired in Booking, a platform made for traveling. Made with a team, I was in charge of the style and responsiveness of the project."
            ></PCards>
            <PCards
                pLink="https://nicoabb.github.io/Random-page/"
                img={img3}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={null}
                reactLogo={null}
                name="Random Page"
                desc="This was my first webpage made, where I practice the things I knew at the time with HTML and CSS. "
            ></PCards>
            <PCards
                pLink="https://nicoabb.github.io/iOS-Calculator/"
                img={img2}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={<SiJavascript />}
                reactLogo={null}
                name="iOS Calculator"
                desc="After the Random Page, I needed to practice JS, so I made a basic calculator that looks good and works good."
            ></PCards>
        </section>
    );
};

export default Projects;
