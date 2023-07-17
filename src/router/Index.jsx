import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SaveCharacter from "../components/SaveCharacter";
import EditCharacter from "../components/EditCharacter";
import DeleteCharacter from "../components/DeleteCharacter";

export const router = createBrowserRouter([
    {
        path: "/create",
        element: <SaveCharacter/>
    },
    {
        path: "/edit/:characterId",
        element: <EditCharacter/>
    },
    {
        path: "/delete/:characterId",
        element: <DeleteCharacter/>
    },
    {
        path: "/",
        element: <Home/>
    }
])
