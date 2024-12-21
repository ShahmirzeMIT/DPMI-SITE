
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductManager from "../pages/SFP/ProductManager";
import Payment from "../pages/Payment/Payment";
import PaymentCheck from "../pages/PaymentCheck/PaymentCheck";
import PaymentProceedd from "../pages/PaymentProceedd/PaymentProceedd";
import HomePagePart2 from "../pages/SecondHome/HomePagePart2";
import Courses from "../pages/Courses/Courses";
import DPMI from "../pages/DPM/DPMI";
import AIPF from "../pages/AIPF/AIPF";
import ACPF from "../pages/ACPF/ACPF";
import AIPP from "../pages/AIPP/AIPP";
import ACPP from "../pages/ACPP/ACPP";
import LMS from "../pages/LMS/LMS";
import CourseDetails from "../pages/CourseDetails/CourseDetails";

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <HomePagePart2 /> },
            { path: "/home", element: <HomePagePart2 /> },
            {
                path: "/courses",
                element: <Courses />,
                children: [
                  { path: ":courseId", element: <CourseDetails /> }, // Dinamik route
                ],
            },
            { path: "/sfp-course", element: <ProductManager />, },
            { path: "/dpm-course", element: <DPMI />, },
            { path: "/aipf-course", element: <AIPF />, },
            { path: "/aipp-course", element: <AIPP />, },
            { path: "/acfp-course", element: <ACPF />, },
            { path: "/acpp-course", element: <ACPP />, },
            { path: "/lms", element: <LMS/>, },
            {path:'/classes',element:<Payment/>},
            {path:'/payment',element:<PaymentCheck/>},
            {path:'/paymentprocedd',element:<PaymentProceedd/>},
            { path: "*", element: <NotFound /> },
        ]
    },
   
];

export const router = createBrowserRouter(routes);