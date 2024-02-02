import styles from "./pCards.module.css";
//PCards stands for Project Cards

const PCards = (props) => {
    return (
        <div className={styles.pCard} style={props.extraStyle}>
            <div className={styles.imgBox}>
                <img src={props.image} alt={props.imgAlt} />
            </div>
            <div className={styles.textBox}>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <div className={styles.btnBox}>
                    <a  
                            href={props.url}
                            target="_blank"
                            rel="noreferrer"
                    >
                        <button>{props.view}</button>
                    </a>
                    {props.web}
                </div>
            </div>
        </div>
    );
};

export default PCards;
