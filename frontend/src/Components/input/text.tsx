import { cn } from "../../utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    // children?: React.ReactNode;
}

export const TextInput: React.FC<InputProps> = ({ label, className, wrapperClassName, labelClassName, ...props }) => {
    return (
        <div className={cn("form-control w-full max-w-xs", wrapperClassName)}>
            <label className={cn("label", labelClassName)}>
                <span className="label-text">{label}</span>
            </label>
            <input
                type="text"
                placeholder="Type here"
                className={cn("input input-bordered input-primary w-full max-w-xs", className)}
                {...props}
            />
        </div>
    );
};
