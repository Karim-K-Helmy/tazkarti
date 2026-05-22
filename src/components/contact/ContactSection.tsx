import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import SectionHeader from "@/components/SectionHeader";

export default function ContactSection() {
  return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><SectionHeader eyebrow="تواصل معنا" title="يسعدنا سماعك" description="املأ النموذج وسيتم عرض رسالة نجاح فقط بدون إرسال حقيقي." /><div className="grid gap-8 lg:grid-cols-[.8fr_1fr]"><ContactInfoCard /><ContactForm /></div></section>;
}
