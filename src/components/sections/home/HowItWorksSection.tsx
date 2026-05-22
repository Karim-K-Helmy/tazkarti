import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "@/components/SectionHeader";
import { howItWorksSteps } from "@/data/home";

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader align="center" eyebrow="ببساطة" title="طريقة عمل الموقع" description="ثلاث خطوات فقط من اكتشاف الفعالية حتى حفظ الحجز." />
      <div className="grid gap-5 md:grid-cols-3">
        {howItWorksSteps.map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 text-center">
            <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-teal-400/10 text-2xl text-teal-200"><FontAwesomeIcon icon={item.icon} /></span>
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 leading-8 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
