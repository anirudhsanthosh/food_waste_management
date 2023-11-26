import { cn } from "../../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}
export const PrimaryButton: React.FC<ButtonProps> = ({ className, children, ...props }) => {
    return (
        <button className={cn("btn btn-primary gap-1", className)} {...props}>
            {children}
        </button>
    );
};
