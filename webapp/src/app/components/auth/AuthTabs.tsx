type AuthMode = "login" | "register";

type AuthTabsProps = {
    mode: AuthMode;
    onChange: (mode: AuthMode) => void;
};

export default function AuthTabs({ mode, onChange }: AuthTabsProps) {
    const base =
        "w-1/2 py-2 rounded-lg text-sm font-semibold transition-colors border";
    const active = "bg-slate-900 text-white border-slate-900";
    const inactive = "bg-white text-slate-700 border-slate-300 hover:bg-slate-50";

    return (
        <div className="flex gap-2">
            <button
                type="button"
                className={`${base} ${mode === "login" ? active : inactive}`}
                onClick={() => onChange("login")}
            >
                Login
            </button>
            <button
                type="button"
                className={`${base} ${mode === "register" ? active : inactive}`}
                onClick={() => onChange("register")}
            >
                Register
            </button>
        </div>
    );
}