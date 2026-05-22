import type { ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGaugeHigh, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import type { User } from "@/types";

type DesktopActionsProps = { user: User | null; onLogout: () => void };

const CircleLink = ({ href, label, children }: { href: string; label: string; children: ReactNode }) => (
  <Link href={href} aria-label={label} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-lg text-white transition hover:border-teal-300/50 hover:bg-teal-400 hover:text-slate-950">
    {children}
  </Link>
);

export default function DesktopActions({ user, onLogout }: DesktopActionsProps) {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <CircleLink href="/bookings" label="حجوزاتي"><FontAwesomeIcon icon={faCartShopping} /></CircleLink>
      {user?.isLoggedIn ? (
        <>
          {user.role === "admin" && <CircleLink href="/dashboard" label="لوحة التحكم"><FontAwesomeIcon icon={faGaugeHigh} /></CircleLink>}
          <CircleLink href="/profile" label="حسابي"><FontAwesomeIcon icon={faUser} /></CircleLink>
          <button onClick={onLogout} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-lg text-white transition hover:border-rose-300/50 hover:bg-rose-500 hover:text-white" aria-label="تسجيل الخروج">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </>
      ) : (
        <CircleLink href="/login" label="تسجيل الدخول"><FontAwesomeIcon icon={faUser} /></CircleLink>
      )}
    </div>
  );
}
