"use client";

import { useState } from "react";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthMode = "login" | "register";

export default function AuthCard() {
    const [mode, setMode] = useState<AuthMode>("login");

    return (
        <section
            className="w-full max-w-md rounded-2xl p-6 md:p-7 backdrop-blur-xl"
            style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04)",
            }}
        >
            <p className="text-xs uppercase tracking-[0.18em] text-violet-300/90 mb-3">
                Account
            </p>

            <h1 className="text-2xl font-semibold leading-tight">
                {mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>

            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {mode === "login"
                    ? "Log in to your account"
                    : "Create new account"}
            </p>

            <div className="mt-5">
                <AuthTabs mode={mode} onChange={setMode} />
            </div>

            <div className="mt-5">{mode === "login" ? <LoginForm /> : <RegisterForm />}</div>
        </section>
    );
}