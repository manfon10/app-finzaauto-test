import { FC } from "react";

import { IAlertActionProps } from "../../../types/Home";

import styles from "../../../styles/home.module.css";

const AlertAction: FC<IAlertActionProps> = (props) => {
  return (
    <div className={styles.containerAlert}>
      <div className={styles.containerDataAlert}>
        <p>¿Desea Eliminar el Usuario?</p>
        <button
          onClick={props.handleAction}
          className={styles.buttonAlertAction}
        >
          Eliminar
        </button>
        <button
          onClick={props.handleActionCancel}
          className={styles.buttonAlertActionCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default AlertAction;
