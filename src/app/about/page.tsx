import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCalendarCheck, faGem, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: faCalendarCheck, title: "رحلة حجز واضحة", text: "من اكتشاف الفعالية حتى ظهور كود الحجز، كل خطوة مصممة لتكون بسيطة ومباشرة." },
  { icon: faBolt, title: "تجربة سريعة", text: "واجهة خفيفة ومنظمة تساعد الزائر على الوصول للفعالية المناسبة بسرعة." },
  { icon: faShieldHalved, title: "تفاصيل مطمئنة", text: "كل بطاقة فعالية تعرض التاريخ، المكان، السعر، وعدد التذاكر قبل الحجز." },
  { icon: faGem, title: "تصميم احترافي", text: "أسلوب بصري حديث مناسب لمنصة تذاكر عربية/إنجليزية قابلة للتطوير." }
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="عن Tazkarti" title="منصة بسيطة لاكتشاف وحجز الفعاليات" description="Tazkarti واجهة عصرية تساعد الزائر على استكشاف الحفلات والمؤتمرات والمباريات والفعاليات وحجز تذكرته بسهولة." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6">
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-teal-400/10 text-xl text-teal-200"><FontAwesomeIcon icon={feature.icon} /></span>
            <h3 className="text-xl font-black text-white">{feature.title}</h3>
            <p className="mt-3 leading-8 text-slate-300">{feature.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 leading-9 text-slate-300 md:p-10">
        <h2 className="mb-4 text-3xl font-black text-white">رؤيتنا</h2>
        <p>
          نريد أن تكون Tazkarti نقطة انطلاق سهلة لأي شخص يبحث عن فعالية مناسبة، سواء كانت حفلة، مؤتمر، مسرحية، مباراة، ورشة عمل أو معرض. الهدف هو تقديم تجربة مرتبة، جذابة، ومناسبة للمستخدم العربي من أول زيارة وحتى تأكيد الحجز.
        </p>
      </div>
    </section>
  );
}
