import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/homePage/homePage";
import Main from "../../layouts/main/main";
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
        element: <HomePage />
      },
      {
        path: "*",               
        element: <NotFound />      
      }
    ]
  }
]);

export default router;
