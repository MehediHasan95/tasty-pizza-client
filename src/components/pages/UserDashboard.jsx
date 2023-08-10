import useTitle from "../../hooks/useTitle";
import Dashboard from "../shared/Dashboard";

const UserDashboard = () => {
  useTitle("Dashboard");
  return (
    <div className="min-h-screen main_dash">
      <div className="grid place-items-center bg-orange text-white text-center h-32 lg:h-60 dash_bg_pattern">
        <div>
          <h1 className="text-xl lg:text-3xl uppercase font-bold tracking-widest">
            User Dashboard
          </h1>
        </div>
      </div>
      <div className="mb-20">
        <Dashboard />
      </div>
    </div>
  );
};

export default UserDashboard;
