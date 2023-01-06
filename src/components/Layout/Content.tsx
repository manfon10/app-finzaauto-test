import { FC } from "react";

import Header from "./Header";
import TopBar from "./TopBar";

import { IContentProps } from "../../types/Content";

import styles from "../../styles/content.module.css";

const Content: FC<IContentProps> = (props) => {
  return (
    <>
      <Header title={props.title} />
      <TopBar />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Content;
