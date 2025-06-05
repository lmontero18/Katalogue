"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        `
        peer
        size-4 shrink-0
        rounded-[4px] border shadow-xs outline-none
        bg-[var(--color-white)]
        border-black
        transition-colors

        hover:bg-[var(--color-checkbox-hover)]

        data-[state=checked]:bg-[var(--color-orange)]
        data-[state=checked]:border-black
        data-[state=checked]:text-[var(--color-white)]
        data-[state=checked]:hover:bg-[var(--color-checkbox-active)]

        focus-visible:ring-[3px]
        focus-visible:border-[var(--color-focus)]
        focus-visible:ring-[var(--color-focus)]/50

        aria-invalid:border-[var(--color-error)]
        aria-invalid:ring-[var(--color-error)]/30

        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center text-black justify-center transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
