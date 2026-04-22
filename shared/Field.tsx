import { ContactCardProps, FieldProps } from "@/lib/types";

export function Field({ label, name, type, required }: FieldProps) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-xs uppercase tracking-wider text-muted mb-2"
            >
                {label}
            </label>
            {/*
         *  id={name} + htmlFor={name} links label → input for accessibility.
         *  Clicking the label focuses the input — standard a11y contract.
         */}
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                placeholder={label}
                className="w-full rounded-xl bg-bg2/60 border border-white/10 px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition"
            />
        </div>
    );
}