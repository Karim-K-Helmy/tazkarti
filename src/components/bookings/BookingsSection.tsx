"use client";

import { useEffect, useState } from "react";
import BookingsList from "@/components/bookings/BookingsList";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { getCurrentUser, getUserBookings } from "@/lib/storage";
import type { Booking, User } from "@/types";

export default function BookingsSection() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setBookings(getUserBookings(currentUser?.email));
    setReady(true);
  }, []);

  if (ready && !user?.isLoggedIn) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-soft">
          <h1 className="text-3xl font-black text-white">سجل الدخول لعرض حجوزاتك</h1>
          <p className="mt-3 text-slate-300">بعد تسجيل الدخول ستظهر هنا كل الحجوزات المؤكدة الخاصة بحسابك.</p>
          <Button href="/login?redirect=/bookings" className="mt-6">تسجيل الدخول</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="حجوزاتك" title="حجوزاتي" description="كل حجوزاتك المؤكدة تظهر هنا مع كود الحجز والتفاصيل الأساسية." />
      <BookingsList bookings={bookings} ready={ready} />
    </section>
  );
}
