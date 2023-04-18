import moment from "moment";
import { toast } from "react-hot-toast";
import { Card } from "../Components/common/Card/card";
import { SpinnerWithText } from "../Components/common/Loader/SpinnerWithText";
import { useAdmin } from "../Hooks/Data/useAdmin";

export const AdminDashboard: React.FC = () => {
    const { pickups, isError, isLoading, error ,updateStatus} = useAdmin();

    const handleChange = async (pickupId:number,status:string)=>{

        console.log({pickupId,status})
        
        try{

           await updateStatus.mutateAsync({pickupId,status});

           toast.success('Pickup status has been updated successfully');



        }catch(err){

            toast.error('Sorry failed to update pickup status');
        }
    }

    if (isLoading)
        return (
            <div className="flex min-w-full min-h-full">
                <SpinnerWithText />
            </div>
        );

    if (isError) toast.error("Sorry, there was an error failed to load data please try again later.");

    if (isError || typeof pickups !== "object")
        return (
            <div className="flex min-w-full min-h-full items-center justify-center">
                <Card>
                    <div className="font-bold whitespace-pre-wrap overflow-auto">
                        error : {JSON.stringify((error as any)?.response?.data) ?? "Something went wrong!"}
                    </div>
                </Card>
            </div>
        );

    if (pickups?.length === 0)
        return (
            <div className="flex min-w-full min-h-full items-center justify-center">
                <Card>
                    <div className="font-bold whitespace-pre-wrap overflow-auto">Sorry no Request is available</div>
                </Card>
            </div>
        );

    const titles = Object.keys(pickups?.[0] ?? {});

    return (
        <div className="flex w-full h-full pb-16 justify-center overflow-auto">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            {titles.map((title) => (
                                <th className="capitalize">{title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pickups.map((pickup, index) => {
                            return (
                                <tr>
                                    <th>{index + 1}</th>
                                    {titles.map((pickupKey) => {
                                        if (["createdAt", "updatedAt"].includes(pickupKey))
                                            /* @ts-ignore */
                                            return <td>{moment(pickup[pickupKey]).fromNow()}</td>;

                                        if (pickupKey === "status") {
                                            /* @ts-ignore */
                                            return (
                                                <div>
                                                    <select
                                                        defaultValue={pickup[pickupKey]}
                                                        className="select select-primary select-bordered w-full max-w-xs"
                                                        //@ts-ignore
                                                        onChange={(e)=>handleChange(pickup.id,e.target.value)}
                                                    >
                                                        {["cancelled", "pending", "completed", "failed", "rejected"].map(
                                                            (value) => (
                                                                <option>{value}</option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            );
                                        }
                                        /* @ts-ignore */
                                        return <td>{pickup[pickupKey]}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

<div className="overflow-x-auto">
    <table className="table w-full">
        {/* head*/}
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
        </thead>
        <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="active">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
            </tr>
        </tbody>
    </table>
</div>;
