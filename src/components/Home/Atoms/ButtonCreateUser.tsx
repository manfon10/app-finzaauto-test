import { FC } from "react";

import { IButtonCreateUserProps } from "../../../types/Home";

import styles from "../../../styles/home.module.css";

const ButtonCreateUser: FC<IButtonCreateUserProps> = (props) => {
  return (
    <button onClick={props.handleAction} className={styles.buttonCreateUser}>
      Crear usuario
    </button>
  );
};

export default ButtonCreateUser;
