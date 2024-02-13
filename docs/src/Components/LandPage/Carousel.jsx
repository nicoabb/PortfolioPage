import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";
import img4 from "../../Assets/4.png";
import img5 from "../../Assets/5.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Carrousel = (props) => {
    let [order1, setOrder1] = useState(1);
    let [order2, setOrder2] = useState(2);
    let [order3, setOrder3] = useState(3);
    let [order4, setOrder4] = useState(4);
    let [order5, setOrder5] = useState(5);

    const getOpacity = (order) => {
        switch (order) {
            case 1:
            case 5:
                return 0.4;
            case 2:
            case 4:
                return 0.8;
            case 3:
                return 1;
            default:
                return 1;
        }   
    };

    const zIndex = (order) => {
        switch (order) {
            case 1:
            case 5:
                return 1;
            case 2:
            case 4:
                return 2;
            case 3:
                return 3;
            default:
                return 1;
        }
    };

    const moveGrid = () => {
        setOrder1((order1 % 5) + 1);
        setOrder2((order2 % 5) + 1);
        setOrder3((order3 % 5) + 1);
        setOrder4((order4 % 5) + 1);
        setOrder5((order5 % 5) + 1);
    };

    useEffect(() => {
        const interval = setInterval(moveGrid, 4000);
        return () => clearInterval(interval);
    }, [order1, order2, order3, order4, order5]);

    return (
        <section className={styles.container}>
            <h3>{props.prevTitle}</h3>
            <div className={styles.carrousel}>
                <div style={{order: order1, zIndex: zIndex(order1)}}>
                    <Card
                        projectId="p1"
                        linkTo="/Projects"
                        image={img2}
                        imgAlt="Proyecto 1 EDD"
                        lang={props.lang}
                        javaLogo={<FaJava />}
                        extraStyle={{opacity: getOpacity(order1)}}
                    />
                </div>
                <div style={{order: order2, zIndex: zIndex(order2)}}>
                    <Card
                        projectId="p4"
                        linkTo="/Projects"
                        image={img5}
                        imgAlt="iOS Calculator"
                        lang={props.lang}
                        htmlLogo={<AiFillHtml5 />}
                        cssLogo={<FaCss3 />}
                        jsLogo={<SiJavascript />}
                        extraStyle={{opacity: getOpacity(order2)}}
                    />
                </div>
                <div style={{order: order3, zIndex: zIndex(order3)}}>
                    <Card
                        projectId="p2"
                        linkTo="/Projects"
                        image={img3}
                        imgAlt="Proyecto 2 EDD"
                        lang={props.lang}
                        javaLogo={<FaJava />}
                        extraStyle={{opacity: getOpacity(order3)}}
                    />
                </div>
                <div style={{order: order4, zIndex: zIndex(order4)}}>
                    <Card
                        projectId="p0"
                        linkTo="/Projects"
                        image={img1}
                        imgAlt="Trabajo de grado"
                        lang={props.lang}
                        htmlLogo={<AiFillHtml5 />}
                        cssLogo={<FaCss3 />}
                        jsLogo={<SiJavascript />}
                        reactLogo={<FaReact />}
                        pythonLogo={<FaPython />}
                        extraStyle={{opacity: getOpacity(order4)}}
                    />
                </div>
                <div style={{order: order5, zIndex: zIndex(order5)}}>
                    <Card
                        projectId="p3"
                        linkTo="/Projects"
                        image={img4}
                        imgAlt="Proyecto 1 SO"
                        lang={props.lang}
                        javaLogo={<FaJava />}
                        extraStyle={{opacity: getOpacity(order5)}}
                    />
                </div>
            </div>
        </section>
    );
};

export default Carrousel;
