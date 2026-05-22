import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

type MobileMenuButtonProps = { open: boolean; onToggle: () => void };

export default function MobileMenuButton({ open, onToggle }: MobileMenuButtonProps) {
  return <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden" onClick={onToggle} aria-label="فتح القائمة"><FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" /></button>;
}
