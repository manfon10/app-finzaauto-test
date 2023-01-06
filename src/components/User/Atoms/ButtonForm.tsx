import { FC } from "react";

import styles from "../../../styles/user.module.css";
import { IButtonFormProps } from "../../../types/User";

const ButtonForm: FC<IButtonFormProps> = (props) => {
  return <button className={styles.buttonForm}>{props.textButton}</button>;
};

export default ButtonForm;
