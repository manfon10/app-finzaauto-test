import { FC } from "react";

import Content from "../components/Layout/Content";
import UserUpdate from "../components/User/Molecules/UserUpdate";

const UpdateUser: FC = () => {
  return (
    <Content title="Actualizar Usuario" topHeight={0}>
      <UserUpdate />
    </Content>
  );
};

export default UpdateUser;
