import useTitle from "../../hooks/useTitle";
import OnlineBooking from "./OnlineBooking";

const Reservation = () => {
  useTitle("Reservation");
  return (
    <div className="max-w-screen-xl mx-auto my-32">
      <OnlineBooking />
    </div>
  );
};

export default Reservation;
