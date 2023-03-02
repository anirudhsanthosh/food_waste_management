import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Configurations } from "../../Config";

interface RequireAuth {
    // children: React.ReactElement;
}

export const RequireAuth: React.FC<RequireAuth> = ({}) => {

    const navigate = useNavigate()

    useEffect(()=>{

        const loginStatus = localStorage.getItem(Configurations.LOGIN_STATUS) 

        if(!loginStatus) return navigate('/logout');

    },[])
    return <Outlet/>;
};
