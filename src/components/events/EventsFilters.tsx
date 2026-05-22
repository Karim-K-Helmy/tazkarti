import SearchBar from "@/components/SearchBar";
import { categories, cities } from "@/data/events";

type EventsFiltersProps = {
  query: string;
  category: string;
  city: string;
  price: string;
  sort: string;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

const selectClass = "w-full rounded-2xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-teal-300/60 focus:ring-4 focus:ring-teal-400/10";

export default function EventsFilters({ query, category, city, price, sort, onQueryChange, onCategoryChange, onCityChange, onPriceChange, onSortChange }: EventsFiltersProps) {
  return (
    <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_20px_70px_rgba(0,0,0,.32)] md:p-5">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <SearchBar value={query} onChange={onQueryChange} />
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)} className={selectClass}><option value="الكل">كل التصنيفات</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select>
        <select value={city} onChange={(event) => onCityChange(event.target.value)} className={selectClass}><option value="الكل">كل المدن</option>{cities.map((item) => <option key={item} value={item}>{item}</option>)}</select>
        <select value={price} onChange={(event) => onPriceChange(event.target.value)} className={selectClass}><option value="all">كل الأسعار</option><option value="low">حتى 250 جنيه</option><option value="mid">251 - 600 جنيه</option><option value="high">أكثر من 600 جنيه</option></select>
        <select value={sort} onChange={(event) => onSortChange(event.target.value)} className={selectClass}><option value="date-asc">الأقرب تاريخًا</option><option value="date-desc">الأبعد تاريخًا</option><option value="price-asc">السعر من الأقل</option><option value="price-desc">السعر من الأعلى</option></select>
      </div>
    </div>
  );
}
