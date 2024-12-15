
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <HomePage /> },
        ]
    },
   
];

export const router = createBrowserRouter(routes);