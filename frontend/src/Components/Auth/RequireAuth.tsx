import { Outlet } from "react-router-dom";

interface RequireAuth {
    // children: React.ReactElement;
}

export const RequireAuth: React.FC<RequireAuth> = ({}) => {
    return <Outlet/>;
};
