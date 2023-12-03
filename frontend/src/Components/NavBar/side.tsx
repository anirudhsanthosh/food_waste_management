import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { PiHandHeartBold, PiHandHeartLight, PiUsersThree } from "react-icons/pi";
import { BiDonateBlood, BiUserVoice } from "react-icons/bi";
import { BsBalloonHeart, BsClipboardData } from "react-icons/bs";
import { TbUserSearch } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineBloodtype, MdOutlineVerifiedUser } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useUserData } from "../../Hooks/Data/useUserData";
import { cn } from "../../utils";

export const SideNav: React.FC = () => {
    const { user } = useUserData();
    return (
        <div className="w-fit border-r border-gray-100 h-full">
            <ul className="menu h-full flex flex-col gap-1 text-sm  pb-4 whitespace-nowrap 2xl:text-base bg-primary/5">
                <li>
                    <NavLink to="/" className={({ isActive }) => cn(isActive && "bg-primary text-white")}>
                        <AiOutlineHome className="text-xl" />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) => cn(isActive && "bg-primary text-white")}>
                        <AiOutlineUser className="text-xl" />
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/health-report"
                        className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                    >
                        <BsClipboardData className="text-xl" />
                        Health Report
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/requests"
                        className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                    >
                        <BiUserVoice className="text-xl" />
                        Requests
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donations"
                        className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                    >
                        <BiDonateBlood className="text-xl" />
                        Donations
                    </NavLink>
                </li>
                {user?.role === "admin" && <AdminMenu />}
                <hr className="mt-auto border-t-primary/40" />
                <li className="p">
                    <NavLink to="/logout" className={({ isActive }) => cn(isActive && "bg-primary text-white")}>
                        <FiLogOut className="text-xl" />
                        Logout
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

function AdminMenu() {
    return (
        <>
            <strong className="mt-4 w-full text-center flex items-center justify-center gap-2 text-primary">
                <MdOutlineVerifiedUser className="text-xl" /> Admin
            </strong>
            <hr className="mb-1 border-t-primary/40"></hr>
            <li>
                <NavLink
                    to="/admin/bloodGroups"
                    className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                >
                    <MdOutlineBloodtype className="text-xl" />
                    Blood Groups
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/admin/users"
                    className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                >
                    <PiUsersThree className="text-xl" />
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/admin/requests"
                    className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                >
                    <PiHandHeartBold className="text-xl" />
                    Requests
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/admin/donations"
                    className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                >
                    <BsBalloonHeart className="text-xl" />
                    Donations
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/admin/finder"
                    className={({ isActive }) => cn("whitespace-nowrap", isActive && "bg-primary text-white")}
                >
                    <TbUserSearch className="text-xl" />
                    Donor Finder
                </NavLink>
            </li>
        </>
    );
}
