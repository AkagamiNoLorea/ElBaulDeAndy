import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateCharacters from "../components/CreateCharacters";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <CreateCharacters/>
    }
])
