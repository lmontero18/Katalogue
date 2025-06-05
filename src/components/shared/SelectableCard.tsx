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
        flex items-center justify-between w-full rounded-lg px-5 py-4 cursor-pointer transition border
        text-md font-semibold text-black
        `,
        checked
          ? `
              bg-[var(--color-checkbox-bg)]
              border-1 border-[var(--color-orange)]
              hover:bg-[var(--color-checkbox-hover)]
            `
          : `
              bg-[var(--color-white)]
              border-[var(--color-gray-200)]
              hover:bg-[var(--color-gray-100)]
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
