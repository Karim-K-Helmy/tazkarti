"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileContent from "@/components/profile/ProfileContent";
import ProfileGuestState from "@/components/profile/ProfileGuestState";
import ProfileLoadingState from "@/components/profile/ProfileLoadingState";
import { getCurrentUser, getUserBookings, logoutUser } from "@/lib/storage";
import type { User } from "@/types";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [bookingCount, setBookingCount] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => { const currentUser = getCurrentUser(); setUser(currentUser); setBookingCount(getUserBookings(currentUser?.email).length); setReady(true); }, []);
  const handleLogout = () => { logoutUser(); router.push("/"); };
  if (!ready) return <ProfileLoadingState />;
  if (!user?.isLoggedIn) return <ProfileGuestState />;
  return <ProfileContent user={user} bookingCount={bookingCount} onLogout={handleLogout} />;
}
