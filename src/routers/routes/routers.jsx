import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../../layouts/main/main";
import HomePage from "../../pages/homePage/homePage";
import Service from "../../pages/services/services";
import NotFound from "../../pages/notFound/NotFound";
import ErrorPage from "../../pages/error/ErrorPage";
import Portfolio from "../../pages/portfolio/portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
