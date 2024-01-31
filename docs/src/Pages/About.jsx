import AboutComponent from "../Components/About/AboutMe";
import img1 from "../Img/about_me.png";
import { useTranslation } from "react-i18next";

const About = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <AboutComponent
            title={t("about.title")}
            img1={img1}
            aboutText={
                <>
                    <p>{t("about.firstP")}</p>
                    <p>{t("about.secondP")}</p>
                    <p>{t("about.thirdP")}</p>
                </>
            }
            sendEmail={t("about.sendEmail")}
        />
    );
};

export default About;
