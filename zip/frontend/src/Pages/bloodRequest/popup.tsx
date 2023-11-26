import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useBloodGroups } from "../../Hooks/Data/useBloodGroup";
import { TextInput } from "../../Components/input/text";
import { PrimaryButton } from "../../Components/button/primary";
import { useAddress } from "../../Hooks/Data/useAddress";
import { useHealthReport } from "../../Hooks/Data/useHealthReport";
import { Select } from "../../Components/input/select";
import { useBloodRequest } from "../../Hooks/Data/useBloodRequest";

export const BloodRequestPopup = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const navigate = useNavigate();

    const { bloodGroups } = useBloodGroups();

    const { id } = useParams();

    const { createRequest, updateRequest, bloodRequest } = useBloodRequest(id);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const payload = Object.fromEntries(formData.entries());

        const promise = id
            ? updateRequest.mutateAsync({
                  id,
                  ...payload,
                  unit: Number(payload.unit),
              })
            : createRequest.mutateAsync({
                  ...payload,
                  unit: Number(payload.unit),
              } as unknown as API.BloodRequestCreatePayload);

        toast.promise(promise, {
            error: (err) => err.message,
            loading: id ? "Updating Your request " : "Creating new request",
            success: id ? "Your request has been updated successfully" : "New request has been placed successfully",
        });

        promise.then(() => navigate("/requests"));
    }

    useEffect(() => {
        dialogRef.current?.showModal();

        // return () => dialogRef.current?.close();
    }, []);
    return (
        <div className="fixed  w-full h-full top-0 left-0">
            <dialog
                ref={dialogRef}
                onClose={() => navigate("/requests")}
                className="modal w-full h-full bg-transparent"
            >
                <div className="modal-box max-w-3xl ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Create new request</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center px-4">
                        <div className="flex gap-3 w-full justify-between">
                            <Select
                                label="Blood Group"
                                disabled={bloodGroups.isLoading}
                                name="bloodGroup"
                                defaultValue={bloodRequest.data?.bloodGroup}
                                required
                            >
                                <option disabled>Select A Blood Group</option>
                                {bloodGroups.data?.map((group) => (
                                    <option
                                        value={group.id}
                                    >{`${group.name} (Available Stock : ${group.stock})`}</option>
                                ))}
                            </Select>
                            <TextInput
                                label="Number of Units"
                                type="number"
                                placeholder="1"
                                name="unit"
                                defaultValue={bloodRequest.data?.unit}
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
