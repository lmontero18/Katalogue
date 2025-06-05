import React from "react";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  icon?: React.ReactNode;
  checked: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({
  label,
  icon,
  checked,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `
        flex items-center gap-2 rounded-full px-4 py-2 text-sm font-normal
        transition-all duration-200 ease-in-out
        border border-transparent cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2
        `,
        checked
          ? `
            bg-[var(--checkbox-active)]
            text-[var(--color-black)]
            hover:bg-[var(--checkbox-active-hover)]
          `
          : `
            bg-[var(--checkbox-bg)]
            text-[var(--color-black)]
            hover:bg-[var(--checkbox-hover)]
          `,
        disabled &&
          "opacity-50 pointer-events-none cursor-not-allowed select-none"
      )}
    >
      {icon && <span className="text-md">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};
