"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopActions from "@/components/navbar/DesktopActions";
import DesktopLinks from "@/components/navbar/DesktopLinks";
import MobileMenu from "@/components/navbar/MobileMenu";
import MobileMenuButton from "@/components/navbar/MobileMenuButton";
import NavbarBrand from "@/components/navbar/NavbarBrand";
import { getCurrentUser, logoutUser } from "@/lib/storage";
import type { User } from "@/types";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => { setUser(getCurrentUser()); }, [pathname]);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setOpen(false);
    router.push("/");
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = search.trim();
    router.push(q ? `/events?search=${encodeURIComponent(q)}` : "/events");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020813]/95 shadow-[0_10px_35px_rgba(0,0,0,.18)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <NavbarBrand />
        <DesktopLinks pathname={pathname} />
        <form onSubmit={handleSearch} className="hidden h-12 min-w-[310px] max-w-md flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.09] px-4 lg:flex">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-300/80"
            placeholder="ابحث عن فعاليات، فنانين، مواقع..."
          />
          <button type="submit" className="grid h-8 w-8 place-items-center rounded-full text-slate-200 transition hover:bg-white/10 hover:text-teal-200" aria-label="بحث">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <DesktopActions user={user} onLogout={handleLogout} />
        <MobileMenuButton open={open} onToggle={() => setOpen((value) => !value)} />
      </nav>
      {open && <MobileMenu pathname={pathname} user={user} onClose={() => setOpen(false)} onLogout={handleLogout} />}
    </header>
  );
}
