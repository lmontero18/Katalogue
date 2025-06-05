import React from "react";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  icon?: React.ReactNode;
  checked: boolean;
  onClick: () => void;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({
  label,
  icon,
  checked,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        `
        flex items-center gap-2 rounded-full px-4 py-2 text-sm font-normal transition-colors
        border border-transparent
      `,
        checked
          ? `
            bg-[var(--color-checkbox-active)]
            text-black
            hover:bg-[var(--color-checkbox-active-hover)]
          `
          : `
            bg-[var(--color-checkbox-bg)]
            text-[var(--color-black)]
            hover:bg-[var(--color-checkbox-hover)]
          `
      )}
    >
      <span className="text-md">{icon}</span>
      <span>{label}</span>
    </button>
  );
};
