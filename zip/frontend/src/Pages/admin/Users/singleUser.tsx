import { Link, useNavigate, useParams } from "react-router-dom";
import { Page } from "../../../Components/Layout/page";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAdminUserData } from "../../../Hooks/Data/admin/useAdminUserData";
import { BsBuilding } from "react-icons/bs";
import { Card } from "../../../Components/common/Card/card";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";
import { useUserData } from "../../../Hooks/Data/useUserData";

export const SingleUserView: React.FC = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const { user: currentUser } = useUserData();

    const { user, deleteUser, updateUser } = useAdminUserData(Number(id));

    function handleDelete() {
        const promise = deleteUser.mutateAsync(user.data?.id!);

        toast.promise(promise, {
            error: (err) => err.message ?? "Failed to delete",
            loading: "Deleting...",
            success: "user deleted successfully",
        });
    }
    return (
        <Page>
            <div className="w-full  flex gap-4 items-center px-4">
                <button className="btn btn-square " onClick={() => navigate(-1 ?? "/admin/users")}>
                    <IoMdArrowRoundBack />
                </button>
                <h1>{user.data?.name}</h1>
                <h2>({user.data?.email})</h2>
                <div className="ml-auto">
                    <button className="btn btn-square btn-error" disabled={currentUser?.uuid === user.data?.uuid}>
                        <BiTrash />
                    </button>
                </div>
            </div>
            <div className="pt-8 flex items-stretch pr-32">
                <div className="w-full px-6">
                    <Card className="w-full h-full">
                        <div className="flex gap-4 pt-4">
                            <div className="flex flex-col gap-2 pt-4 w-full">
                                <strong>Name</strong>
                                <hr></hr>
                                <span>{user.data?.name}</span>
                            </div>
                            <div className="flex flex-col gap-2 pt-4 w-full">
                                <strong>Blood Group</strong>
                                <hr></hr>
                                <span>{user.data?.blood.name}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-8">
                            <div className="flex flex-col gap-2  w-full">
                                <strong>Email</strong>
                                <hr></hr>
                                <span>{user.data?.email}</span>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <strong> Age</strong>
                                <hr></hr>
                                <span>{user.data?.age}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-8">
                            <div className="flex flex-col gap-2 w-full">
                                <strong>Gender</strong>
                                <hr></hr>
                                <span>{user.data?.gender}</span>
                            </div>
                            <div className="flex flex-col gap-2  w-full">
                                <strong>Joined Date</strong>
                                <hr></hr>
                                <span>{new Date(user.data?.joinedOn!).toLocaleString("en-IN")}</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <div className="stats stats-vertical shadow w-fit">
                        <a href="#address">
                            <div className="stat">
                                <div className="stat-title flex gap-2">
                                    {/* <BsBuilding className="text-primary" /> */}
                                    Address
                                </div>
                                <div className="stat-value">{user.data?._count.address}</div>
                                <div className="stat-desc"></div>
                            </div>
                        </a>
                        <a href="#donation">
                            <div className="stat">
                                <div className="stat-title">Donations</div>
                                <div className="stat-value">{user.data?._count.donations}</div>
                                <div className="stat-desc"></div>
                            </div>
                        </a>
                        <a href="#requests">
                            <div className="stat">
                                <div className="stat-title">Requests</div>
                                <div className="stat-value">{user.data?._count.requests}</div>
                                <div className="stat-desc"></div>
                            </div>
                        </a>
                        <a href="#healthReport">
                            <div className="stat">
                                <div className="stat-title">Health Reports</div>
                                <div className="stat-value">{user.data?._count.healthReports}</div>
                                <div className="stat-desc"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-8">
                <hr className="mx-20" />

                <div className="py-4">
                    <h2 className="text-xl" id="address">
                        Address
                    </h2>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    houseName
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    landmark
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    town
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    city
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    pin
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.data?.address?.map((add) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {add.houseName}
                                        </th>
                                        <td className="px-6 py-4">{add.landmark}</td>
                                        <td className="px-6 py-4">{add.town}</td>
                                        <td className="px-6 py-4">{add.city}</td>
                                        <td className="px-6 py-4">{add.pin}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="py-8">
                <hr className="mx-20" />

                <div className="py-4">
                    <h2 className="text-xl" id="requests">
                        Requests
                    </h2>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Blood Group
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    unit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    status
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    created on
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.data?.requests?.map((report) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {report?.blood?.name}
                                        </th>
                                        <td className="px-6 py-4">{report.unit}</td>
                                        <td className="px-6 py-4">{report.status}</td>
                                        <td className="px-6 py-4">{report.createdAt}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="py-8">
                <hr className="mx-20" />

                <div className="py-4">
                    <h2 className="text-xl" id="requests">
                        Donations
                    </h2>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Blood Group
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    unit
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    created on
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.data?.donations?.map((report) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {user?.data?.blood?.name}
                                        </th>
                                        <td className="px-6 py-4">{report.unit}</td>
                                        <td className="px-6 py-4">{report.createdAt}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="py-8">
                <hr className="mx-20" />

                <div className="py-4">
                    <h2 className="text-xl" id="healthReport">
                        Health Report
                    </h2>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    bp
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    cholesterol
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    weight
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    height
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.data?.healthReports?.map((report) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {report.bp}
                                        </th>
                                        <td className="px-6 py-4">{report.cholesterol}</td>
                                        <td className="px-6 py-4">{report.weight}</td>
                                        <td className="px-6 py-4">{report.height}</td>
                                        <td className="px-6 py-4">{report.date}</td>
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
