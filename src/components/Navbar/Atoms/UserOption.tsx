import { FC } from "react";

import { IUserOptionProps } from "../../../types/User";

import styles from "../../../styles/navbar.module.css";

const UserOption: FC<IUserOptionProps> = (props) => {
  return (
    <img
      className={styles.imageUserOption}
      src={props.image}
      alt="image user"
    />
  );
};

export default UserOption;
