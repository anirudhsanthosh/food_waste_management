import { createBrowserRouter, Outlet } from "react-router-dom";
import { Logout } from "../Pages/Logout";
import { RequireAuth } from "../Components/Auth/RequireAuth";
import { AppLayout } from "../Components/Layout/AppLayout";
import { Dashboard } from "../Pages/Dashboard";
import ErrorPage from "../Pages/Error";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { CreatePickup } from "../Pages/newPickup";
import { RequireToBeAdmin } from "../Components/Auth/admin";
import { AdminDashboard } from "../Pages/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        loader: () => null,
        action: () => null,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
            {
                path: "",
                element: <RequireAuth />,
                children: [
                    {
                        path: "",
                        element: <Dashboard/>,
                    },
                    {
                        path: "new",
                        element: <CreatePickup />,
                    },
                    {
                        path: "admin",
                        element: <RequireToBeAdmin/>,
                        children:[

                            {
                                path: "",
                                element: <AdminDashboard/>,
                            },

                            {
                                path: "wwwwww",
                                element: <div>this toooooo</div>,
                            },
                        ]
                    },
                    
                ],
            },
            
        ],
    },
]);
