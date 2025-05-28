import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayout/RootLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDtails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoutes from "../Private/PrivateRoutes/PrivateRoutes";
import MyApplications from "../Pages/MyApplications/MyApplications";

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
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/jobs/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                Component: JobDetails
            },
            {
                path: '/job-apply/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element: <PrivateRoutes><JobApply /></PrivateRoutes>
            },
            {
                path: '/my-applications',
                element: <PrivateRoutes>
                    <MyApplications />
                </PrivateRoutes>
            }
        ]
    }
]);
