import { useRoutes, Navigate } from "react-router-dom";
import { BaseRoutes } from "./MainRoutes";

export default function ThemeRoutes() {
  return useRoutes([
    { path: "*", element: <Navigate to="/" /> },
    BaseRoutes
  ]);
}
