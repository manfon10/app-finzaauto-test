import { FC } from "react";

import Content from "../components/Layout/Content";
import UserCreate from "../components/User/Molecules/UserCreate";

const CreateUser: FC = () => {
  return (
    <Content title="Crear Usuario" topHeight={0}>
      <UserCreate />
    </Content>
  );
};

export default CreateUser;
