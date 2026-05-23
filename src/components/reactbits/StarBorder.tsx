"use client";

import { type CSSProperties, type ReactElement, type ReactNode } from "react";
import "./StarBorder.css";

type StarBorderStyle = CSSProperties & {
    "--star-border-color": string;
    "--star-border-speed": string;
};

interface StarBorderProps {
    children: ReactNode;
    className?: string;
    color?: string;
    speed?: string;
}

export default function StarBorder({
    children,
    className = "",
    color = "#cc7be8",
    speed = "5s",
}: StarBorderProps): ReactElement {
    const style: StarBorderStyle = {
        "--star-border-color": color,
        "--star-border-speed": speed,
    };

    return (
        <span className={`star-border ${className}`} style={style}>
            <span className="star-border__shine" aria-hidden="true" />
            <span className="star-border__content">{children}</span>
        </span>
    );
}
