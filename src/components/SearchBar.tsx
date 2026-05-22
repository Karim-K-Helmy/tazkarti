"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  light?: boolean;
};

export default function SearchBar({ value, onChange, placeholder = "ابحث عن فعالية أو مدينة أو مكان..." }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-200" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="input-base pr-11"
        type="search"
      />
    </div>
  );
}
