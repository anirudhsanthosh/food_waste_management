import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Page } from "../../../Components/Layout/page";
import { Select } from "../../../Components/input/select";
import { TextInput } from "../../../Components/input/text";
import { useDonorFinder } from "../../../Hooks/Data/admin/useFinder";
import { useBloodGroups } from "../../../Hooks/Data/useBloodGroup";
import { cn } from "../../../utils";

type status = "pending" | "completed" | "rejected";

export const DonorFinder: React.FC = () => {
    const [userQuery, setUserQuery] = useState("");

    const [bloodGroup, setBloodGroup] = useState("");

    const { finder } = useDonorFinder({ bloodGroup, userQuery });

    const { bloodGroups } = useBloodGroups();

    const headings: {
        label: string;
        value: keyof Omit<API.DonorFinder, "_count" | "id" | "user" | "userId" | "blood">;
        formatter?: (value: string | number) => string;
    }[] = [
        { label: "name", value: "name" },
        { label: "Age", value: "age" },
        { label: "Email", value: "email" },
        { label: "Gender", value: "gender" },
    ];

    useEffect(() => {
        if (bloodGroups.data) setBloodGroup(bloodGroups.data?.[0]?.id ?? "");
    }, [bloodGroups.data!]);

    return (
        <Page>
            <div className="w-full  flex justify-between px-4">
                <h1>Donor Finder</h1>
            </div>

            <div className="p-4">
                <div className="flex p-2 gap-4">
                    <TextInput label="Search" value={userQuery} onChange={(e) => setUserQuery(e.target.value)} />

                    <Select
                        label="Blood Group"
                        className="disabled"
                        name="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    >
                        <option disabled>Select A Blood Group</option>
                        {bloodGroups.data?.map((group) => (
                            <option value={group.id}>{`${group.name}`}</option>
                        ))}
                    </Select>
                </div>
                <div>
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
                                <th>View</th>
                            </thead>
                            <tbody>
                                {finder.data?.map((group) => {
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

                                            <td className="text-center">
                                                <Link to={"/admin/users/" + group.id.toString()}>
                                                    <AiFillEye className="text-lg" />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Page>
    );
};
