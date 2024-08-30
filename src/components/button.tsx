import React from "react";

type ButtonProps = {
    type: "primary" | "secondary";
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {

    const buttonStyles = {
        width: "92px",
        height: "42px",
        padding: "11px 17px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: type === "primary" ? "#1B3646" : "#FFFFFF",
        color: type === "primary" ? "#FFFFFF" : "#1B3646",
        borderColor: type === "secondary" ? "#1B3646" : "transparent",
        borderStyle: "solid",
        borderWidth: "1px",
        marginLeft: '10px',
    } as React.CSSProperties;

    return (
        <button style={buttonStyles} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
