import { FC } from "react";

import Content from "../components/Layout/Content";
import HomeComponent from "../components/Home/Molecules/Home";

const Home: FC = () => {
  return (
    <Content title="Home" topHeight={0}>
      <HomeComponent />
    </Content>
  );
};

export default Home;
