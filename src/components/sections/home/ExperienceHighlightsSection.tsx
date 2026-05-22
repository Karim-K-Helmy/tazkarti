import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/Button";
import { experienceHighlights } from "@/data/home";

export default function ExperienceHighlightsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.085] via-white/[0.045] to-teal-400/[0.08] p-8 shadow-soft md:p-10">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-teal-400/10 px-4 py-2 text-sm font-bold text-teal-200">لماذا Tazkarti؟</span>
            <h2 className="text-3xl font-black leading-[1.35] text-white md:text-4xl">كل ما تحتاجه لحجز فعاليتك القادمة في تجربة واحدة.</h2>
            <p className="mt-4 leading-8 text-slate-300">من البحث عن الفعالية المناسبة حتى تأكيد الحجز، صممنا التجربة لتكون واضحة، سريعة، ومريحة لكل زائر.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/events">استكشف الفعاليات</Button>
              <Button href="/contact" variant="secondary">تواصل معنا</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-teal-400/10 text-xl text-teal-200"><FontAwesomeIcon icon={item.icon} /></span>
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
