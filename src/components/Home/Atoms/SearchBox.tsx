import { FC } from "react";

import styles from "../../../styles/home.module.css";

import { ISearchBoxProps } from "../../../types/Home";

const SearchBox: FC<ISearchBoxProps> = (props) => {
  return (
    <input
      type="text"
      name="search-user-by-id"
      placeholder="Id a buscar"
      className={styles.inputSearchUser}
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
