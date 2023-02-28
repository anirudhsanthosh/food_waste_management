import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../Components/Layout/AppLayout";
import ErrorPage from "../Pages/Error";
import { Login } from "../Pages/Login";

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
        ],
    },
]);
