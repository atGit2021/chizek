import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";
import Forum from "../pages/Forum";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "forum",
        element: <Forum />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
