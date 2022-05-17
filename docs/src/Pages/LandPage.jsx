import Carousel from "../Components/LandPage/Carousel";
import IntroText from "../Components/LandPage/IntroText";
import ProjectsPrev from "../Components/LandPage/ProjectsPrev";
import { useTranslation } from "react-i18next";

const LandPage = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <Carousel />
            <IntroText
                hi={t("landpage.hi")}
                code={t("landpage.iDo")}
                currently={t("landpage.current")}
            />
            <ProjectsPrev
                prevTitle={t("landpage.iMade")}
                lang={t("landpage.langUsed")}
            />
        </div>
    );
};

export default LandPage;
