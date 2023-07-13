import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
]);