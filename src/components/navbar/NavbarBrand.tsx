import Image from "next/image";
import Link from "next/link";

export default function NavbarBrand() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Tazkarti - الصفحة الرئيسية">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-transparent transition group-hover:scale-105">
        <Image src="/assets/icons/navbar-ticket-icon.svg" alt="أيقونة Tazkarti" width={34} height={34} priority className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(45,212,191,0.65)]" />
      </span>
      <span className="text-3xl font-black tracking-tight text-white">Tazkarti</span>
    </Link>
  );
}
