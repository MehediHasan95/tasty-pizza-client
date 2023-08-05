import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Dashboard from "../shared/Dashboard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen main_dash">
      <div className="grid place-items-center bg-orange text-white text-center h-20 lg:h-40 dash_bg_pattern">
        <div>
          <h1 className="text-xl lg:text-3xl uppercase font-bold tracking-widest">
            Admin Dashboard
          </h1>
          <Link to="/">
            <Bounce>
              <button className="w-3/6 hover:bg-white hover:text-raisinBlack duration-300 hover:duration-300 border rounded-full mt-2">
                Home
              </button>
            </Bounce>
          </Link>
        </div>
      </div>
      <div className="mb-20">
        <Dashboard />
      </div>
    </div>
  );
};

export default AdminDashboard;
