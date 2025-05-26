import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayout/RootLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])