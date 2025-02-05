import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "./router.link";
import Feature from "../feature";
import AuthFeature from "../authFeature";
import Login2 from "../auth/login/login-2";

const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Login2/>} />
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default ALLRoutes;
