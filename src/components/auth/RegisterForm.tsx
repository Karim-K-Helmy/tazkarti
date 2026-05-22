"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import AuthCard from "@/components/auth/AuthCard";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { registerStoredUser, setCurrentUser } from "@/lib/storage";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (name.trim().length < 2) return setError("اكتب اسم صحيح.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("اكتب بريد إلكتروني صحيح.");
    if (password.length <= 6) return setError("كلمة السر يجب أن تكون أطول من 6 أحرف.");
    if (password !== confirmPassword) return setError("تأكيد كلمة السر غير مطابق.");

    const result = registerStoredUser({ name, email, password, role: "user" });
    if (!result.ok) return setError(result.message);

    setCurrentUser({ name: result.user.name, email: result.user.email, role: "user", isLoggedIn: true });
    router.push("/");
  };

  return (
    <AuthCard title="إنشاء حساب" description="سجل حساب جديد وابدأ حجز فعالياتك." maxWidth="max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="الاسم" value={name} onChange={(event) => setName(event.target.value)} placeholder="اكتب اسمك" />
        <Input label="البريد الإلكتروني" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" type="email" />
        <Input label="كلمة السر" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" type="password" />
        <Input label="تأكيد كلمة السر" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="••••••••" type="password" />
        {error && <p className="rounded-2xl border border-rose-300/20 bg-rose-400/10 p-3 text-sm text-rose-200">{error}</p>}
        <Button fullWidth type="submit">إنشاء الحساب</Button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-300">
        لديك حساب بالفعل؟ <Link href="/login" className="font-bold text-teal-200 hover:text-teal-100">تسجيل الدخول</Link>
      </p>
    </AuthCard>
  );
}
