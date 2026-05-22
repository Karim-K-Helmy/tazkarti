import Button from "@/components/Button";
import type { StoredUser } from "@/types";

type DashboardUsersTableProps = {
  users: StoredUser[];
  onStatusChange: (userId: string, status: StoredUser["status"]) => void;
  onDelete: (userId: string) => void;
};

export default function DashboardUsersTable({ users, onStatusChange, onDelete }: DashboardUsersTableProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft md:p-6">
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold text-teal-200">إدارة المستخدمين</p>
          <h2 className="mt-2 text-2xl font-black text-white">الحسابات المسجلة</h2>
        </div>
        <p className="text-sm text-slate-400">يمكن إيقاف أو حذف الحسابات غير التجريبية.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-separate border-spacing-y-3 text-right text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="px-4 py-2">المستخدم</th>
              <th className="px-4 py-2">البريد</th>
              <th className="px-4 py-2">الدور</th>
              <th className="px-4 py-2">الحالة</th>
              <th className="px-4 py-2">تاريخ الإنشاء</th>
              <th className="px-4 py-2">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="rounded-2xl bg-slate-950/40 text-slate-200">
                <td className="rounded-r-2xl px-4 py-4 font-bold text-white">{user.name}</td>
                <td className="px-4 py-4" dir="ltr">{user.email}</td>
                <td className="px-4 py-4"><span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-teal-100">{user.role === "admin" ? "Admin" : "User"}</span></td>
                <td className="px-4 py-4"><span className={user.status === "active" ? "text-emerald-200" : "text-rose-200"}>{user.status === "active" ? "نشط" : "موقوف"}</span></td>
                <td className="px-4 py-4">{new Date(user.createdAt).toLocaleDateString("ar-EG")}</td>
                <td className="rounded-l-2xl px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" variant="secondary" className="px-3 py-2 text-xs" onClick={() => onStatusChange(user.id, user.status === "active" ? "blocked" : "active")}>
                      {user.status === "active" ? "إيقاف" : "تنشيط"}
                    </Button>
                    <Button type="button" variant="ghost" className="px-3 py-2 text-xs text-rose-200 hover:text-rose-100" disabled={user.isDemo} onClick={() => onDelete(user.id)}>
                      حذف
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
