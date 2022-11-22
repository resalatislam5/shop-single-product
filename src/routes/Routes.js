import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders/Orders";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/orders',
                element:<Orders />
            },
            {
                path: '/product-details',
                element:<ProductDetails />
            }
        ]
    }
])