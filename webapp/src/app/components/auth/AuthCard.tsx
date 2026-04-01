"use client";

import { useState } from "react";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthMode = "login" | "register";

export default function AuthCard() {
    const [mode, setMode] = useState<AuthMode>("login");

    return (
        <section className="w-full rounded-2xl bg-transparent p-1">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-violet-300">Account</p>

            <h1 className="text-2xl font-semibold leading-tight">
                {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>

            <p className="mt-2 text-sm text-slate-400">
                {mode === "login"
                    ? "Sign in to continue."
                    : "Register to access quartiere actions."}
            </p>

            <div className="mt-5">
                <AuthTabs mode={mode} onChange={setMode} />
            </div>

            <div className="mt-5">{mode === "login" ? <LoginForm /> : <RegisterForm />}</div>
        </section>
    );
}