(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "SKILLS",
    ()=>SKILLS,
    "WORK_EXPERIENCE",
    ()=>WORK_EXPERIENCE,
    "WORK_SAMPLES",
    ()=>WORK_SAMPLES
]);
const SKILLS = [
    {
        title: "Frontend",
        icon: "/assets/images/frontEnd.png",
        skills: [
            {
                skill: "HTML5",
                percentage: "90%"
            },
            {
                skill: "CSS3",
                percentage: "80%"
            },
            {
                skill: "JavaScript",
                percentage: "80%"
            },
            {
                skill: "TypeScript",
                percentage: "80%"
            },
            {
                skill: "React.js",
                percentage: "80%"
            },
            {
                skill: "Next.js",
                percentage: "75%"
            },
            {
                skill: "Tailwind CSS",
                percentage: "85%"
            },
            {
                skill: "Bootstrap",
                percentage: "70%"
            },
            {
                skill: "Angular.js",
                percentage: "40%"
            },
            {
                skill: "Flutter",
                percentage: "40%"
            }
        ]
    },
    {
        title: "Backend",
        icon: "/assets/images/backend.png",
        skills: [
            {
                skill: "Node.js",
                percentage: "60%"
            },
            {
                skill: "Express.js",
                percentage: "60%"
            },
            {
                skill: "PHP",
                percentage: "50%"
            },
            {
                skill: "Laravel",
                percentage: "40%"
            },
            {
                skill: "Python / Flask",
                percentage: "50%"
            }
        ]
    },
    {
        title: "Database",
        icon: "/assets/images/database.png",
        skills: [
            {
                skill: "PostgreSQL",
                percentage: "50%"
            },
            {
                skill: "MongoDB",
                percentage: "60%"
            },
            {
                skill: "MySQL",
                percentage: "60%"
            }
        ]
    },
    {
        title: "Tools",
        icon: "/assets/images/tools.png",
        skills: [
            {
                skill: "Git & GitHub",
                percentage: "90%"
            },
            {
                skill: "VS Code",
                percentage: "95%"
            },
            {
                skill: "Responsive Design",
                percentage: "100%"
            },
            {
                skill: "AWS",
                percentage: "30%"
            }
        ]
    },
    {
        title: "Soft Skills",
        icon: "/assets/images/soft-skills.png",
        skills: [
            {
                skill: "Problem Solving",
                percentage: "85%"
            },
            {
                skill: "Collaboration & Communication",
                percentage: "100%"
            },
            {
                skill: "Attention to Details",
                percentage: "100%"
            },
            {
                skill: "Self Learning",
                percentage: "100%"
            }
        ]
    }
];
const WORK_EXPERIENCE = [
    {
        title: "React / React Native Developer — Squip",
        date: "Feb 2023 – Dec 2023",
        responsibilities: [
            "Built the CustomAnswer component for the Squip voting flow, optimizing user input.",
            "Developed websites, dashboards, and mobile apps with React and React Native.",
            "Led 80% of dashboard work and integrated cross-functional team requirements.",
            "Implemented features across React/React Native, fixing UI and design issues.",
            "Integrated backend services and resolved rendering issues for vote results."
        ]
    },
    {
        title: "MEAN Stack / Front-End Developer — Global Dev Gate, Egypt",
        date: "Jan 2020 – Jan 2021",
        responsibilities: [
            "Converted mock-ups into HTML, JavaScript, AJAX and JSON.",
            "Designed and shipped web pages and sites in a fast-paced environment.",
            "Analyzed requirements and implemented software for production websites."
        ]
    },
    {
        title: "Professional Administrative Support — Upwork",
        date: "Jan 2015 – Ongoing",
        responsibilities: [
            "Managed multiple projects with teams of up to 4 people.",
            "Delivered 9 data projects with high precision and adapted quickly to new tools."
        ]
    }
];
const WORK_SAMPLES = [
    {
        title: "Squib",
        url: "https://www.squib.app/",
        img: "/assets/images/workSample2.png"
    },
    {
        title: "Food Landing Page",
        url: "https://food-landing-page-gules.vercel.app/",
        img: "/assets/images/workSample1.png"
    },
    {
        title: "Todo List App",
        url: "https://todo-list-app-ecru-six.vercel.app/",
        img: "/assets/images/workSample3.png"
    },
    {
        title: "Adopt Me",
        url: "https://adopt-me-pearl-ten.vercel.app/",
        img: "/assets/images/workSample4.png"
    }
];
const NAV_LINKS = [
    {
        label: "Home",
        href: "#home"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Work Experience",
        href: "#experience"
    },
    {
        label: "Work Samples",
        href: "#samples"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NavItem({ href, label, onClick, className, isActive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: onClick,
        className: className,
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent2 transition-all ${isActive ? "w-full" : "w-0"}`
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = NavItem;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#home");
    const onScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[onScroll]": ()=>{
            setScrolled(window.scrollY > 20);
        }
    }["Navbar.useCallback[onScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        onScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const ids = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map({
                "Navbar.useEffect.ids": (l)=>l.href.slice(1)
            }["Navbar.useEffect.ids"]);
            const sections = ids.map({
                "Navbar.useEffect.sections": (id)=>document.getElementById(id)
            }["Navbar.useEffect.sections"]).filter({
                "Navbar.useEffect.sections": (el)=>!!el
            }["Navbar.useEffect.sections"]);
            if (!sections.length) return;
            const io = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "Navbar.useEffect": (e)=>e.isIntersecting
                    }["Navbar.useEffect"]).sort({
                        "Navbar.useEffect": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["Navbar.useEffect"])[0];
                    if (visible) setActive(`#${visible.target.id}`);
                }
            }["Navbar.useEffect"], {
                rootMargin: "-40% 0px -50% 0px",
                threshold: [
                    0,
                    0.25,
                    0.5,
                    0.75,
                    1
                ]
            });
            sections.forEach({
                "Navbar.useEffect": (s)=>io.observe(s)
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>io.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleOutsideClick = {
                "Navbar.useEffect.handleOutsideClick": (e)=>{
                    if (headerRef.current && !headerRef.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["Navbar.useEffect.handleOutsideClick"];
            document.addEventListener("mousedown", handleOutsideClick);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleOutsideClick)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-bg/80 backdrop-blur border-b border-white/5" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: "text-xl font-bold tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient",
                                children: "Hend"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ink",
                                children: ".dev"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex items-center gap-8 text-sm text-muted",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((l)=>{
                            const isActive = active === l.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    href: l.href,
                                    label: l.label,
                                    className: `relative transition-colors ${isActive ? "text-ink" : "text-muted hover:text-ink"}`,
                                    isActive: isActive
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            }, l.href, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: "hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-bg hover:opacity-90 transition",
                        children: "Hire Me"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Toggle menu",
                        "aria-expanded": open,
                        "aria-controls": "mobile-menu",
                        className: "md:hidden text-2xl text-ink",
                        onClick: ()=>setOpen((v)=>!v),
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 112,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {}, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 112,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-white/5 bg-bg/95 backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "px-5 py-4 space-y-3",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    href: l.href,
                                    label: l.label,
                                    onClick: ()=>setOpen(false),
                                    className: "block py-2 text-ink hover:text-accent transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            }, l.href, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                onClick: ()=>setOpen(false),
                                className: "block text-center rounded-full bg-gradient-to-r from-accent to-accent2 py-2 font-semibold text-bg",
                                children: "Hire Me"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Navbar, "C995KLFGxCJAtK96AkzuBylfqgo=");
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shared/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ eyebrow, title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs uppercase tracking-[0.3em] text-accent2",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/shared/SectionHeader.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-3 text-3xl sm:text-4xl font-extrabold",
                children: title
            }, void 0, false, {
                fileName: "[project]/shared/SectionHeader.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-muted",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/shared/SectionHeader.tsx",
                lineNumber: 12,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/SectionHeader.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Skills() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILLS"][active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "relative py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-5 sm:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "What I bring",
                    title: "Skills",
                    subtitle: "A snapshot of the tools and technologies I use to build things."
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid lg:grid-cols-[280px_1fr] gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILLS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActive(i),
                                    className: `group flex items-center gap-3 rounded-2xl p-4 text-left transition border ${active === i ? "bg-gradient-to-br from-accent/20 to-accent2/20 border-accent/50" : "glass hover:border-white/20"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: s.icon,
                                            alt: "",
                                            className: "h-8 w-8 object-contain",
                                            width: 32,
                                            height: 32
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm sm:text-base",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.title, true, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Skills.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass rounded-3xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-6 text-gradient inline-block",
                                    children: current.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-5",
                                    children: current.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-ink",
                                                            children: s.skill
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Skills.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted",
                                                            children: s.percentage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Skills.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Skills.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full bg-white/5 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-gradient-to-r from-accent to-accent2 transition-all",
                                                        style: {
                                                            width: s.percentage
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Skills.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Skills.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.skill, true, {
                                            fileName: "[project]/components/Skills.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Skills.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Skills.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Skills, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shared/Field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Field({ label, name, type, required }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-xs uppercase tracking-wider text-muted mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/shared/Field.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: name,
                type: type,
                required: required,
                placeholder: label,
                className: "w-full rounded-xl bg-bg2/60 border border-white/10 px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition"
            }, void 0, false, {
                fileName: "[project]/shared/Field.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/Field.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = Field;
var _c;
__turbopack_context__.k.register(_c, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shared/ContactCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactCard",
    ()=>ContactCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ContactCard({ icon, label, value, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noreferrer",
        className: "glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-bg text-xl flex-shrink-0",
                children: icon
            }, void 0, false, {
                fileName: "[project]/shared/ContactCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-wider text-muted",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/shared/ContactCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-ink font-medium",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/shared/ContactCard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shared/ContactCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/ContactCard.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ContactCard;
var _c;
__turbopack_context__.k.register(_c, "ContactCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ContactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/ContactCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const COOLDOWN_MS = 10_000; // 10 seconds between submissions
const FORMSPREE_ENDPOINT = ("TURBOPACK compile-time value", "https://formspree.io/f/mdaywroa") ?? "";
const WHATSAPP_NUMBER = "201118265495";
const HAS_FORMSPREE_CONFIG = Boolean(FORMSPREE_ENDPOINT);
_c = HAS_FORMSPREE_CONFIG;
function Contact() {
    _s();
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastSentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Contact.useCallback[handleSubmit]": async (e)=>{
            e.preventDefault();
            if (!formRef.current) return;
            if (!HAS_FORMSPREE_CONFIG) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Form service is not configured. Check .env.local values.");
                return;
            }
            // Client-side rate limiting — prevents accidental double-sends and spam
            const now = Date.now();
            if (lastSentRef.current && now - lastSentRef.current < COOLDOWN_MS) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please wait a few seconds before sending again.");
                return;
            }
            setLoading(true);
            try {
                const formData = new FormData(formRef.current);
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error(`Formspree request failed (${response.status})`);
                }
                // show a success message to the user
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Message sent! I'll get back to you soon.");
                formRef.current.reset();
                lastSentRef.current = now;
            } catch (err) {
                // show an error message to the user
                console.error("[Formspree error]", err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Couldn't send right now. Please try again.");
            } finally{
                setLoading(false);
            }
        }
    }["Contact.useCallback[handleSubmit]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-5 sm:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "Let's talk",
                    title: "Get in Touch",
                    subtitle: "Have a project in mind or just want to say hi? Drop me a message."
                }, void 0, false, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 content-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ContactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactCard"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLinkedin"], {}, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 85,
                                        columnNumber: 21
                                    }, this),
                                    label: "LinkedIn",
                                    value: "hend-mohammed-bahar",
                                    href: "https://www.linkedin.com/in/hend-mohammed-bahar"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ContactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactCard"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGithub"], {}, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, this),
                                    label: "GitHub",
                                    value: "github.com/HendMohammed90",
                                    href: "https://github.com/HendMohammed90"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ContactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactCard"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageCircle"], {}, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, this),
                                    label: "WhatsApp",
                                    value: `+20 ${WHATSAPP_NUMBER}`,
                                    href: `https://wa.me/${WHATSAPP_NUMBER}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ContactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactCard"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {}, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 103,
                                        columnNumber: 21
                                    }, this),
                                    label: "Email",
                                    value: "hend.odesk.tasks@gmail.com",
                                    href: "mailto:hend.odesk.tasks@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-2xl p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted",
                                        children: [
                                            "Currently open to",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ink font-semibold",
                                                children: "freelance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            " and",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ink font-semibold",
                                                children: "part-time"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            "opportunities in front-end, full-stack and React development."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            ref: formRef,
                            onSubmit: handleSubmit,
                            className: "glass rounded-3xl p-6 sm:p-8 space-y-4",
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Your Name",
                                    name: "from_name",
                                    type: "text",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Email Address",
                                    name: "from_email",
                                    type: "email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs uppercase tracking-wider text-muted mb-2",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            rows: 5,
                                            required: true,
                                            placeholder: "Tell me about your project...",
                                            className: "w-full rounded-xl bg-bg2/60 border border-white/10 px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    "aria-busy": loading,
                                    className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 py-3 font-semibold text-bg hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed",
                                    children: loading ? "Sending…" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Send Message ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSend"], {}, void 0, false, {
                                                fileName: "[project]/components/Contact.tsx",
                                                lineNumber: 151,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Contact.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Contact, "EA494s4L1yehL9gvdNUZ5OFNdWw=");
_c1 = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "HAS_FORMSPREE_CONFIG");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollProgress() {
    _s();
    const [p, setP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            const onScroll = {
                "ScrollProgress.useEffect.onScroll": ()=>{
                    const h = document.documentElement;
                    const total = h.scrollHeight - h.clientHeight;
                    setP(total > 0 ? h.scrollTop / total * 100 : 0);
                }
            }["ScrollProgress.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ScrollProgress.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-gradient-to-r from-accent via-accent2 to-accent transition-[width] duration-150",
            style: {
                width: `${p}%`
            }
        }, void 0, false, {
            fileName: "[project]/components/ScrollProgress.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollProgress.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(ScrollProgress, "MEfQ3cGrWqUKAiHBR9ShFSBljwk=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0~inet_._.js.map