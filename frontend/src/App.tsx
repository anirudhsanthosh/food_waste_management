import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

const queryClient = new QueryClient();

document.getElementsByTagName("html")[0].setAttribute("data-theme", "fantasy");

export const App: React.FC = () => {
    return (
        <>
            <Toaster />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools position="bottom-right" />
            </QueryClientProvider>
        </>
    );
};
