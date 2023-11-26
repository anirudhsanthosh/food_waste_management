import { Link, Outlet } from "react-router-dom";
import { PrimaryButton } from "../../Components/button/primary";
import { TextInput } from "../../Components/input/text";
import { useUserData } from "../../Hooks/Data/useUserData";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";
import { Card } from "../../Components/common/Card/card";
import { useAddress } from "../../Hooks/Data/useAddress";
import { BsTrash } from "react-icons/bs";
import { Page } from "../../Components/Layout/page";
import { ThemeCHanger } from "../../Components/common/themeChanger";

export const Profile: React.FC = () => {
    const { user, update } = useUserData();

    const { deleteAddress } = useAddress();

    const { email, name, age, blood, bloodGroup, gender, joinedOn, role, uuid } = user ?? {};

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const payload = Object.fromEntries(formData.entries());

        const promise = update.mutateAsync({ ...payload, age: Number(payload.age) });

        toast.promise(promise, {
            error: (err) => err.message,
            loading: "Updating profile",
            success: "Saved",
        });
    }

    function handleDeleteAddress(id: string) {
        const confirmed = confirm("Are you sure ?");

        if (!confirmed) return;

        const promise = deleteAddress.mutateAsync(id);

        toast.promise(promise, {
            error: (err) => err.message ?? err,
            loading: "Deleting address",
            success: "Address Deleted successfully",
        });
    }

    return (
        <Page>
            <div className="w-full flex justify-between">
                <h1>Profile</h1>
                <Link to="address/create" className="btn btn-primary ">
                    <AiOutlinePlus /> Address
                </Link>
            </div>
            <div className="w-full flex gap-4 pt-4">
                <div className="w-full">
                    <h2 className="pb-4 text-xl">Basic Details</h2>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="flex w-full gap-3">
                            <TextInput defaultValue={name} label="Name" name="name" required />
                            <TextInput defaultValue={email} label="Email" name="email" required />
                        </div>
                        <div className="flex w-full gap-3">
                            <TextInput
                                defaultValue={age}
                                label="Age"
                                name="age"
                                type="number"
                                min={18}
                                max={80}
                                required
                            />
                            <TextInput disabled value={blood?.name} label="Blood Group" />
                        </div>
                        <div className="flex w-full gap-3">
                            <TextInput disabled value={gender} label="Gender" className="w-full" />
                            <div className="w-full"> </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <PrimaryButton>Update</PrimaryButton>
                        </div>
                    </form>
                    <div>
                        <label>Theme</label>
                        <ThemeCHanger />
                    </div>
                </div>
                <div className="w-full max-h-full overflow-auto">
                    <h2 className="pb-4 text-xl">Address</h2>
                    <div className="flex flex-col items-center gap-4 mb-10">
                        {user?.address?.map((address) => {
                            return (
                                <Card className="w-10/12 bg-gray-900">
                                    <dl className=" text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div className="flex justify-between items-center w-full pb-3">
                                            <div className="flex flex-col">
                                                <dt className="mb-1 text-gray-500 dark:text-gray-400 text-sm">
                                                    House Name / Building Number
                                                </dt>
                                                <dd className="font-semibold">{address.houseName}</dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <Link to={`address/update/${address.id}`} className="btn btn-circle">
                                                    <AiFillEdit />
                                                </Link>
                                                <button
                                                    className="btn btn-circle btn-error"
                                                    onClick={() => handleDeleteAddress(address.id)}
                                                >
                                                    <BsTrash />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 dark:text-gray-400 text-sm">Landmark</dt>
                                            <dd className=" font-semibold">{address.landmark}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 dark:text-gray-400 text-sm">Town</dt>
                                            <dd className=" font-semibold">{address.town}</dd>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <div className="flex ">
                                                <div className="w-full">
                                                    <dt className="mb-1 text-gray-500 dark:text-gray-400 text-sm">
                                                        City
                                                    </dt>
                                                    <dd className=" font-semibold">{address.city}</dd>
                                                </div>
                                                <div className="w-full">
                                                    <dt className="mb-1 text-gray-500 dark:text-gray-400 text-sm">
                                                        Pin
                                                    </dt>
                                                    <dd className=" font-semibold">{address.pin}</dd>
                                                </div>
                                            </div>
                                        </div>
                                    </dl>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Outlet />
        </Page>
    );
};
