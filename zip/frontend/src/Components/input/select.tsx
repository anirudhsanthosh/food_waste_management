import { cn } from "../../utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    // children?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
    label,
    className,
    wrapperClassName,
    labelClassName,
    children,
    ...props
}) => {
    return (
        <div className={cn("form-control w-full max-w-xs", wrapperClassName)}>
            <label className={cn("label", labelClassName)}>
                <span className="label-text">{label}</span>
            </label>
            <select
                placeholder="Type here"
                className={cn("select select-primary w-full max-w-xs", className)}
                {...props}
            >
                {children}
            </select>
        </div>
    );
};
