import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton } from "../../../Components/button/primary";
import { Select } from "../../../Components/input/select";
import { TextInput } from "../../../Components/input/text";
import { useAdminBloodDonations } from "../../../Hooks/Data/admin/useAdminBloodDonation";
import { useAdminUserData } from "../../../Hooks/Data/admin/useAdminUserData";
import { useBloodGroups } from "../../../Hooks/Data/useBloodGroup";

export const AdminBloodDonationPopup = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const navigate = useNavigate();

    const { bloodGroups } = useBloodGroups();

    const [selectedDonor, setSelectedDonor] = useState<API.AdminPanelUserData>();

    const { users } = useAdminUserData();

    const { id } = useParams();

    const { create, donation, update } = useAdminBloodDonations(id);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const payload = Object.fromEntries(formData.entries());

        console.log(payload);

        const promise = id
            ? update.mutateAsync({
                  id,
                  ...payload,
                  unit: Number(payload.unit),
                  userId: Number(payload.userId),
              })
            : create.mutateAsync({
                  ...payload,
                  unit: Number(payload.unit),
                  userId: Number(payload.userId),
              } as unknown as API.AdminDonationCreatePayload);

        toast.promise(promise, {
            error: (err) => err.message,
            loading: id ? "Updating Donation " : "Creating new Donation",
            success: id ? "Donation has been updated successfully" : "New Donation has been added successfully",
        });

        promise.then(() => navigate("/admin/donations"));
    }

    useEffect(() => {
        dialogRef.current?.showModal();

        // return () => dialogRef.current?.close();
    }, []);

    useEffect(() => {
        if (!donation.data) return;

        setSelectedDonor(users.data?.find((_) => _.id === Number(donation.data.user.id)));
    }, [JSON.stringify(donation.data)]);
    return (
        <div className="fixed  w-full h-full top-0 left-0">
            <dialog
                ref={dialogRef}
                onClose={() => navigate("/admin/donations")}
                className="modal w-full h-full bg-transparent"
            >
                <div className="modal-box max-w-3xl ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Create new Donation</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center px-4">
                        <div className="flex gap-3 w-full justify-between">
                            <Select
                                label="Donor"
                                disabled={donation.isLoading}
                                name="userId"
                                onChange={(e) =>
                                    setSelectedDonor(users.data?.find((_) => _.id === Number(e.target.value)))
                                }
                                value={selectedDonor?.id}
                                required
                            >
                                <option disabled>Select A Donor</option>
                                {users.data?.map((group) => (
                                    <option
                                        value={group.id}
                                    >{`${group.name} - ${group.email} - ${group.age} - ${group.gender}`}</option>
                                ))}
                            </Select>

                            <Select
                                label="Blood Group"
                                className="disabled"
                                name="bloodGroup"
                                value={selectedDonor?.blood.id}
                                required
                            >
                                <option disabled>Select A Blood Group</option>
                                {bloodGroups.data?.map((group) => (
                                    <option value={group.id}>{`${group.name}`}</option>
                                ))}
                            </Select>

                            <TextInput
                                label="Number of Units"
                                type="number"
                                placeholder="1"
                                name="unit"
                                defaultValue={donation.data?.unit}
                                required
                            />
                        </div>

                        <div className="flex gap-3 w-full justify-end py-2">
                            <PrimaryButton>{id ? "Update" : "Create"}</PrimaryButton>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};
