import styles from "./IntroText.module.css";

const IntroText = (props) => {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <img src={props.image} alt={props.imgAlt} />
                <div className={styles.text}>
                    <p>{props.hi}</p>
                    <h1>Nicolás Briceño</h1>
                    <h2>{props.code}</h2>
                    <p>{props.currently}</p>
                </div>
            </div>
        </section>
    );
};

export default IntroText;
