import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { useBloodGroups } from "../../../Hooks/Data/useBloodGroup";
import { cn } from "../../../utils";
import { Link, Outlet } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import toast from "react-hot-toast";

export const BloodGroups: React.FC = () => {
    const { bloodGroups, deleteBloodGroup } = useBloodGroups();

    const headings: { label: string; value: keyof API.BloodGroup }[] = [
        { label: "Name", value: "name" },
        { label: "Group", value: "group" },
        { label: "Variation", value: "variation" },
        { label: "Stock", value: "stock" },
        { label: "Comments", value: "comments" },
    ];

    function handleDelete(id: string) {
        const confirmed = confirm("Are you sure you want to delete this?");

        if (!confirmed) return;

        const promise = deleteBloodGroup.mutateAsync(id);

        toast.promise(promise, {
            error: (err) =>
                "Failed  to delete blood group, most likely because the blood group is associated with other records in the database",
            loading: "deleting blood group",
            success: "blood group Deleted",
        });
    }

    return (
        <div className="w-full px-2">
            <div className="w-full flex items-center justify-between px-4">
                <h1>Blood Groups</h1>
                <Link className="btn btn-primary gap-1" to="/admin/bloodGroups/create">
                    <AiOutlinePlus /> Create
                </Link>
            </div>
            <div className="w-full px-6 pt-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            {headings.map((heading) => (
                                <th scope="col" className="px-6 py-3" key={heading.value}>
                                    {heading.label}
                                </th>
                            ))}
                            <th>Edit</th>
                            <th>Delete</th>
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
                                        <td>
                                            <Link to={`/admin/bloodGroups/update/${group.id}`}>
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
