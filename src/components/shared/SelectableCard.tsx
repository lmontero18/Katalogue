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
        `
        flex items-center justify-between w-full rounded-lg px-5 py-4 cursor-pointer
        border text-md font-semibold
        text-[var(--color-black)]

        transition-all duration-200 ease-in-out
        `,
        checked
          ? `
            bg-[var(--card-bg)]
            border-[var(--card-border-active)]
            hover:border-[var(--card-border-active-hover)]
            shadow-sm
          `
          : `
            bg-[var(--color-white)]
            border-[var(--card-border)]
            hover:bg-[var(--color-gray-100)]
            hover:border-[var(--card-border-hover)]
          `
      )}
    >
      <span>{label}</span>
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
