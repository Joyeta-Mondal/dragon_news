import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (user && user?.email) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={"/auth/login"}>
      Login
    </Navigate>
  );
};

export default PrivateRoute;
