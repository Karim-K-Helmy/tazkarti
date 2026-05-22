import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-4xl place-items-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-10 shadow-soft">
        <p className="text-8xl font-black text-teal-200">404</p>
        <h1 className="mt-4 text-3xl font-black text-white">الصفحة غير موجودة</h1>
        <p className="mx-auto mt-4 max-w-md leading-8 text-slate-300">
          يبدو أن الرابط غير صحيح أو أن الصفحة التي تبحث عنها تم نقلها.
        </p>
        <div className="mt-7">
          <Button href="/">العودة للرئيسية</Button>
        </div>
      </div>
    </section>
  );
}
