interface RequireAuth {
    children: React.ReactElement;
}

export const RequireAuth: React.FC<RequireAuth> = ({ children }) => {
    return children;
};
