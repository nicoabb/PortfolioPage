import styles from "./IntroText.module.css";

const IntroText = (props) => {
    return (
        <section className={styles.intro}>
            <div className={styles.line}></div>
            <p>{props.hi}</p>
            <h1>Nicolás Briceño</h1>
            <h2>{props.code}</h2>
            <p>{props.currently}</p>
            <div className={styles.line}></div>
        </section>
    );
};

export default IntroText;
