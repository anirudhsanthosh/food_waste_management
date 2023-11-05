import { cn } from "../../utils";

interface PagePropsProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export const Page: React.FC<PagePropsProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn("w-full px-4 overflow-auto", className)} {...props}>
            {children}
        </div>
    );
};
