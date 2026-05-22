import { faCalendarCheck, faChartLine, faTicket, faUsers } from "@fortawesome/free-solid-svg-icons";
import StatCard from "@/components/dashboard/StatCard";
import { formatCurrency } from "@/lib/format";
import type { Booking, OperationLog, StoredUser } from "@/types";

type DashboardStatsProps = {
  users: StoredUser[];
  bookings: Booking[];
  operations: OperationLog[];
};

export default function DashboardStats({ users, bookings, operations }: DashboardStatsProps) {
  const revenue = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
  const tickets = bookings.reduce((sum, booking) => sum + booking.tickets, 0);

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard title="المستخدمون" value={users.length} description="إجمالي الحسابات المسجلة داخل التجربة." icon={faUsers} />
      <StatCard title="الحجوزات" value={bookings.length} description="عدد عمليات الحجز المؤكدة." icon={faCalendarCheck} />
      <StatCard title="التذاكر المباعة" value={tickets} description="مجموع التذاكر داخل كل الحجوزات." icon={faTicket} />
      <StatCard title="إجمالي المبيعات" value={formatCurrency(revenue)} description={`${operations.length} عملية إدارية محفوظة.`} icon={faChartLine} />
    </div>
  );
}
