export type NavLink = {
    href: string;
    label: string;
};

export type NavItemProps = {
    href: string;
    label: string;
    onClick?: () => void;
    className?: string;
};

export type ContactCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
};

export type FieldProps = {
    label: string;
    name: string;
    type: string;
    required?: boolean;
};
