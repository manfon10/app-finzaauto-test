import { FC } from "react";

import styles from "../../../styles/user.module.css";
import { IResultSearchProps } from "../../../types/User";

const ResultSearch: FC<IResultSearchProps> = (props) => {
  return (
    <div className={styles.containerResultSearchUser}>{props.children}</div>
  );
};

export default ResultSearch;
