import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

type TicketQuantitySelectorProps = { quantity: number; availableTickets: number; isInvalid: boolean; onChange: (quantity: number) => void };

export default function TicketQuantitySelector({ quantity, availableTickets, isInvalid, onChange }: TicketQuantitySelectorProps) {
  return (
    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/[0.35] p-4">
      <div className="mb-4 flex items-center justify-between"><span className="font-bold text-slate-200">عدد التذاكر</span><span className="text-sm text-slate-400">الحد الأقصى: {availableTickets}</span></div>
      <div className="flex items-center justify-between gap-4">
        <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.12]" onClick={() => onChange(Math.max(1, quantity - 1))}><FontAwesomeIcon icon={faMinus} /></button>
        <input className="input-base text-center text-xl font-black" type="number" min={1} max={availableTickets} value={quantity} onChange={(inputEvent) => onChange(Number(inputEvent.target.value))} />
        <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.12]" onClick={() => onChange(Math.min(availableTickets, quantity + 1))}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      {isInvalid && <p className="mt-3 text-sm text-rose-300">الكمية غير صحيحة أو أكبر من المتاح.</p>}
    </div>
  );
}
