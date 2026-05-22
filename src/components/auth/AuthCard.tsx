import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  description: string;
  maxWidth?: string;
  standalone?: boolean;
  children: ReactNode;
};

export default function AuthCard({ title, description, maxWidth = "max-w-md", standalone = true, children }: AuthCardProps) {
  const card = (
    <div className={`w-full ${maxWidth} rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft md:p-8`}>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black text-white">{title}</h1>
        <p className="mt-3 text-slate-300">{description}</p>
      </div>
      {children}
    </div>
  );

  if (!standalone) return card;

  return <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl place-items-center px-4 py-14 sm:px-6 lg:px-8">{card}</section>;
}
