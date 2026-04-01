"use client";

import { useMemo, useState } from "react";
import AuthCard from "@/app/components/auth/AuthCard";
import { DUMMY_QUARTIERI } from "./dummyData";
import QuartiereCard from "./QuartiereCard";
import QuartiereHeader from "./QuartiereHeader";

export default function QuartierePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // dummy state
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [message, setMessage] = useState<string>("");

    const quartieri = useMemo(() => DUMMY_QUARTIERI, []);

    const requireLogin = (action: string) => {
        if (!isLoggedIn) {
            setMessage(`Dummy: You need to be logged in to ${action}.`);
            return false;
        }
        return true;
    };

    const handleJoin = (id: string) => {
        if (!requireLogin("join a quartiere")) return;
        setMessage(`Dummy: Joined quartiere ${id}.`);
    };

    const handleCreate = () => {
        if (!requireLogin("create a quartiere")) return;
        setMessage("Dummy: Create quartiere clicked.");
    };

    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-10">
            <QuartiereHeader
                isLoggedIn={isLoggedIn}
                onCreate={handleCreate}
                onOpenAuth={() => setShowAuthModal(true)}
                onToggleDummyLogin={() => {
                    setIsLoggedIn((v) => !v);
                    setMessage("Dummy: Login state toggled.");
                }}
            />

            <div className="mb-4 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm">
                <span className="font-semibold">Status:</span>{" "}
                <span className={isLoggedIn ? "text-emerald-300" : "text-amber-300"}>
          {isLoggedIn ? "Logged in (dummy)" : "Logged out (dummy)"}
        </span>
            </div>

            {message && (
                <div className="mb-4 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-sm text-violet-200">
                    {message}
                </div>
            )}

            <section className="grid gap-4 sm:grid-cols-2">
                {quartieri.map((q) => (
                    <QuartiereCard
                        key={q.id}
                        quartiere={q}
                        isLoggedIn={isLoggedIn}
                        onJoin={handleJoin}
                    />
                ))}
            </section>

            {showAuthModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 backdrop-blur-md p-4">
                    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/95 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-slate-700/70 px-4 py-3">
                            <p className="text-sm font-medium text-slate-300">Authentication</p>
                            <button
                                type="button"
                                onClick={() => setShowAuthModal(false)}
                                className="rounded-lg border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:bg-slate-700"
                            >
                                Close
                            </button>
                        </div>

                        <div className="p-4">
                            <AuthCard />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}