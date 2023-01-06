import { FC } from "react";

import { AiOutlineCaretLeft } from "react-icons/Ai";

import styles from "../../../styles/user.module.css";

import { IIconLeftProps } from "../../../types/Home";

const IconLeft: FC<IIconLeftProps> = (props) => {
  return (
    <>
      <div className={styles.containerIconLeftPage}>
        <AiOutlineCaretLeft onClick={props.handleAction} />
      </div>
    </>
  );
};

export default IconLeft;
