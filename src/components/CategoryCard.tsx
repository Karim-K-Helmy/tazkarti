import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneLines,
  faUsersRectangle,
  faFilm,
  faMasksTheater,
  faFutbol,
  faLightbulb,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

const categoryIcons = {
  "حفلات": faMicrophoneLines,
  "مؤتمرات": faUsersRectangle,
  "سينما": faFilm,
  "مسرح": faMasksTheater,
  "مباريات": faFutbol,
  "ورش عمل": faLightbulb,
  "معارض": faPalette
};

export default function CategoryCard({ title, count }: { title: keyof typeof categoryIcons; count: number }) {
  return (
    <Link href={`/events?category=${encodeURIComponent(title)}`} className="group rounded-2xl border border-white/10 bg-[#07111f] p-5 text-right shadow-[0_16px_50px_rgba(0,0,0,.28)] transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-[#0a1727] hover:shadow-[0_22px_70px_rgba(20,184,166,.12)]">
      <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-teal-300/20 bg-teal-400/10 text-teal-200 transition group-hover:bg-teal-400 group-hover:text-slate-950">
        <FontAwesomeIcon icon={categoryIcons[title]} />
      </span>
      <h3 className="text-lg font-black text-white">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-slate-400">{count} فعالية متاحة</p>
    </Link>
  );
}
