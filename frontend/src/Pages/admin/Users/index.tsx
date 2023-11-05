import { BsTrash } from "react-icons/bs";
import { Page } from "../../../Components/Layout/page";
import { useAdminUserData } from "../../../Hooks/Data/admin/useAdminUserData";
import { cn } from "../../../utils";
import { useUserData } from "../../../Hooks/Data/useUserData";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export const UserManagement: React.FC = () => {
    const { users, updateUser, deleteUser } = useAdminUserData();

    const { user: currentUser } = useUserData();

    const headings: {
        label: string;
        value: keyof Omit<API.AdminPanelUserData, "_count" | "id" | "user" | "userId" | "blood">;
        formatter?: (value: string | number) => string;
    }[] = [
        { label: "Name", value: "name" },
        { label: "Email", value: "email" },
        { label: "Gender", value: "gender" },
    ];

    function handleDelete(id: number) {
        const promise = deleteUser.mutateAsync(id);
        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to delete",
            loading: "Deleting...",
            success: "user deleted successfully",
        });
    }

    function handleRoleChange(id: number, role: "user" | "admin") {
        const promise = updateUser.mutateAsync({ id, role });

        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to update role",
            loading: "Updating...",
            success: "Saved",
        });
    }

    return (
        <Page>
            <div className="w-full  flex justify-between px-4">
                <h1>Users</h1>
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
                            <th>donations</th>
                            <th>requests</th>
                            <th>address</th>
                            <th>healthReports</th>
                            <th>Role</th>
                            <th>View</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {users.data?.map((group) => {
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

                                        <td>{group._count.donations}</td>
                                        <td>{group._count.requests}</td>
                                        <td>{group._count.address}</td>
                                        <td>{group._count.healthReports}</td>
                                        <td>
                                            <div
                                                className={cn(currentUser?.uuid === group.uuid && "tooltip")}
                                                data-tip="You can't change your role"
                                            >
                                                <select
                                                    disabled={currentUser?.uuid === group.uuid}
                                                    onChange={(e) =>
                                                        handleRoleChange(group.id, e.target.value as "admin" | "user")
                                                    }
                                                >
                                                    {["admin", "user"].map((_) => (
                                                        <option selected={_ === group.role}>{_}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Link to={group.id.toString()}>
                                                <AiFillEye className="text-lg" />
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            {currentUser?.uuid !== group.uuid && (
                                                <button onClick={() => handleDelete(group.id)}>
                                                    <BsTrash />
                                                </button>
                                            )}
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
