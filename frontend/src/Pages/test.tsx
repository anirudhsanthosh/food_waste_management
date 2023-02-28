import { useQuery } from "react-query";

interface Test {}

export const Test: React.FC<Test> = () => {
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An error has occurred: " + {(error as any)?.message}</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
       <strong>👀 {data.subscribers_count}</strong>{' '}
       <strong>✨ {data.stargazers_count}</strong>{' '}
       <strong>🍴 {data.forks_count}</strong>
        </div>
    );
};
