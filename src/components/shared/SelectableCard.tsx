import React from "react";
import { cn } from "@/lib/utils";

interface SelectableCardProps {
  label: string;
  emoji: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export const SelectableCard: React.FC<SelectableCardProps> = ({
  label,
  emoji,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className="relative block w-full">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div
        className={cn(
          `
      group flex items-center justify-between w-full rounded-lg px-5 py-4 cursor-pointer
      border text-md font-semibold text-[var(--color-black)]
      transition-all duration-200 ease-in-out
      peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-focus)] peer-focus-visible:ring-offset-2
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
        `,
          disabled &&
            "opacity-50 pointer-events-none cursor-not-allowed select-none"
        )}
      >
        <span>{label}</span>
        <span className="text-xl">{emoji}</span>
      </div>
    </label>
  );
};
