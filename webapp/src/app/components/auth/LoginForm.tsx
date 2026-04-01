export default function LoginForm() {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="login-email" className="block text-sm font-medium mb-1">
                    E-Mail
                </label>
                <input
                    id="login-email"
                    type="email"
                    placeholder="example@test.com"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                />
            </div>

            <div>
                <label htmlFor="login-password" className="block text-sm font-medium mb-1">
                    Passwort
                </label>
                <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 text-white py-2.5 font-semibold hover:bg-slate-800 transition-colors"
            >
                Login
            </button>
        </form>
    );
}