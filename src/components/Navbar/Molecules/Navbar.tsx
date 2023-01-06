import { FC, useEffect } from "react";

import UserOption from "../Atoms/UserOption";

import useApi from "../../../hooks/useApi";

import styles from "../../../styles/navbar.module.css";

import { getResource } from "../../../utils/fetch";

const Navbar: FC = () => {
  const [usersResponse, getUsers] = useApi(() => getResource("user"));

  useEffect(() => {
    void getUsers();
  }, []);

  return (
    <div className={styles.containerMenu}>
      <h2 className={styles.textPage}>
        Módulo de Consulta y Registro de Usuario al Sistema
      </h2>
      <UserOption image={usersResponse?.[0]?.picture} />
    </div>
  );
};

export default Navbar;
