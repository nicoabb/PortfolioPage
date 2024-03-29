import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={styles.cardContainer} style={props.extraStyle}>
            <div className={styles.hoverDiv}>
                <Link className={styles.divLink} to={`${props.linkTo}#${props.projectId}`}></Link>
            </div>
            <div className={styles.card}>
                <img src={props.image} alt={props.imgAlt} />
                <h4>{props.lang}</h4>
                <div className={styles.icons}>
                    {props.htmlLogo}
                    {props.cssLogo}
                    {props.jsLogo}
                    {props.reactLogo}
                    {props.javaLogo}
                    {props.pythonLogo}
                </div>
            </div>
        </div>
    );
};

export default Card;
