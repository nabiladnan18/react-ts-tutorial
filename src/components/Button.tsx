interface Props {
    children: string;
    onClick: () => void;
    color?: "primary" | "secondary" | "success" | "error";
}

function Button({ children, onClick, color = "primary" }: Props) {
    const colors: Record<string, string> = {
        primary: "btn btn-primary",
        secondary: "btn btn-secondary",
        success: "btn btn-success",
        error: "btn btn-error",
    };

    return (
        <button className={colors[color]} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

