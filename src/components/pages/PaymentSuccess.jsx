import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tran_id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] max-w-screen-xl mx-auto grid place-items-center">
      <div className="text-center">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-7xl text-green-500 my-3"
        />
        <h1 className="text-xl lg:text-5xl text-green-500 font-bold tracking-widest my-3">
          Payment Successful!
        </h1>
        <p className="text-gray-400 my-3">Transaction Number: {tran_id}</p>
        <button
          onClick={() => navigate("/")}
          className="w-3/5 lg:w-3/12 rounded-full bg-orange text-white border"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
