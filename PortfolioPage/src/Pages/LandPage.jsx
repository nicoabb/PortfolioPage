import Carousel from "../Components/LandPage/Carousel";
import IntroText from "../Components/LandPage/IntroText";
import ProjectsPrev from "../Components/LandPage/ProjectsPrev";

const LandPage = () => {
    return (
        <div>
            <Carousel />
            <IntroText
                hi="Hi, my name is"
                code="I code the web"
                currently="Currently studing software engineering, always ready to learn more. I love web development, specially the frontend area."
            />
            <ProjectsPrev prevTitle="Projects I've made so far" />
        </div>
    );
};

export default LandPage;
