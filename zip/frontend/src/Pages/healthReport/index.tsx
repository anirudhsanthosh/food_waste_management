import { Link, Outlet } from "react-router-dom";
import { PrimaryButton } from "../../Components/button/primary";
import { TextInput } from "../../Components/input/text";
import { useUserData } from "../../Hooks/Data/useUserData";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";
import { Card } from "../../Components/common/Card/card";
import { useAddress } from "../../Hooks/Data/useAddress";
import { BsTrash } from "react-icons/bs";
import { useHealthReport } from "../../Hooks/Data/useHealthReport";
import { cn } from "../../utils";

export const HealthReport: React.FC = () => {
    const { healthReports, deleteReport } = useHealthReport();

    const headings: {
        label: string;
        value: keyof Omit<API.HealthReport, "id" | "user" | "userId">;
        formatter?: (value: string | number) => string;
    }[] = [
        { label: "Blood Pressure", value: "bp" },
        { label: "Cholesterol", value: "cholesterol" },
        { label: "Weight", value: "weight" },
        { label: "Height", value: "height" },
        {
            label: "Date",
            value: "date",
            formatter: (value) => (typeof value === "string" ? value?.split("T")?.[0] ?? "Nil" : "Nil"),
        },
    ];

    function handleDelete(id: string) {
        const promise = deleteReport.mutateAsync(id);

        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to delete",
            loading: "Deleting...",
            success: "Health report has been deleted successfully",
        });
    }

    return (
        <div className="w-full">
            <div className="w-full  flex justify-between px-4">
                <h1>Health Report</h1>
                <Link className="btn btn-primary" to="create">
                    <AiOutlinePlus /> Report
                </Link>
            </div>
            <div className="p-4">
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
                            {healthReports.data?.map((group) => {
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
                                                    {heading.formatter
                                                        ? heading.formatter(group?.[heading.value])
                                                        : group?.[heading.value] ?? "NIL"}
                                                </td>
                                            );
                                        })}
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
