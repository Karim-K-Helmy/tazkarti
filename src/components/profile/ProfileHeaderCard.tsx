import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faEnvelope, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import type { User } from "@/types";

type ProfileHeaderCardProps = { user: User; onLogout: () => void };

export default function ProfileHeaderCard({ user, onLogout }: ProfileHeaderCardProps) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
      <div className="flex items-center gap-5">
        <div className="grid h-20 w-20 place-items-center rounded-[1.5rem] border border-teal-300/20 bg-teal-400/10 text-3xl font-black text-teal-100">{user.name.slice(0, 1)}</div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-black text-white">{user.name}</h1>
            {user.role === "admin" && <span className="inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200"><FontAwesomeIcon icon={faCrown} /> Admin</span>}
          </div>
          <p className="mt-2 flex items-center gap-2 text-slate-300"><FontAwesomeIcon icon={faEnvelope} className="text-teal-300" /> {user.email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        {user.role === "admin" && <Button href="/dashboard" variant="secondary">Dashboard</Button>}
        <Button onClick={onLogout} variant="ghost"><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Button>
      </div>
    </div>
  );
}
