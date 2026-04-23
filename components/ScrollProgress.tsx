"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [p, setP] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            const total = h.scrollHeight - h.clientHeight;
            setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-accent via-accent2 to-accent transition-[width] duration-150"
                style={{ width: `${p}%` }}
            />
        </div>
    );
}
