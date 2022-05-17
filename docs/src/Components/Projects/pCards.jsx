import styles from "./pCards.module.css";
//PCards stands for Project Cards

const PCards = (props) => {
    return (
        <div className={styles.pCard}>
            <div className={`${styles.circle} ${styles.c1}`}></div>
            <div className={styles.rectangle}></div>
            <a href={props.pLink} target="_blank" rel="noopener noreferrer">
                <img src={props.img} alt="Project image" />
            </a>
            <div className={styles.icons}>
                {props.htmlLogo}
                {props.cssLogo}
                {props.jsLogo}
                {props.reactLogo}
            </div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className={`${styles.circle} ${styles.c2}`}></div>
        </div>
    );
};

export default PCards;
