import styles from "./Carrousel.module.css";
import p1 from "../../Img/1.jpg";
import p2 from "../../Img/2.jpg";
import p3 from "../../Img/3.jpg";
import p4 from "../../Img/4.jpg";
import p5 from "../../Img/5.jpg";

const Carrousel = () => {
    return (
        <section className={styles.container}>
            <div className={styles.carrousel}>
                <img id={styles["p1"]} src={p1} alt="Photo 1" />
                <span className={styles.p2Layer}></span>
                <img id={styles["p2"]} src={p2} alt="Photo 2" />
                <span className={styles.p5Layer}></span>
                <img id={styles["p5"]} src={p5} alt="Photo 5" />
                <span className={styles.p3Layer}></span>
                <img id={styles["p3"]} src={p3} alt="Photo 3" />
                <span className={styles.p4Layer}></span>
                <img id={styles["p4"]} src={p4} alt="Photo 4" />
            </div>
            <div className={styles.line}></div>
        </section>
    );
};

export default Carrousel;
