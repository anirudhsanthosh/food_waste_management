import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

export const App: React.FC = () => {
    return <RouterProvider router={router} />;
};
