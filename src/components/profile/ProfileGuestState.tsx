import EmptyState from "@/components/EmptyState";

export default function ProfileGuestState() {
  return <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"><EmptyState title="سجل الدخول أولًا" description="تحتاج تسجيل الدخول لعرض بيانات حسابك وحجوزاتك." actionHref="/login?redirect=/profile" actionLabel="تسجيل الدخول" /></section>;
}
