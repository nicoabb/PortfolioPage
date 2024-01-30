import Carousel from "../Components/LandPage/Carousel";
import IntroText from "../Components/LandPage/IntroText";
import { useTranslation } from "react-i18next";

const LandPage = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <IntroText
                hi={t("landpage.hi")}
                code={t("landpage.iDo")}
                currently={t("landpage.current")}
            />
            <Carousel 
                prevTitle={t("landpage.iMade")}
                lang={t("landpage.langUsed")}
            />
        </div>
    );
};

export default LandPage;
