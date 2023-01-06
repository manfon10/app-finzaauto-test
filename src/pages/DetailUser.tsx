import { FC } from "react";

import Content from "../components/Layout/Content";
import UserDetail from "../components/User/Molecules/UserDetail";

const DetailUser: FC = () => {
  return (
    <Content title="Detalle Usuario" topHeight={0}>
      <UserDetail />
    </Content>
  );
};

export default DetailUser;
