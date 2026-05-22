"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    if (name.trim().length < 2 || !/\S+@\S+\.\S+/.test(email) || message.trim().length < 10) return setError("تأكد من كتابة الاسم والبريد والرسالة بشكل صحيح.");
    setSuccess("تم إرسال رسالتك بنجاح. سنعود إليك في أقرب وقت.");
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft md:p-8">
      <div className="grid gap-5">
        <Input label="الاسم" value={name} onChange={(event) => setName(event.target.value)} placeholder="اكتب اسمك" />
        <Input label="البريد" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" type="email" />
        <label className="block space-y-2 text-right"><span className="text-sm font-semibold text-slate-200">الرسالة</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} className="input-base min-h-36 resize-y" placeholder="اكتب رسالتك هنا..." /></label>
        {error && <p className="rounded-2xl border border-rose-300/20 bg-rose-400/10 p-3 text-sm text-rose-200">{error}</p>}
        {success && <p className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-3 text-sm text-emerald-200">{success}</p>}
        <Button type="submit">إرسال الرسالة</Button>
      </div>
    </form>
  );
}
