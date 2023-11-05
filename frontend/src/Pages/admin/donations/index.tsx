import toast from "react-hot-toast";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { useAdminBloodDonations } from "../../../Hooks/Data/admin/useAdminBloodDonation";
import { cn } from "../../../utils";

export const AdminBloodDonation: React.FC = () => {
    const headings: {
        label: string;
        value: keyof Omit<API.AdminDonation, "id" | "user" | "userId" | "blood">;
        formatter?: (value: string | number) => string;
    }[] = [
        { label: "Unit", value: "unit" },
        {
            label: "Date",
            value: "createdAt",
            formatter: (value) => (typeof value === "string" ? value?.split("T")?.[0] ?? "Nil" : "Nil"),
        },
    ];
    const { allDonations, deleteDonation } = useAdminBloodDonations();

    function handleDelete(id: string) {
        const promise = deleteDonation.mutateAsync(id);

        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to delete",
            loading: "Deleting...",
            success: "Donation has been deleted successfully",
        });
    }

    return (
        <div className="w-full">
            <div className="w-full  flex justify-between px-4">
                <h1>Donations</h1>
                <Link className="btn btn-primary" to="create">
                    <AiOutlinePlus /> Donation
                </Link>
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
                            <th>Donor</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {allDonations.data?.map((group) => {
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
                                        <td>
                                            <Link
                                                to={"/admin/users/" + group.user.id?.toString()}
                                                className="underline flex gap-1"
                                            >
                                                {group.user.name} <BiLink />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`update/${group.id}`}>
                                                <AiFillEdit />
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(group.id)}>
                                                <BsTrash />
                                            </button>
                                        </td>
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
