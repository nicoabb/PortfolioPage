import styles from "./Cards.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.image} alt={props.imgAlt} />
            <h4>{props.lang}</h4>
            <div className={styles.icons}>
                {props.htmlLogo}
                {props.cssLogo}
                {props.jsLogo}
                {props.reactLogo}
            </div>
        </div>
    );
};

export default Card;
