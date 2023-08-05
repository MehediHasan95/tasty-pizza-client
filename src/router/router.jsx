import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../components/pages/Home";
import AdminDashboard from "../components/admin/AdminDashboard";
import ManageUsers from "../components/admin/ManageUsers";
import AddItems from "../components/admin/AddItems";
import ManageItems from "../components/admin/ManageItems";
import ManageOrders from "../components/admin/ManageOrders";
import Authentication from "../components/auth/Authentication";
import UserDashboard from "../components/pages/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/shared/Profile";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Menu from "../components/pages/Menu";
import ItemDetail from "../components/pages/ItemDetail";
import MyCart from "../components/pages/MyCart";
import MyOrder from "../components/pages/MyOrder";
import Payment from "../components/pages/Payment";
import PaymentSuccess from "../components/pages/PaymentSuccess";
import ManageItemUpdate from "../components/admin/ManageItemUpdate";
import Blog from "../components/pages/Blog";
import Reservation from "../components/pages/Reservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "item-detail/:id",
        element: <ItemDetail />,
        loader: ({ params }) =>
          fetch(
            `https://tasty-pizza-server.vercel.app/item-detail/${params.id}`
          ),
      },
      {
        path: "user-dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "my-cart",
            element: <MyCart />,
          },
          {
            path: "my-order",
            element: <MyOrder />,
          },
          {
            path: "my-cart/checkout",
            element: <Payment />,
          },
        ],
      },
      {
        path: "payment-success/:tran_id",
        element: <PaymentSuccess />,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminPrivateRoute>
        <AdminDashboard />
      </AdminPrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "add-items",
        element: <AddItems />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "manage-items/update-item/:id",
        element: <ManageItemUpdate />,
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
]);

export default router;
