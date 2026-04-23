"use client";
import { useCallback, useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
    const [show, setShow] = useState(false);


    const onScroll = useCallback(() => {
        setShow(window.scrollY > 400);
    }, [setShow]);

    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);
    return (
        <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-bg shadow-lg shadow-accent/30 transition-all hover:scale-110 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <FiArrowUp className="text-xl" />
        </button>
    );
}
