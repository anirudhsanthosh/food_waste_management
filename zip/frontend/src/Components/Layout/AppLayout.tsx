import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
    return (
        <div className="fixed flex w-full h-full top-0 left-0 overflow-hidden">
            <Outlet />
        </div>
    );
};
