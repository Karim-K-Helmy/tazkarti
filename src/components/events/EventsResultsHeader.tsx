type EventsResultsHeaderProps = { count: number; onReset: () => void };

export default function EventsResultsHeader({ count, onReset }: EventsResultsHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between text-sm font-bold text-slate-300">
      <span>تم العثور على {count} فعالية</span>
      <button onClick={onReset} className="font-black text-teal-300 hover:text-teal-200">إعادة ضبط الفلاتر</button>
    </div>
  );
}
