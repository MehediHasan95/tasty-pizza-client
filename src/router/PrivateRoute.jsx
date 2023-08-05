import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SpinnerPage from "../components/shared/SpinnerPage";
import { ROLE } from "../utilities/auth-constant";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const { user, role } = useAuth();
  const location = useLocation();
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 2000);
  }, []);

  if (wait) {
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
