import type { Quartiere } from "./types";

type QuartiereCardProps = {
    quartiere: Quartiere;
    isLoggedIn: boolean;
    onJoin: (id: string) => void;
};

export default function QuartiereCard({
                                          quartiere,
                                          isLoggedIn,
                                          onJoin,
                                      }: QuartiereCardProps) {
    return (
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg font-semibold">{quartiere.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{quartiere.description}</p>
                </div>
                <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">
          {quartiere.members} members
        </span>
            </div>

            <div className="mt-4">
                <button
                    type="button"
                    onClick={() => onJoin(quartiere.id)}
                    className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500 active:translate-y-px"
                >
                    Join
                </button>

                {!isLoggedIn && (
                    <p className="mt-2 text-xs text-amber-300">
                        You must be logged in to join (dummy lock).
                    </p>
                )}
            </div>
        </article>
    );
}