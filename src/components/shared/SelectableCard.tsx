import React from "react";
import { cn } from "@/lib/utils";

interface SelectableCardProps {
  label: string;
  emoji: string;
  checked: boolean;
  onChange: () => void;
}

export const SelectableCard: React.FC<SelectableCardProps> = ({
  label,
  emoji,
  checked,
  onChange,
}) => {
  return (
    <label
      className={cn(
        "flex items-center justify-between w-full rounded-lg border px-5 py-4 cursor-pointer transition",
        checked
          ? "bg-[#FFF2E1] border-1 border-[var(--color-orange)]"
          : "bg-white border-[var(--color-gray-200)]"
      )}
    >
      <span className="text-md font-semibold text-black">{label}</span>
      <span className="text-xl">{emoji}</span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};
