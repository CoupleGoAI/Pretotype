"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import WaitlistModal from "./WaitlistModal";

interface WaitlistContextValue {
    open: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue>({ open: () => { } });

export const useWaitlist = () => useContext(WaitlistContext);

export default function WaitlistProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);

    return (
        <WaitlistContext.Provider value={{ open }}>
            {children}
            <WaitlistModal open={isOpen} onClose={() => setIsOpen(false)} />
        </WaitlistContext.Provider>
    );
}
