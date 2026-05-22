type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
};

export default function SectionHeader({ eyebrow, title, description, align = "start" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-right"}`}>
      {eyebrow && <p className="mb-3 text-sm font-black text-teal-300">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-3 leading-8 text-slate-300">{description}</p>}
    </div>
  );
}
