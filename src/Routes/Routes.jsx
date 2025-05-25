import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayout/RootLayouts";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                path: '/',
                Component: Home
            }
        ]
    }
])