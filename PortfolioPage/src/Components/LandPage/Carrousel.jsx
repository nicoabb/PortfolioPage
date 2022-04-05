import styles from "./Carrousel.module.css";
import { useState, useEffect } from "react";
import img0 from "../../Img/1.jpg";
import img1 from "../../Img/2.jpg";
import img2 from "../../Img/3.jpg";
import img3 from "../../Img/4.jpg";
import img4 from "../../Img/5.jpg";

const Carrousel = () => {
    let [mainImg, setPosition] = useState(3);
    let [grid1, setGrid1] = useState({ gridColumn: 3 / 5, order: 7 });
    let [grid2, setGrid2] = useState({ gridColumn: 4 / 6, order: 5 });
    let [grid3, setGrid3] = useState({ gridColumn: 5 / 7, order: 3 });
    let [grid4, setGrid4] = useState({ gridColumn: 1 / 3, order: 3 });
    let [grid5, setGrid5] = useState({ gridColumn: 2 / 4, order: 5 });

    let spots;

    const checkNum = (num) => {
        if (num > 5) {
            num = 1;
        } else if (num < 1) {
            num = 5;
        }
        return num;
    };

    const updateStyle = (spot) => {
        let ord = 1;
        if (spot === "3 / 5") {
            ord = 7;
        } else if (spot === "2 / 4" || spot === "4 / 6") {
            ord = 5;
        } else if (spot === "1 / 3" || spot === "5 / 7") {
            ord = 3;
        }
        let grid = {
            gridColumn: `${spot}`,
            order: `${ord}`,
        };
        return grid;
    };

    const moveGrid = (spots) => {
        setPosition(checkNum(mainImg));
        let p1 = mainImg;
        const spot1 = `${p1} / ${p1 + 2}`;
        let p2 = checkNum(p1 + 1);
        const spot2 = `${p2} / ${p2 + 2}`;
        let p3 = checkNum(p2 + 1);
        const spot3 = `${p3} / ${p3 + 2}`;
        let p4 = checkNum(p3 + 1);
        const spot4 = `${p4} / ${p4 + 2}`;
        let p5 = checkNum(p4 + 1);
        const spot5 = `${p5} / ${p5 + 2}`;
        spots = [spot1, spot2, spot3, spot4, spot5];
        return spots;
    };

    useEffect(() => {
        spots = moveGrid(spots);
        setGrid1(updateStyle(spots[0]));
        setGrid2(updateStyle(spots[1]));
        setGrid3(updateStyle(spots[2]));
        setGrid4(updateStyle(spots[3]));
        setGrid5(updateStyle(spots[4]));
    }, [mainImg]);

    return (
        <section className={styles.container}>
            <div className={styles.carrousel}>
                <img id={styles["p1"]} src={img0} alt="Photo 1" style={grid1} />
                <span
                    className={styles.p2Layer}
                    onClick={() => setPosition(mainImg + 1)}
                ></span>
                <img id={styles["p2"]} src={img1} alt="Photo 2" style={grid2} />
                <span
                    className={styles.p5Layer}
                    onClick={() => setPosition(mainImg - 1)}
                ></span>
                <img id={styles["p5"]} src={img4} alt="Photo 5" style={grid5} />
                <span
                    className={styles.p3Layer}
                    onClick={() => setPosition(mainImg + 1)}
                ></span>
                <img id={styles["p3"]} src={img2} alt="Photo 3" style={grid3} />
                <span
                    className={styles.p4Layer}
                    onClick={() => setPosition(mainImg - 1)}
                ></span>
                <img id={styles["p4"]} src={img3} alt="Photo 4" style={grid4} />
            </div>
            <div className={styles.line}></div>
        </section>
    );
};

export default Carrousel;
