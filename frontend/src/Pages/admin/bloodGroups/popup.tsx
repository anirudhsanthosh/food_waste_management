import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextInput } from "../../../Components/input/text";
import { PrimaryButton } from "../../../Components/button/primary";
import { useBloodGroups } from "../../../Hooks/Data/useBloodGroup";
import toast from "react-hot-toast";

export const BloodGroupPopup = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const navigate = useNavigate();

    const { id } = useParams();

    const { createBloodGroups, bloodGroup, updateBloodGroup } = useBloodGroups(id);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const payload = Object.fromEntries(formData.entries());

        const promise = id
            ? updateBloodGroup.mutateAsync({
                  id,
                  ...payload,
                  stock: Number(payload.stock),
              })
            : createBloodGroups.mutateAsync({
                  ...payload,
                  stock: Number(payload.stock),
              } as unknown as API.BloodGroupCreatePayload);

        toast.promise(promise, {
            error: (err) => err.message,
            loading: "Creating new blood group",
            success: "Blood group created successfully",
        });

        promise.then(() => navigate("/admin/bloodGroups"));
    }

    useEffect(() => {
        dialogRef.current?.showModal();

        // return () => dialogRef.current?.close();
    }, []);
    return (
        <div className="fixed  w-full h-full top-0 left-0">
            <dialog
                ref={dialogRef}
                onClose={() => navigate("/admin/bloodGroups")}
                className="modal w-full h-full bg-transparent"
            >
                <div className="modal-box max-w-3xl ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add new blood group</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center px-4">
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Name"
                                name="name"
                                placeholder="A +ve"
                                defaultValue={bloodGroup.data?.name}
                            />
                            <TextInput
                                label="Group"
                                placeholder="A"
                                name="group"
                                defaultValue={bloodGroup.data?.group}
                            />
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Variation"
                                name="variation"
                                placeholder="+ve"
                                defaultValue={bloodGroup.data?.variation}
                            />
                            <TextInput
                                label="Comments"
                                name="comments"
                                placeholder="Something important"
                                defaultValue={bloodGroup.data?.comments}
                            />
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Stock"
                                name="stock"
                                type="number"
                                defaultValue={bloodGroup.data?.stock ?? 0}
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
