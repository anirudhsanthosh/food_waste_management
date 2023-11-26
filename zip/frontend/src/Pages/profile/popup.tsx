import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useBloodGroups } from "../../Hooks/Data/useBloodGroup";
import { TextInput } from "../../Components/input/text";
import { PrimaryButton } from "../../Components/button/primary";
import { useAddress } from "../../Hooks/Data/useAddress";

export const AddressPopup = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const navigate = useNavigate();

    const { id } = useParams();

    const { createAddress, updateAddress, address } = useAddress(id);

    console.log(address.data);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const payload = Object.fromEntries(formData.entries());

        const promise = id
            ? updateAddress.mutateAsync({
                  addressId: id,
                  ...payload,
                  pin: Number(payload.pin),
              })
            : createAddress.mutateAsync({
                  ...payload,
                  pin: Number(payload.pin),
              } as unknown as API.AddressCreatePayload);
        //@ts-ignore
        toast.promise(promise, {
            error: (err) => err.message,
            loading: id ? "Updating address " : "Creating new Address",
            success: id ? "address updated successfully" : "New address has created successfully",
        });

        promise.then(() => navigate("/profile"));
    }

    useEffect(() => {
        dialogRef.current?.showModal();

        // return () => dialogRef.current?.close();
    }, []);
    return (
        <div className="fixed  w-full h-full top-0 left-0">
            <dialog ref={dialogRef} onClose={() => navigate("/profile")} className="modal w-full h-full bg-transparent">
                <div className="modal-box max-w-3xl ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add new Address</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center px-4">
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="House Name/ Building Number"
                                name="houseName"
                                placeholder="4c/51 Asoka nagar"
                                defaultValue={address.data?.houseName}
                            />
                            <TextInput
                                label="Landmark"
                                placeholder="Near to community hall"
                                name="landmark"
                                defaultValue={address.data?.landmark}
                            />
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Town"
                                name="town"
                                placeholder="Mannarkkad"
                                defaultValue={address.data?.town}
                            />
                            <TextInput label="City" name="city" placeholder="city" defaultValue={address.data?.city} />
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="PIN"
                                name="pin"
                                type="number"
                                placeholder="123456"
                                defaultValue={address.data?.pin ?? 123445}
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
