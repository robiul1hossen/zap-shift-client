import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/RootLayout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import SendParcel from "../pages/Home/SendParcel";
import Coverage from "../pages/Coverage";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/RootLayout/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../pages/Dashboard/Payment";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import Rider from "../pages/Rider";
import RiderApproval from "../pages/Dashboard/RiderApproval";
import UsersManagement from "../pages/Dashboard/UsersManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },

      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "send-parcel",
        Component: SendParcel,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "payment/:id",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "/dashboard/payment-history",
        Component: PaymentHistory,
      },
      {
        path: "/dashboard/rider-approve",
        Component: RiderApproval,
      },
      {
        path: "manage-users",
        Component: UsersManagement,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
