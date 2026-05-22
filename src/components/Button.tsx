import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-teal-400 text-slate-950 hover:bg-teal-300 shadow-glow border border-teal-300/60",
  secondary:
    "bg-white/[0.08] text-white hover:bg-white/[0.12] border border-white/10",
  ghost: "bg-transparent text-slate-200 hover:bg-white/[0.08] border border-white/10"
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  fullWidth?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
