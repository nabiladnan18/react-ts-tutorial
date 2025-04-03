import { JSX } from "react";

interface Props {
    message: string;
    type?: "info" | "success" | "warning" | "error"; // DaisyUI alert types
    onClose: () => void; // function that returns nothing.
}

function Alert2({ message, type = "info", onClose }: Props) {
    const alertMapping: Record<
        string,
        { className: string; icon: JSX.Element }
    > = {
        info: {
            className: "alert alert-info",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            ),
        },
        success: {
            className: "alert alert-success",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
            ),
        },
        warning: {
            className: "alert alert-warning",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    ></path>
                </svg>
            ),
        },
        error: {
            className: "alert alert-error",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            ),
        },
    };

    const { className, icon } = alertMapping[type];

    return (
        <div role="alert" className={className}>
            {icon}
            <span>{message}</span>
            <div className="flex-none">
                <button className="btn btn-sm btn-ghost" onClick={onClose}>
                    Hide
                </button>
            </div>
        </div>
    );
}

export default Alert2;

