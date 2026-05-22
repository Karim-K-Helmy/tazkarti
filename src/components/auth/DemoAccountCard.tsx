import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import type { DemoAccount } from "@/types";

type DemoAccountCardProps = {
  account: DemoAccount;
  onUse: (account: DemoAccount) => void;
};

export default function DemoAccountCard({ account, onUse }: DemoAccountCardProps) {
  const isAdmin = account.role === "admin";

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-black text-white">
            <FontAwesomeIcon icon={isAdmin ? faCrown : faUser} className="text-teal-300" />
            {account.label}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{account.description}</p>
        </div>
        <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-teal-100">{isAdmin ? "Admin" : "User"}</span>
      </div>
      <div className="mt-4 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm">
        <p className="text-slate-300"><span className="font-bold text-white">Email:</span> <span dir="ltr" className="inline-block">{account.email}</span></p>
        <p className="text-slate-300"><span className="font-bold text-white">Password:</span> <span dir="ltr" className="inline-block">{account.password}</span></p>
      </div>
      <Button type="button" onClick={() => onUse(account)} variant={isAdmin ? "secondary" : "primary"} fullWidth className="mt-4">
        دخول كـ {isAdmin ? "مسؤول" : "مستخدم"}
      </Button>
    </div>
  );
}
