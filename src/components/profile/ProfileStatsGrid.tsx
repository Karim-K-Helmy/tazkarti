import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTicket } from "@fortawesome/free-solid-svg-icons";

type ProfileStatsGridProps = { bookingCount: number };

export default function ProfileStatsGrid({ bookingCount }: ProfileStatsGridProps) {
  return <div className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-[1.5rem] border border-white/10 bg-slate-950/[0.35] p-5"><p className="text-sm text-slate-400">حالة الحساب</p><p className="mt-2 text-2xl font-black text-emerald-200">نشط</p></div><div className="rounded-[1.5rem] border border-white/10 bg-slate-950/[0.35] p-5"><p className="text-sm text-slate-400">عدد الحجوزات</p><p className="mt-2 flex items-center gap-2 text-2xl font-black text-white"><FontAwesomeIcon icon={faTicket} className="text-teal-300" /> {bookingCount}</p></div><button className="rounded-[1.5rem] border border-white/10 bg-slate-950/[0.35] p-5 text-right transition hover:bg-white/[0.08]"><p className="text-sm text-slate-400">تعديل بيانات</p><p className="mt-2 flex items-center gap-2 text-2xl font-black text-white"><FontAwesomeIcon icon={faPenToSquare} className="text-teal-300" /> وهمي</p></button></div>;
}
