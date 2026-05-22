"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import DashboardBookings from "@/components/dashboard/DashboardBookings";
import DashboardEventsManager from "@/components/dashboard/DashboardEventsManager";
import DashboardOperations from "@/components/dashboard/DashboardOperations";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardUsersTable from "@/components/dashboard/DashboardUsersTable";
import SectionHeader from "@/components/SectionHeader";
import { addCustomEvent, addOperation, deleteCustomEvent, deleteStoredUser, getBookings, getCurrentUser, getCustomEvents, getOperations, getRegisteredUsers, updateOperationStatus, updateStoredUserStatus } from "@/lib/storage";
import type { Booking, EventItem, OperationLog, StoredUser, User } from "@/types";

export default function DashboardClient() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<StoredUser[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [operations, setOperations] = useState<OperationLog[]>([]);
  const [customEvents, setCustomEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    if (currentUser?.role === "admin") {
      setUsers(getRegisteredUsers());
      setBookings(getBookings());
      setOperations(getOperations());
      setCustomEvents(getCustomEvents());
    }
    setReady(true);
  }, []);

  if (!ready) {
    return <section className="mx-auto max-w-7xl px-4 py-14 text-slate-300 sm:px-6 lg:px-8">جاري تحميل لوحة التحكم...</section>;
  }

  if (!user?.isLoggedIn) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-soft">
          <h1 className="text-3xl font-black text-white">سجل الدخول أولًا</h1>
          <p className="mt-3 text-slate-300">لوحة التحكم متاحة لحساب المسؤول فقط.</p>
          <Button href="/login?redirect=/dashboard" className="mt-6">تسجيل الدخول</Button>
        </div>
      </section>
    );
  }

  if (user.role !== "admin") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-soft">
          <h1 className="text-3xl font-black text-white">غير مصرح</h1>
          <p className="mt-3 text-slate-300">هذه الصفحة مخصصة لحساب المسؤول. استخدم حساب Admin الموجود في صفحة تسجيل الدخول.</p>
          <Button href="/login?redirect=/dashboard" className="mt-6">الدخول كمسؤول</Button>
        </div>
      </section>
    );
  }

  const handleStatusChange = (userId: string, status: StoredUser["status"]) => {
    setUsers(updateStoredUserStatus(userId, status));
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(deleteStoredUser(userId));
  };

  const handleAddOperation = (operation: Omit<OperationLog, "id" | "createdAt">) => {
    setOperations(addOperation(operation));
  };

  const handleOperationStatus = (operationId: string, status: OperationLog["status"]) => {
    setOperations(updateOperationStatus(operationId, status));
  };

  const handleAddEvent = (event: EventItem) => {
    setCustomEvents(addCustomEvent(event));
  };

  const handleDeleteEvent = (eventId: string) => {
    setCustomEvents(deleteCustomEvent(eventId));
  };

  return (
    <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <SectionHeader eyebrow="Admin" title="لوحة التحكم" description="إدارة محلية للحسابات والحجوزات والعمليات من داخل المتصفح." />
        <Button type="button" variant="secondary" onClick={() => router.push("/events")}>عرض الفعاليات</Button>
      </div>
      <div className="space-y-8">
        <DashboardStats users={users} bookings={bookings} operations={operations} />
        <DashboardEventsManager customEvents={customEvents} onAdd={handleAddEvent} onDelete={handleDeleteEvent} />
        <DashboardUsersTable users={users} onStatusChange={handleStatusChange} onDelete={handleDeleteUser} />
        <DashboardOperations operations={operations} onAdd={handleAddOperation} onStatusChange={handleOperationStatus} />
        <DashboardBookings bookings={bookings} />
      </div>
    </div></section>
  );
}
