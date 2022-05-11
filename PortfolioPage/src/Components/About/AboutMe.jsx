import styles from "./AboutMe.module.css";

const AboutMe = (props) => {
    return (
        <section className={styles.ASection}>
            <h1>{props.title}</h1>
            <img
                src={props.img1}
                alt="Imagen portada"
                className={styles.imgIntro}
            />
            <div className={styles.lines}></div>
            {props.aboutText}
            <div className={styles.lines}></div>
            <div className={styles.imgContainer}>
                <img
                    src={props.img2}
                    alt="Imagen 1"
                    className={styles.imgSquare}
                />
                <img
                    src={props.img3}
                    alt="Imagen 2"
                    className={`${styles.imgSquare} ${styles.horizontalImg}`}
                />
                <img
                    src={props.img4}
                    alt="Imagen 3"
                    className={styles.imgSquare}
                />
            </div>
        </section>
    );
};

export default AboutMe;
