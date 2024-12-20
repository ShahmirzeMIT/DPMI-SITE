
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductManager from "../pages/ProductManager/ProductManager";
import Payment from "../pages/Payment/Payment";
import PaymentCheck from "../pages/PaymentCheck/PaymentCheck";
import PaymentProceedd from "../pages/PaymentProceedd/PaymentProceedd";
import HomePagePart2 from "../pages/SecondHome/HomePagePart2";
import Courses from "../pages/Courses/Courses";

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <HomePagePart2 /> },
            { path: "/home", element: <HomePagePart2 /> },
            { path: "/courses", element: <Courses /> },
            { path: "/product", element: <ProductManager />,
                children: [
                    { path: "/product/product-management-certification", element: <ProductManager /> },
                ]
             },
            {path:'/classes',element:<Payment/>},
            {path:'/payment',element:<PaymentCheck/>},
            {path:'/paymentprocedd',element:<PaymentProceedd/>},
            
            { path: "*", element: <NotFound /> },
        ]
    },
   
];

export const router = createBrowserRouter(routes);