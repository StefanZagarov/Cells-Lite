import Cell from "../cell/Cell";
import styles from "./Column.module.css";

export default function Column(data = {}) {


    return (
        <>
            <div className={styles["column"]}>
                <div className={styles["column-title"]}>A</div>

                <Cell number="1" data="This cell has certificate of quality from the Ministry of Cell" />
                <Cell number="2" data="War" />
            </div>

            <div className={styles["column"]}>
                <div className={styles["column-title"]}>B</div>

                <Cell number="3" data="This cell is empty" />
                <Cell number="4" data="This cell has identity crysis" />
            </div>
        </>
    );
}