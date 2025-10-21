import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../../layouts/main/main";
import HomePage from "../../pages/homePage/homePage";
import ServicesPage from "../../pages/servicesPage/servicesPage";
import NotFound from "../../pages/notFound/NotFound";
import ErrorPage from "../../pages/error/ErrorPage";
import PortfolioPage from "../../pages/portfolioPage/portfolioPage";
import ProjectPage from "../../pages/projectPage/projectPage";

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
        element: <ServicesPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "project/:projectId",
        element: <ProjectPage />
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
