"use client";

import { useState } from "react";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthMode = "login" | "register";

export default function AuthCard() {
    const [mode, setMode] = useState<AuthMode>("login");

    return (
        <section className="w-full max-w-md rounded-2xl bg-white shadow-lg border border-slate-200 p-6">
            <h1 className="text-2xl font-bold mb-1">
                {mode === "login" ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-slate-600 mb-6">
                {mode === "login"
                    ? "login into your account"
                    : "create a new account to get started"}
            </p>

            <AuthTabs mode={mode} onChange={setMode} />

            <div className="mt-5">{mode === "login" ? <LoginForm /> : <RegisterForm />}</div>
        </section>
    );
}