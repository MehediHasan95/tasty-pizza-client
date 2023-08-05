import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ROLE } from "../../utilities/auth-constant";

const Dashboard = () => {
  const { role } = useAuth();
  return (
    <div>
      <ul className="flex justify-center items-center bg-raisinBlack text-white w-fit mx-auto rounded-full my-5 border">
        {role === ROLE ? (
          <>
            <li>
              <NavLink to="profile">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    Profile
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="my-cart">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    My Cart
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="my-order">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    My Order
                  </button>
                )}
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="profile">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    Profile
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="manage-users">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    Manage users
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="add-items">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    Add items
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="manage-items">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    Manage items
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="manage-orders">
                {({ isActive }) => (
                  <button
                    className={
                      isActive
                        ? "px-4 lg:px-8 py-2 bg-orange rounded-full duration-500"
                        : "px-4 lg:px-8 py-2 duration-500"
                    }
                  >
                    Manage orders
                  </button>
                )}
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
