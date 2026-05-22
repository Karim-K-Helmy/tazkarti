import CategoryCard from "@/components/CategoryCard";
import SectionHeader from "@/components/SectionHeader";
import { categories, events } from "@/data/events";

export default function CategoriesSection() {
  return (
    <section className="border-b border-white/10 bg-[#020617] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader title="اختر التصنيف المناسب" description="كل أنواع الفعاليات في مكان واحد، بألوان واضحة وتباين قوي على الثيم الأسود." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map((category) => <CategoryCard key={category} title={category} count={events.filter((event) => event.category === category).length} />)}
        </div>
      </div>
    </section>
  );
}
