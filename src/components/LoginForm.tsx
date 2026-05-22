"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import AuthCard from "@/components/auth/AuthCard";
import DemoAccountsPanel from "@/components/auth/DemoAccountsPanel";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { authenticateUser } from "@/lib/storage";
import type { DemoAccount, User } from "@/types";

export default function LoginForm({ redirect = "/" }: { redirect?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const goAfterLogin = (user: User) => {
    if (redirect && redirect !== "/") return router.push(redirect);
    router.push(user.role === "admin" ? "/dashboard" : "/profile");
  };

  const submitLogin = (loginEmail: string, loginPassword: string) => {
    setError("");
    if (!/\S+@\S+\.\S+/.test(loginEmail)) return setError("اكتب بريد إلكتروني صحيح.");
    if (loginPassword.length <= 6) return setError("كلمة السر يجب أن تكون أطول من 6 أحرف.");
    const result = authenticateUser(loginEmail, loginPassword);
    if (!result.ok) return setError(result.message);
    goAfterLogin(result.user);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitLogin(email, password);
  };

  const useDemoAccount = (account: DemoAccount) => {
    setEmail(account.email);
    setPassword(account.password);
    submitLogin(account.email, account.password);
  };

  return (
    <section className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
      <AuthCard title="تسجيل الدخول" description="ادخل بياناتك أو جرّب أحد الحسابات الجاهزة فورًا." standalone={false} maxWidth="max-w-none">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input label="البريد الإلكتروني" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" type="email" />
          <Input label="كلمة السر" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" type="password" />
          <label className="flex items-center gap-3 text-sm text-slate-300">
            <input checked={remember} onChange={(event) => setRemember(event.target.checked)} type="checkbox" className="h-4 w-4 accent-teal-400" />
            تذكرني على هذا الجهاز
          </label>
          {error && <p className="rounded-2xl border border-rose-300/20 bg-rose-400/10 p-3 text-sm text-rose-200">{error}</p>}
          <Button fullWidth type="submit">Login</Button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-300">
          ليس لديك حساب؟ <Link href="/register" className="font-bold text-teal-200 hover:text-teal-100">Create account</Link>
        </p>
      </AuthCard>
      <DemoAccountsPanel onUseAccount={useDemoAccount} />
    </section>
  );
}
