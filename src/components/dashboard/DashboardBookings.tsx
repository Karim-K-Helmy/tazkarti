import { formatCurrency } from "@/lib/format";
import type { Booking } from "@/types";

type DashboardBookingsProps = { bookings: Booking[] };

export default function DashboardBookings({ bookings }: DashboardBookingsProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft md:p-6">
      <div className="mb-5">
        <p className="text-sm font-bold text-teal-200">متابعة الحجوزات</p>
        <h2 className="mt-2 text-2xl font-black text-white">آخر الحجوزات</h2>
      </div>
      {bookings.length ? (
        <div className="grid gap-3">
          {bookings.slice(0, 6).map((booking) => (
            <div key={booking.id} className="grid gap-3 rounded-3xl border border-white/10 bg-slate-950/40 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
              <div>
                <h3 className="font-black text-white">{booking.eventTitle}</h3>
                <p className="mt-1 text-sm text-slate-400">{booking.userName || booking.userEmail || "مستخدم"} • {booking.code}</p>
              </div>
              <p className="text-sm text-slate-300">{booking.tickets} تذكرة</p>
              <p className="font-black text-teal-100">{formatCurrency(booking.totalPrice)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-center text-slate-300">لا توجد حجوزات حتى الآن.</p>
      )}
    </section>
  );
}
