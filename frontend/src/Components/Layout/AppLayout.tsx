import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
    return (
        <div className="min-w-screen min-h-screen">
            <Outlet />
        </div>
    );
};
