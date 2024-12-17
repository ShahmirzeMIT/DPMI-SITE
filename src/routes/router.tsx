
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductManager from "../pages/ProductManager/ProductManager";
import Payment from "../pages/Payment/Payment";
import PaymentCheck from "../pages/PaymentCheck/PaymentCheck";

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <HomePage /> },
            { path: "/product", element: <ProductManager />,
                children: [
                    { path: "/product/product-management-certification", element: <ProductManager /> },
                ]
             },
            {path:'/classes',element:<Payment/>},
            {path:'/payment',element:<PaymentCheck/>},
            
            { path: "*", element: <NotFound /> },
        ]
    },
   
];

export const router = createBrowserRouter(routes);