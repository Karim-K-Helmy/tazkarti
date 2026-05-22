export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div>
        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-teal-300" />
        <p className="font-bold text-slate-300">جاري تحميل المحتوى...</p>
      </div>
    </div>
  );
}
