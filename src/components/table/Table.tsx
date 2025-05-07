import Column from "../column/Column";
import styles from "./Table.module.css";

// Notes:
// Everything comes down to an object of data, which we will store here (for now)
// The table component will distribute the data down the Column/Row component and they to the Cell component
// Maybe cells will hold id for their row and column, and each column and row component will hold an array of the cells that inhabit them

// Data to pass down
// const data = {
//     "1": "This cell has certificate of quality from the Ministry of Cell",
//     "2": "War",
//     "3": "This cell is empty",
//     "4": "This cell has identity crysis"
// };

// Maybe like this?
// const data1 = [
//     { rowId: '1', colId: 'A', data: 'This cell has certificate of quality from the Ministry of Cell' },
//     { rowId: '2', colId: 'A', data: 'War' },
//     { rowId: '3', colId: 'B', data: 'This cell is empty' },
//     { rowId: '4', colId: 'B', data: 'This cell has identity crysis' },
// ];

// TODO: Check the data structure Excel exports as

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
            {/* <div className={styles["table-container"]}>

                <div className={styles["table"]}>
                    <h2 className={styles["table-header"]}>Table 1</h2>

                    <form id="form" onSubmit={getCellsDataHandler} className={styles["table-content"]}>
                        <Column />
                    </form>
                </div>


                <button form="form">Get cells data</button>
            </div> */}

            <div className={styles["table-container"]}>
                <table className={styles["table"]}>
                    <h2 className={styles["table-header"]}>
                        Table 1
                    </h2>

                    <form id="form" onSubmit={getCellsDataHandler} className={styles["table-content"]}>

                    </form>

                </table>
            </div>
        </>
    );
}