import { NavLink } from "react-router-dom";
import { logo } from "../../utilities/image-constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import useAddToCart from "../../hooks/useAddToCart";
import { ROLE } from "../../utilities/auth-constant";

const Navbar = () => {
  const active = "text-white lg:text-orange font-bold";
  const inActive = "py-2 lg:py-0 hover:text-raisinBlack lg:hover:text-orange";
  const { user, role } = useAuth();

  const [carts] = useAddToCart();
  const { totalQty, totalPrice } = carts.totalValue;

  console.log(role);

  let navList = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <button className={isActive ? active : inActive}>Home</button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu">
          {({ isActive }) => (
            <button className={isActive ? active : inActive}>Menu</button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog">
          {({ isActive }) => (
            <button className={isActive ? active : inActive}>Blog</button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservation">
          {({ isActive }) => (
            <button className={isActive ? active : inActive}>
              Reservation
            </button>
          )}
        </NavLink>
      </li>

      <li>
        <button>
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          +91 123 456 789
        </button>
      </li>

      <li>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
          {totalQty} items - ${totalPrice}
        </button>
      </li>
      <li>
        <NavLink
          to={`/${
            user
              ? `${role === ROLE ? "user-dashboard/profile" : "admin/profile"}`
              : "auth"
          }`}
        >
          {({ isActive }) => (
            <button className={isActive ? active : inActive}>
              {user ? (
                <span>{user?.displayName?.trim()}'s account</span>
              ) : (
                "Login"
              )}
            </button>
          )}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-raisinBlack">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img src={logo} alt="logo" className="w-8" />
            <h1 className="text-white text-4xl font-bold">
              <span className="text-orange">Tasty</span>Pizza
            </h1>
          </div>
          <div className="hidden lg:block text-white">
            <ul className="flex justify-center space-x-10 uppercase">
              {navList}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="p-4 w-80 h-full bg-orange text-white">{navList}</ul>
      </div>
    </div>
  );
};

export default Navbar;
