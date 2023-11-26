import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../Hooks/Data/useUserData";

export const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const { user } = useUserData();

    return (
        <div className="navbar shadow-md ">
            <div className="navbar-start">
                <Link to="/">
                    <img src="/assets/logo.png" className="w-40 h-auto" />
                </Link>
            </div>
        </div>
    );
};
