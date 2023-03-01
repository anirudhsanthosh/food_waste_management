import { createBrowserRouter } from "react-router-dom";
import { Logout } from "../Components/Auth/Logout";
import { RequireAuth } from "../Components/Auth/RequireAuth";
import { AppLayout } from "../Components/Layout/AppLayout";
import ErrorPage from "../Pages/Error";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

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
                path: "/",
                element: <RequireAuth />,
                children: [
                    {
                        path: "me",
                        element: <div>me</div>,
                    },
                    {
                        path: "/",
                        element: <div>dashboard</div>,
                    },
                ],
            },
        ],
    },
]);
