import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

type DesktopLinksProps = { pathname: string };

export default function DesktopLinks({ pathname }: DesktopLinksProps) {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {navigationLinks.slice(0, 5).map((link) => {
        const active = pathname === link.href;
        return (
          <Link key={link.href} href={link.href} className={`relative text-sm font-bold transition ${active ? "text-teal-300" : "text-slate-100 hover:text-teal-200"}`}>
            {link.label}
            {active && <span className="absolute -bottom-7 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-teal-400" />}
          </Link>
        );
      })}
    </div>
  );
}
