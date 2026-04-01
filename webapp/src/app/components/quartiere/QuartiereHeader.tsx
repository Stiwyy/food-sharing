type QuartiereHeaderProps = {
    isLoggedIn: boolean;
    onCreate: () => void;
    onOpenAuth: () => void;
    onToggleDummyLogin: () => void;
};

export default function QuartiereHeader({
                                            isLoggedIn,
                                            onCreate,
                                            onOpenAuth,
                                            onToggleDummyLogin,
                                        }: QuartiereHeaderProps) {
    return (
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Quartiere</p>
                <h1 className="mt-1 text-3xl font-bold">Community Directory</h1>
                <p className="mt-2 text-sm text-slate-400">
                    Dummy overview page. Actions are blocked unless logged in.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={onCreate}
                    className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                    Create quartiere
                </button>

                <button
                    type="button"
                    onClick={onOpenAuth}
                    className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                >
                    Login / Register
                </button>

                <button
                    type="button"
                    onClick={onToggleDummyLogin}
                    className="rounded-xl border border-violet-500/60 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20"
                >
                    {isLoggedIn ? "Set dummy logged OUT" : "Set dummy logged IN"}
                </button>
            </div>
        </header>
    );
}