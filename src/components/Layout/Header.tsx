import { FC } from "react";

import { Helmet, HelmetData } from "react-helmet-async";

import { IHeaderProps } from "../../types/Header";

const Header: FC<IHeaderProps> = (props) => {
  const helmetData = new HelmetData({});

  return (
    <Helmet helmetData={helmetData}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default Header;
