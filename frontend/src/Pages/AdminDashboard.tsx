import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface chat {
    from: "user" | "assistant";
    message: string;
}

const samples: chat[] = [
    {
        from: "assistant",
        message: "Hi, This is your assistant",
    },
    {
        from: "assistant",
        message:
            "How may I help you ? How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?How may I help you ?",
    },
    {
        from: "user",
        message: "Hi, how are you",
    },
];

export const AdminDashboard: React.FC = () => {
    const [chat, setChat] = useState<chat[]>([]);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const scrollRef = useRef<HTMLDivElement>(null);

    async function gpt(message: string) {
        try {
            const response = await axios.post<chat>("/user/gpt", { message });

            console.log(response.data);

            return response.data;
        } catch (err: any) {
            console.error(err);

            throw err;
        }
    }

    async function send() {
        if (!textAreaRef.current) return;

        const message = textAreaRef.current.value;

        if (!message) return;

        try {
            setChat([...chat, { from: "user", message }]);

            scrollIntoView();

            textAreaRef.current.value = "";

            const response = await gpt(message);

            setChat((old) => [...old, response]);

            scrollIntoView();
        } catch (err) {
            chat.pop();
            setChat([...chat]);
            textAreaRef.current.value = message;

            scrollIntoView();
        }
    }

    function scrollIntoView() {
        if (!scrollRef.current) return;

        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollIntoView();
    }, [chat]);

    return (
        <div className="flex flex-col  w-full h-[87vh] px-4">
            <div className="w-full flex flex-col justify-end h-full overflow-hidden max-h-full pb-2">
                <div className="h-full overflow-y-auto">
                    {chat?.map((message, index) => {
                        return (
                            <div
                                className={`chat ${message.from === "assistant" ? `chat-start` : "chat-end"} `}
                                ref={index === chat.length - 1 ? scrollRef : null}
                            >
                                <div
                                    className={`chat-bubble text-white ${
                                        message.from === "assistant" ? `chat-bubble-primary` : "chat-bubble-secondary"
                                    }`}
                                >
                                    <pre className="whitespace-pre-wrap">{message.message}</pre>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="py-2 flex border-t border-slate-200 gap-3 items-center">
                <div className="w-full">
                    <textarea
                        placeholder="Type......"
                        className="textarea textarea-bordered textarea-xs w-full text-lg"
                        ref={textAreaRef}
                    ></textarea>{" "}
                </div>
                <div>
                    <button className="btn btn-outline" onClick={send}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
