import styles from "./AboutMe.module.css";

const AboutMe = (props) => {
    return (
        <section className={styles.aSection}>
            <div className={styles.imgBox}>
                <div className={styles.niceLine}></div>
                <img src={props.img1} alt={props.imgAlt} />
            </div>
            <h1>{props.title}</h1>
            {props.aboutText}
            <div className={styles.btnBox}>
                    <a  
                            href="https://linkedin.com/in/nicoabb"
                            target="_blank"
                            rel="noreferrer"
                    >
                        <button>LinkedIn</button>
                    </a>
                    <a href="mailto:nicolasbricenob@gmail.com">
                        <button className={styles.btnEmail}>{props.sendEmail}</button>
                    </a>
            </div>
            
        </section>
    );
};

export default AboutMe;
