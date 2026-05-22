import ProfileHeaderCard from "@/components/profile/ProfileHeaderCard";
import ProfileStatsGrid from "@/components/profile/ProfileStatsGrid";
import type { User } from "@/types";

type ProfileContentProps = { user: User; bookingCount: number; onLogout: () => void };

export default function ProfileContent({ user, bookingCount, onLogout }: ProfileContentProps) {
  return <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"><div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft md:p-10"><ProfileHeaderCard user={user} onLogout={onLogout} /><ProfileStatsGrid bookingCount={bookingCount} /></div></section>;
}
