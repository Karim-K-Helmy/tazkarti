import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <label className="block space-y-2 text-right">
      {label && <span className="text-sm font-semibold text-slate-200">{label}</span>}
      <input className={`input-base ${className}`} {...props} />
      {error && <span className="block text-xs text-rose-300">{error}</span>}
    </label>
  );
}
