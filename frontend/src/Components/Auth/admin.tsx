import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Configurations } from "../../Config";
import { useUserData } from "../../Hooks/Data/useUserData";
import { NavBar } from "../NavBar";

interface AdminLayout {}

export const AdminLayout: React.FC<AdminLayout> = ({}) => {
    const navigate = useNavigate();

    const { user } = useUserData();

    if (user && user?.role !== "admin") navigate("/", { replace: true });

    return <Outlet />;
};
