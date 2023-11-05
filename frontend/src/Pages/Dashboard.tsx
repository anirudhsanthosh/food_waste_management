import { BiBuildingHouse } from "react-icons/bi";
import { BsBalloonHeart, BsClipboardData, BsFillGearFill } from "react-icons/bs";
import { PiHandHeartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useBloodGroups } from "../Hooks/Data/useBloodGroup";
import { useDashBoard } from "../Hooks/Data/useDashboard";
import { useUserData } from "../Hooks/Data/useUserData";
import { cn } from "../utils";

export const Dashboard: React.FC = () => {
    const { user } = useUserData();

    const { dashboard } = useDashBoard();

    const { bloodGroups } = useBloodGroups();

    const headings: { label: string; value: keyof API.BloodGroup }[] = [
        { label: "Name", value: "name" },
        { label: "Group", value: "group" },
        { label: "Variation", value: "variation" },
        { label: "Availability", value: "stock" },
        { label: "Comments", value: "comments" },
    ];

    return (
        <div className="w-full px-4">
            <div className="flex w-full justify-between">
                <h1>
                    Hi {user?.name}, <span className="wave">👋</span>
                </h1>
                <Link to="profile" className="btn btn-square  ">
                    <BsFillGearFill />{" "}
                </Link>
            </div>
            <div className="pt-4 flex w-full ">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <BsBalloonHeart className="text-3xl" />
                        </div>
                        <div className="stat-title">Donations</div>
                        <div className="stat-value">{dashboard.data?._count?.donations}</div>
                        <div className="stat-desc"></div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <PiHandHeartBold className="text-3xl" />
                        </div>
                        <div className="stat-title">Requests</div>
                        <div className="stat-value">{dashboard.data?._count.requests}</div>
                        <div className="stat-desc"></div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <BiBuildingHouse className="text-3xl" />
                        </div>
                        <div className="stat-title">Address</div>
                        <div className="stat-value">{dashboard.data?._count?.address}</div>
                        <div className="stat-desc"></div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <BsClipboardData className="text-3xl" />
                        </div>
                        <div className="stat-title">Health Reports</div>
                        <div className="stat-value">{dashboard.data?._count?.healthReports}</div>
                        <div className="stat-desc"></div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-10">
                <h2 className="py-4">Availability</h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            {headings.map((heading) => (
                                <th scope="col" className="px-6 py-3" key={heading.value}>
                                    {heading.label}
                                </th>
                            ))}
                        </thead>
                        <tbody>
                            {bloodGroups.data?.map((group) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        {headings.map((heading, index) => {
                                            return (
                                                <td
                                                    key={index}
                                                    scope="row"
                                                    className={cn(
                                                        "px-6 py-4",
                                                        index === 0 &&
                                                            "font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    )}
                                                >
                                                    {group?.[heading.value as keyof typeof group] ?? "NIL"}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
