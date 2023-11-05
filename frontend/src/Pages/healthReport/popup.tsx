import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useBloodGroups } from "../../Hooks/Data/useBloodGroup";
import { TextInput } from "../../Components/input/text";
import { PrimaryButton } from "../../Components/button/primary";
import { useAddress } from "../../Hooks/Data/useAddress";
import { useHealthReport } from "../../Hooks/Data/useHealthReport";

export const HealthReportPopup = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const navigate = useNavigate();

    const { id } = useParams();

    const { createReport, updateReport, healthReport } = useHealthReport(id);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const payload = Object.fromEntries(formData.entries());

        const promise = id
            ? updateReport.mutateAsync({
                  id,
                  ...payload,
                  weight: Number(payload.weight),
                  height: Number(payload.height),
                  date: payload.date ? new Date(payload.date as string).toISOString() : undefined,
              })
            : createReport.mutateAsync({
                  ...payload,
                  weight: Number(payload.weight),
                  height: Number(payload.height),
                  date: payload.date ? new Date(payload.date as string).toISOString() : undefined,
              } as unknown as API.HealthReportCreatePayload);

        toast.promise(promise, {
            error: (err) => err.message,
            loading: id ? "Updating Health Report " : "Creating new Health Report",
            success: id ? "Health Report updated successfully" : "New Health Report has been created successfully",
        });

        promise.then(() => navigate("/health-report"));
    }

    useEffect(() => {
        dialogRef.current?.showModal();

        // return () => dialogRef.current?.close();
    }, []);
    return (
        <div className="fixed  w-full h-full top-0 left-0">
            <dialog
                ref={dialogRef}
                onClose={() => navigate("/health-report")}
                className="modal w-full h-full bg-transparent"
            >
                <div className="modal-box max-w-3xl ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add new Health Report</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center px-4">
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Blood Pressure (in mmHg)"
                                name="bp"
                                placeholder="120/80"
                                defaultValue={healthReport.data?.bp}
                                required
                            />
                            <TextInput
                                label="Cholesterol (in mg/dL)"
                                placeholder="130"
                                name="cholesterol"
                                defaultValue={healthReport.data?.cholesterol}
                                required
                            />
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Weight (in Kg)"
                                name="weight"
                                placeholder="60"
                                defaultValue={healthReport.data?.weight}
                                required
                            />
                            <TextInput
                                label="Height (in cm)"
                                name="height"
                                placeholder="175"
                                defaultValue={healthReport.data?.height}
                                required
                            />
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <TextInput
                                label="Date which lab test was conducted (optional)"
                                name="date"
                                type="date"
                                defaultValue={healthReport.data?.date?.split("T")?.[0] ?? ""}
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
