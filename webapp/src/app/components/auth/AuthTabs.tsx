type AuthMode = "login" | "register";

type AuthTabsProps = {
    mode: AuthMode;
    onChange: (mode: AuthMode) => void;
};

export default function AuthTabs({ mode, onChange }: AuthTabsProps) {
    return (
        <div
            className="grid grid-cols-2 rounded-xl p-1"
            style={{ background: "rgba(15, 23, 42, 0.55)", border: "1px solid var(--card-border)" }}
        >
            <button
                type="button"
                onClick={() => onChange("login")}
                className="rounded-lg py-2 text-sm font-medium transition"
                style={{
                    background: mode === "login" ? "rgba(124,58,237,.22)" : "transparent",
                    color: mode === "login" ? "#ddd6fe" : "#94a3b8",
                }}
            >
                Login
            </button>
            <button
                type="button"
                onClick={() => onChange("register")}
                className="rounded-lg py-2 text-sm font-medium transition"
                style={{
                    background: mode === "register" ? "rgba(124,58,237,.22)" : "transparent",
                    color: mode === "register" ? "#ddd6fe" : "#94a3b8",
                }}
            >
                Register
            </button>
        </div>
    );
}