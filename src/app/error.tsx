"use client";

import Button from "@/components/Button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="mx-auto grid min-h-[60vh] max-w-4xl place-items-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-10 shadow-soft">
        <h1 className="text-3xl font-black text-white">حدث خطأ غير متوقع</h1>
        <p className="mx-auto mt-4 max-w-md leading-8 text-slate-300">جرّب إعادة تحميل الصفحة أو العودة للرئيسية.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={reset}>إعادة المحاولة</Button>
          <Button href="/" variant="secondary">الرئيسية</Button>
        </div>
      </div>
    </section>
  );
}
