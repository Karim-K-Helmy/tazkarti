import Link from "next/link";
import Button from "@/components/Button";
import { navigationLinks } from "@/data/navigation";
import type { User } from "@/types";

type MobileMenuProps = { pathname: string; user: User | null; onClose: () => void; onLogout: () => void };

export default function MobileMenu({ pathname, user, onClose, onLogout }: MobileMenuProps) {
  return (
    <div className="border-t border-white/10 bg-slate-950/95 p-4 lg:hidden">
      <div className="mx-auto grid max-w-7xl gap-2">
        {navigationLinks.map((link) => <Link key={link.href} href={link.href} onClick={onClose} className={`rounded-2xl px-4 py-3 text-sm font-semibold ${pathname === link.href ? "bg-white/10 text-teal-200" : "text-slate-300 hover:bg-white/[0.08]"}`}>{link.label}</Link>)}
        {user?.role === "admin" && <Link href="/dashboard" onClick={onClose} className={`rounded-2xl px-4 py-3 text-sm font-semibold ${pathname === "/dashboard" ? "bg-white/10 text-teal-200" : "text-slate-300 hover:bg-white/[0.08]"}`}>Dashboard</Link>}
        <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
          {user?.isLoggedIn ? <><Button href="/profile" variant="secondary" fullWidth>حسابي</Button><Button onClick={onLogout} variant="ghost" fullWidth>تسجيل الخروج</Button></> : <><Button href="/login" variant="secondary" fullWidth>تسجيل الدخول</Button><Button href="/register" fullWidth>إنشاء حساب</Button></>}
        </div>
      </div>
    </div>
  );
}
