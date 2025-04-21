import Column from "../column/Column";
import styles from "./Table.module.css";

export default function Table() {
    // Data, or "metadata" for the table's size. Should hold information for how many cells the table has, how many rows and columns, and manipulate them from here
    function getCellsDataHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return (
        <>
            <div className={styles["table-container"]}>

                <div className={styles["table"]}>
                    <h2 className={styles["table-header"]}>Table 1</h2>

                    <form id="form" onSubmit={getCellsDataHandler} className={styles["table-content"]}>
                        <Column />
                    </form>
                </div>


                <button form="form">Get cells data</button>
            </div>
        </>
    );
}