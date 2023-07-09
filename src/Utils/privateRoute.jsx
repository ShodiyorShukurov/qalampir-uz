import { Outlet, Navigate } from "react-router-dom";
import { APP_QALAMPIR_TOKEN } from "./constants";

export const PrivateRoute = () => {
  return sessionStorage.getItem(APP_QALAMPIR_TOKEN) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
