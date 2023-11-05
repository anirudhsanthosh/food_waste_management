import { cn } from "../../../utils";

interface Card extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<Card> = ({ children, className }) => {
    return (
        <div className={cn(`card w-96 bg-base-100 shadow-xl`, className)}>
            <div className="card-body">{children}</div>
        </div>
    );
};
