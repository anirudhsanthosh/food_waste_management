import { useNavigate } from "react-router-dom";
import { UserClient } from "../Api/user";

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const entries = {} as { [key: string]: string };

        for (const entry of formData.entries()) {
            const key = entry[0];

            entries[key] = entry[1] as string;
        }

        const { email, password } = entries;

        try {
            await UserClient.auth({ email, password });

            // const user = await UserClient.get()

            navigate('/')
        } catch (error: any) {
            console.error(error);
        }
    };

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-primary/30">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="/assets/loginFigure.jpg" alt="Shoes" />
                </figure>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h2 className="card-title text-center">Login</h2>
                        <div className="py-3">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>
                            <div className="py-3">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary" type="button" onClick={()=>navigate('/register')}>
                                Register
                            </button>
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
