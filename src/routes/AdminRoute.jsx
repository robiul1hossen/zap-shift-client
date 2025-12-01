import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader";
import { Navigate } from "react-router";
import Forbidden from "../components/Forbidden";

const AdminRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  if (role !== "admin") {
    return <Forbidden />;
  }
  return children;
};

export default AdminRoute;
