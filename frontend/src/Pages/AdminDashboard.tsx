import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Card } from "../Components/common/Card/card";
import { SpinnerWithText } from "../Components/common/Loader/SpinnerWithText";
import { useAdmin } from "../Hooks/Data/useAdmin";
import { useUserData } from "../Hooks/Data/useUserData";

export const AdminDashboard: React.FC = () => {
    const { elections, isError, isLoading, error } = useAdmin();

    const { user } = useUserData();

    if (isLoading)
        return (
            <div className="flex min-w-full min-h-full">
                <SpinnerWithText />
            </div>
        );

    if (isError) toast.error("Sorry, there was an error failed to load data please try again later.");

    if (isError || typeof elections !== "object")
        return (
            <div className="flex min-w-full min-h-full items-center justify-center">
                <Card>
                    <div className="font-bold whitespace-pre-wrap overflow-auto">
                        error : {JSON.stringify((error as any)?.response?.data) ?? "Something went wrong!"}
                    </div>
                </Card>
            </div>
        );

    if (elections?.length === 0)
        return (
            <div className="flex min-w-full min-h-full items-center justify-center">
                <Card>
                    <div className="font-bold whitespace-pre-wrap overflow-auto">Sorry no Request is available</div>
                </Card>
            </div>
        );

    return (
        <div className="flex flex-col w-full min-h-full overflow-hidden  pb-4 justify-center  px-10 ">
            <div className="min-h-full max-h-screen   flex flex-col justify-end">
                <div className="flex flex-col max-h-[75vh] overflow-auto">
                    <div className="chat chat-start">
                        <div className="chat-bubble text-white chat-bubble-primary">
                            Hi, This is your assistant
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble text-white chat-bubble-primary">
                            How may I help you ?
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-secondary text-white">Hi, how are you</div>
                    </div>
                </div>
            </div>
            <div className="py-2 flex border-t border-slate-200 gap-3 ">
                <div className="w-full">
                <textarea placeholder="Type......" className="textarea textarea-bordered textarea-xs w-full " ></textarea>                </div>
                <div>
                    <button className="btn btn-outline">Send</button>
                </div>
            </div>
        </div>
    );
};
