import styles from "./CodeSkills.module.css";

const CodeSkills = (props) => {
    return (
        <section className={styles.coding}>
            <div className={styles.text}>
                <h3>{props.codeTitle}</h3>
                <p>{props.codeText}</p>
            </div>
            <div className={styles.langContainer}>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.htmlLogo}
                    </div>
                    <h4>HTML</h4>
                    <p>5 {props.proyects}</p>
                </div>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.cssLogo}
                    </div>
                    <h4>CSS</h4>
                    <p>5 {props.proyects}</p>
                </div>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.jsLogo}
                    </div>
                    <h4>Javascript</h4>
                    <p>3 {props.proyects}</p>
                </div>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.reactLogo}
                    </div>
                    <h4>React</h4>
                    <p>2 {props.proyects}</p>
                </div>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.javaLogo}
                    </div>
                    <h4>Java</h4>
                    <p>5 {props.proyects}</p>
                </div>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.pythonLogo}
                    </div>
                    <h4>Python</h4>
                    <p>4 {props.proyects}</p>
                </div>
                <div className={styles.square}>
                    <div className={styles.icons}>
                        {props.sqlLogo}
                    </div>
                    <h4>SQL</h4>
                    <p>2 {props.proyects}</p>
                </div>
            </div>
        </section>
    );
};

export default CodeSkills;