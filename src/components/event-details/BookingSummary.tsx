import { formatPrice } from "@/lib/format";

type BookingSummaryProps = { total: number };

export default function BookingSummary({ total }: BookingSummaryProps) {
  return <div className="mt-6 flex items-center justify-between rounded-[1.5rem] border border-teal-300/20 bg-teal-400/10 p-4"><span className="text-slate-200">السعر النهائي</span><span className="text-2xl font-black text-teal-100">{formatPrice(total)}</span></div>;
}
