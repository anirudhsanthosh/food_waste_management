import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserClient } from "../Api/user";

export const Register: React.FC = () => {
    const navigate = useNavigate();

    const [registeredSuccessfully, setRegisteredSuccessfully] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const entries = {} as { [key: string]: string };

        for (const entry of formData.entries()) {
            const key = entry[0];

            const value = entry[1];

            if (value === "") return toast.error(`${key} can't be empty!`);

            entries[key] = entry[1] as string;
        }

        const { email, password, name, confirmPassword, age, gender, bloodGroup } = entries;

        if (password !== confirmPassword) return toast.error(`password must be same as confirm password`);

        try {
            setLoading(true);
            const user = await UserClient.register({
                email,
                password,
                name,
                age: Number(age),
                gender: gender as "male" | "female",
                bloodGroup,
            });
            setRegisteredSuccessfully(true);

            // navigate('')
        } catch (error: any) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-primary/30">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="/assets/loginFigure.jpg" alt="Shoes" />
                </figure>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h2 className="card-title text-center">Register</h2>
                        {registeredSuccessfully && (
                            <div className="text-success py-6">Successfully Registered please go to login</div>
                        )}
                        {!registeredSuccessfully && (
                            <div className="py-3">
                                <div className="py-1">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="py-1">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="py-1">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="py-1">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="py-1">
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder="Age"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="py-1">
                                    <input
                                        type="text"
                                        name="bloodGroup"
                                        placeholder="Blood Group"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="py-1 flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            className="radio radio-primary"
                                            id="gender-male"
                                        />
                                        <label htmlFor="gender-male">Male</label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            className="radio radio-primary"
                                            id="gender-female"
                                        />
                                        <label htmlFor="gender-female">Female</label>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-outline btn-primary"
                                type="button"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                            {!registeredSuccessfully && (
                                <button
                                    className={`btn btn-primary ${loading ? "loading" : ""}`}
                                    type="submit"
                                    disabled={loading}
                                >
                                    Register
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
