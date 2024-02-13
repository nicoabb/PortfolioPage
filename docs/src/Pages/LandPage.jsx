import Carousel from "../Components/LandPage/Carousel";
import CodeSkills from "../Components/LandPage/CodeSkills"
import IntroText from "../Components/LandPage/IntroText";
import { useTranslation } from "react-i18next";
import introImg from "../Assets/main_photo-bg.png"
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const LandPage = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <IntroText
                hi={t("landpage.hi")}
                code={t("landpage.iDo")}
                currently={t("landpage.current")}
                image={introImg}
            />
            <CodeSkills
                codeTitle={t("landpage.codeTitle")}
                codeText={t("landpage.codeText")}
                htmlLogo={<AiFillHtml5 />}
                cssLogo={<FaCss3 />}
                jsLogo={<SiJavascript />}
                reactLogo={<FaReact />}
                javaLogo={<FaJava />}
                pythonLogo={<FaPython />}
                sqlLogo={<FaDatabase />}
                proyects={t("landpage.projects")}
            />
            <Carousel 
                prevTitle={t("landpage.iMade")}
                lang={t("landpage.langUsed")}
            />
        </div>
    );
};

export default LandPage;
