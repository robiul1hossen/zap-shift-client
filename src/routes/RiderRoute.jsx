import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router";
import Loader from "../components/Loader";
import Forbidden from "../components/Forbidden";

const RiderRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  if (role !== "rider") {
    return <Forbidden />;
  }
  return children;
};

export default RiderRoute;
