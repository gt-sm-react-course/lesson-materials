import React, { ReactNode } from "react";
import ForbiddenPage from "./pages/ForbiddenPage";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <ForbiddenPage />;
};

export default ProtectedRoute;
