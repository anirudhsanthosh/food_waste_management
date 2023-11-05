import toast from "react-hot-toast";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { useBloodRequest } from "../../Hooks/Data/useBloodRequest";
import { cn } from "../../utils";
import { useDonation } from "../../Hooks/Data/useDonations";

export const BloodDonation: React.FC = () => {
    const headings: {
        label: string;
        value: keyof Omit<API.Donation, "id" | "user" | "userId" | "blood">;
        formatter?: (value: string | number) => string;
    }[] = [
        { label: "Unit", value: "unit" },
        {
            label: "Date",
            value: "createdAt",
            formatter: (value) => (typeof value === "string" ? value?.split("T")?.[0] ?? "Nil" : "Nil"),
        },
    ];

    const { donations } = useDonation();

    return (
        <div className="w-full">
            <div className="w-full  flex justify-between px-4">
                <h1>Donations</h1>
            </div>
            <div className="p-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <th scope="col" className="px-6 py-3">
                                Blood Group
                            </th>
                            {headings.map((heading) => (
                                <th scope="col" className="px-6 py-3" key={heading.value}>
                                    {heading.label}
                                </th>
                            ))}
                        </thead>
                        <tbody>
                            {donations.data?.map((group) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className={cn(
                                                "px-6 py-4",

                                                "font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            )}
                                        >
                                            {group.blood.name}
                                        </th>
                                        {headings.map((heading, index) => {
                                            return (
                                                <td key={index} className={cn("px-6 py-4")}>
                                                    {heading.formatter
                                                        ? heading.formatter(group?.[heading.value])
                                                        : group?.[heading.value] ?? "NIL"}
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
            <Outlet />
        </div>
    );
};
