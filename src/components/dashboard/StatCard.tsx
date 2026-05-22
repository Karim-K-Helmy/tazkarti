import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: IconDefinition;
};

export default function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-400/10 text-xl text-teal-200">
        <FontAwesomeIcon icon={icon} />
      </span>
      <p className="mt-5 text-sm font-semibold text-slate-400">{title}</p>
      <p className="mt-2 text-3xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
