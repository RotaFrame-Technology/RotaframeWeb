import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../../layouts/main/main";
import HomePage from "../../pages/homepage/homepage";
import Service from "../../pages/services/services";
import NotFound from "../../pages/notFound/NotFound";
import ErrorPage from "../../pages/error/ErrorPage";

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
