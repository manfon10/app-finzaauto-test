import { FC } from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

import {
  CreateUserPage,
  DetailUserPage,
  HomePage,
  UpdateUserPage,
} from "../pages";

const AppRouter: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/detail-user/:id" element={<DetailUserPage />} />
        <Route path="/update-user/:id" element={<UpdateUserPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
