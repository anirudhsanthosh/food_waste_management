import { BsTrash } from "react-icons/bs";
import { Page } from "../../../Components/Layout/page";
import { useAdminUserData } from "../../../Hooks/Data/admin/useAdminUserData";
import { cn } from "../../../utils";
import { useUserData } from "../../../Hooks/Data/useUserData";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAdminBloodRequests } from "../../../Hooks/Data/admin/useAdminBloodRequest";

type status = "pending" | "completed" | "rejected";

export const RequestManagement: React.FC = () => {
    const { users, updateUser, deleteUser } = useAdminUserData();

    const { adminRequests, deleteRequest, updateRequest } = useAdminBloodRequests();

    const headings: {
        label: string;
        value: keyof Omit<API.AdminRequest, "_count" | "id" | "user" | "userId" | "blood">;
        formatter?: (value: string | number) => string;
    }[] = [{ label: "Unit", value: "unit" }];

    function handleDelete(id: string) {
        const promise = deleteRequest.mutateAsync(id);

        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to delete",
            loading: "Deleting...",
            success: "Blood request were deleted successfully",
        });
    }

    function handleStatusChange(id: string, status: status) {
        const promise = updateRequest.mutateAsync({ id, status });

        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to update status",
            loading: "Updating...",
            success: "Saved",
        });
    }

    return (
        <Page>
            <div className="w-full  flex justify-between px-4">
                <h1>Blood Requests</h1>
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
                            <th>Date</th>
                            <th>Requester</th>
                            <th>donations</th>
                            <th>requests</th>
                            <th>address</th>
                            <th>healthReports</th>
                            <th>Role</th>
                            <th>STatus</th>

                            <th>View</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {adminRequests.data?.map((group) => {
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

                                        <td>{group.createdAt.split("T")?.[0]}</td>
                                        <td>{group.user.name}</td>
                                        <td>{group.user._count.donations}</td>
                                        <td>{group.user._count.requests}</td>
                                        <td>{group.user._count.address}</td>
                                        <td>{group.user._count.healthReports}</td>
                                        <td>{group.user.role}</td>
                                        {/* <td>{group.status}</td> */}
                                        <td>
                                            <select
                                                // disabled={currentUser?.uuid === group.uuid}
                                                onChange={(e) => handleStatusChange(group.id, e.target.value as status)}
                                            >
                                                {(["completed", "pending", "rejected"] as status[]).map((_) => (
                                                    <option selected={_ === group.status}>{_}</option>
                                                ))}
                                            </select>
                                        </td>

                                        <td className="text-center">
                                            <Link to={"/admin/users/" + group.user.id.toString()}>
                                                <AiFillEye className="text-lg" />
                                            </Link>
                                        </td>
                                        <td className="text-center">
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
        </Page>
    );
};
