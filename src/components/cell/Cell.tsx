import { useCallback, useLayoutEffect, useRef } from "react";
import styles from "./Cell.module.css";


interface Cell {
  id: string;
  data: string;
}

export default function Cell({ id, data }: Cell) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Memoization to avoid infinite re-renders
  const resize = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.style.height = '1px';
      el.style.height = el.scrollHeight + 'px';
    }
  }, []); // No dependencies, the logic only depends on the ref's current element

  useLayoutEffect(() => {
    resize();
  }, [data, resize]);

  return (
    // Div styling?
    <div>
      <label htmlFor={id}></label>
      <textarea className={styles["cell"]} name={id} id={id}
        defaultValue={data ? data : ""}
        ref={ref} onInput={resize}></textarea>
    </div>
  );
}