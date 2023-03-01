import { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //TODO [ ] implement logout

        console.log('logged out')

        navigate("/login");
    }, []);
    return (
        <div className="flex p-4 w-full h-full items-center justify-center">
            <h1>You are being logged out......</h1>
        </div>
    );
};
