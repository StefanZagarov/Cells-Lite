import styles from "./Functions.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faDivide, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Functions() {
  return (
      <>
              <div className={styles["top-buttons-container"]}>
            <div className={styles["top-button"]}>
                  <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={styles["top-button"]}>             
                  <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className={styles["top-button"]}>          
                   <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <div className={styles["top-button"]}>           
                   <FontAwesomeIcon icon={faDivide} />
            </div>
        </div>
      </> 
  );
}