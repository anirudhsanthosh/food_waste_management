import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Configurations } from "../../Config";
import { useUserData } from "../../Hooks/Data/useUserData";
import { NavBar } from "../NavBar";

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
        <>
            <NavBar />
            <div className="min-w-full min-h-full pt-3 flex flex-1">
                <Outlet />
            </div>
        </>
    );
};
