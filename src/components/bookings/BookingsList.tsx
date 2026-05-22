import BookingCard from "@/components/BookingCard";
import EmptyState from "@/components/EmptyState";
import type { Booking } from "@/types";

type BookingsListProps = { bookings: Booking[]; ready: boolean };

export default function BookingsList({ bookings, ready }: BookingsListProps) {
  if (!ready) return <p className="text-slate-300">جاري تحميل الحجوزات...</p>;
  if (!bookings.length) return <EmptyState title="لا توجد حجوزات حتى الآن" description="ابدأ باستكشاف الفعاليات واحجز تذكرتك الأولى، وستظهر هنا مع كود الحجز والحالة." actionHref="/events" actionLabel="استكشف الفعاليات" />;
  return <div className="grid gap-5">{bookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)}</div>;
}
