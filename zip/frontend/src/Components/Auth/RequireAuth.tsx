import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Configurations } from "../../Config";
import { useUserData } from "../../Hooks/Data/useUserData";
import { NavBar } from "../NavBar";
import { SideNav } from "../NavBar/side";

interface RequireAuth {
    // children: React.ReactElement;
}

export const RequireAuth: React.FC<RequireAuth> = ({}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = localStorage.getItem(Configurations.LOGIN_STATUS);

        if (!loginStatus) return navigate("/logout");
    }, []);

    const { user, isError, isLoading, error, isLoadingError } = useUserData();

    return (
        <div className="flex flex-col h-full w-full">
            <NavBar />
            <div className="h-full w-full flex overflow-hidden">
                <SideNav />
                <div className="w-full h-full pt-3 flex overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
