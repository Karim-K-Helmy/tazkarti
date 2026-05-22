import DemoAccountCard from "@/components/auth/DemoAccountCard";
import { DEMO_ACCOUNTS } from "@/lib/storage";
import type { DemoAccount } from "@/types";

type DemoAccountsPanelProps = {
  onUseAccount: (account: DemoAccount) => void;
};

export default function DemoAccountsPanel({ onUseAccount }: DemoAccountsPanelProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft md:p-6">
      <span className="inline-flex rounded-full border border-teal-300/20 bg-teal-400/10 px-4 py-2 text-sm font-bold text-teal-100">حسابات Demo جاهزة</span>
      <h2 className="mt-4 text-2xl font-black text-white">جرّب الموقع بسرعة</h2>
      <p className="mt-2 leading-8 text-slate-300">بيانات الدخول ظاهرة للزائر حتى يقدر يدخل كمستخدم عادي أو كمسؤول ويجرب لوحة التحكم.</p>
      <div className="mt-6 grid gap-4">
        {DEMO_ACCOUNTS.map((account) => <DemoAccountCard key={account.email} account={account} onUse={onUseAccount} />)}
      </div>
    </div>
  );
}
