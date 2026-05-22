import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "@/components/SectionHeader";
import { reviews } from "@/data/home";

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader title="آراء المستخدمين" description="تجارب وهمية توضح شكل قسم المراجعات داخل الواجهة." />
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6">
            <div className="mb-4 flex text-amber-300">{[1, 2, 3, 4, 5].map((star) => <FontAwesomeIcon key={star} icon={faStar} />)}</div>
            <p className="leading-8 text-slate-300">“{review.text}”</p>
            <p className="mt-5 font-black text-white">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
