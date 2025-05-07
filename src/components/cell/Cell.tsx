
import styles from "./Cell.module.css";


interface Cell {
  isHeader: boolean;
  data: string;
}

export default function Cell({ isHeader, data }: Cell) {

  const Tag = isHeader ? "th" : "td";

  return (
    // Div styling?
    <div>
      <Tag className={styles["cell"]}>{data}</Tag>
    </div>
  );
}