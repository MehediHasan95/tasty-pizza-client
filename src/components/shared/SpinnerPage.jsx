import { loading } from "../../utilities/image-constant";

const SpinnerPage = () => {
  return (
    <div className="min-h-screen grid place-items-center text-center">
      <div>
        <img src={loading} alt="loading_gif" />
        <p>Loading</p>
      </div>
    </div>
  );
};

export default SpinnerPage;
