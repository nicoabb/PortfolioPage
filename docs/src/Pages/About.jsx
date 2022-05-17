import AboutComponent from "../Components/About/AboutMe";
import img1 from "../Img/about1.jpg";
import img2 from "../Img/about2.jpg";
import img3 from "../Img/about3.jpg";
import img4 from "../Img/about4.jpg";
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
                    <p>
                        {t("about.more")}{" "}
                        <a
                            href="https://linkedin.com/in/nicoabb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("about.click")}
                        </a>
                    </p>
                </>
            }
            img2={img2}
            img3={img3}
            img4={img4}
        />
    );
};

export default About;
