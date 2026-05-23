"use client";

import { Smartphone } from "lucide-react";
import { type ReactElement } from "react";
import "./AndroidInstallCTA.css";

export default function AndroidInstallCTA(): ReactElement {
    return (
        <span className="android-install-cta">
            <span className="android-install-cta__content">
                <Smartphone size={19} strokeWidth={2.4} aria-hidden="true" />
                <span>Install Android App Now</span>
            </span>
        </span>
    );
}
