import { useNavigate, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  useTitle(error.status);
  return (
    <div className="min-h-screen grid place-items-center text-center">
      <div>
        <h1 className="text-5xl lg:text-9xl font-bold">{error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={() => navigate(-1)}
          className="w-3/6 my-5 rounded-full bg-platinum text-white py-1"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
