import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/homePage/homePage";
import Main from "../../layouts/main/main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            }
        ],
    }
])

export default router;