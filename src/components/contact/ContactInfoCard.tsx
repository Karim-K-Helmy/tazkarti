const contactItems = ["البريد: hello@tazkarti.local", "الهاتف: 0100 000 0000", "العنوان: القاهرة، مصر"];

export default function ContactInfoCard() {
  return <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-soft"><h2 className="text-2xl font-black text-white">معلومات التواصل</h2><div className="mt-6 grid gap-4 text-slate-300">{contactItems.map((item) => <p key={item} className="rounded-2xl border border-white/10 bg-slate-950/[0.35] p-4">{item}</p>)}</div></div>;
}
