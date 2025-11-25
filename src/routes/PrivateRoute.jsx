import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
