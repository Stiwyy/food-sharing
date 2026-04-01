export default function LoginForm() {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Email" htmlFor="login-email">
                <input
                    id="login-email"
                    type="email"
                    placeholder="example@test.com"
                    className="w-full rounded-xl border border-slate-600/60 bg-slate-900/60 px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/25"
                />
            </Field>

            <Field label="Password" htmlFor="login-password">
                <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-600/60 bg-slate-900/60 px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/25"
                />
            </Field>

            <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-4 py-2.5 font-semibold text-white transition hover:bg-violet-500 active:translate-y-px"
            >
                Sign in
            </button>
        </form>
    );
}

function Field({
                   label,
                   htmlFor,
                   children,
               }: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label htmlFor={htmlFor} className="mb-1.5 block text-sm text-slate-300">
                {label}
            </label>
            {children}
        </div>
    );
}