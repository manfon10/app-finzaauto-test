import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Molecules/Navbar";

const TopBar: FC = () => {
  const navigate = useNavigate();

  const [isOponNavbar, setIsOponNavbar] = useState<boolean>(false);

  const handleOpenNavbar = (): void => {
    setIsOponNavbar(true);
  };

  const handleCloseNavbar = (): void => {
    setIsOponNavbar(false);
  };

  const handleRouteUser = (): void => {
    navigate("/user");
  };

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default TopBar;
