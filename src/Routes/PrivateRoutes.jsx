import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../component/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
