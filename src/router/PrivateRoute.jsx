import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SpinnerPage from "../components/shared/SpinnerPage";
import { ROLE } from "../utilities/auth-constant";

const PrivateRoute = ({ children }) => {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <SpinnerPage />;
  } else {
    if (user && role === ROLE) {
      return children;
    } else {
      return (
        <Navigate
          to={role === ROLE ? "/auth" : "/"}
          state={{ from: location }}
          replace
        />
      );
    }
  }
};

export default PrivateRoute;
