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
        border-color-gray-200
        bg-white
        transition-colors

        hover:bg-color-checkbox-hover
        active:bg-color-checkbox-active

        data-[state=checked]:bg-color-orange
        data-[state=checked]:text-white
        data-[state=checked]:border-color-orange

        focus-visible:ring-[3px]
        focus-visible:border-color-focus
        focus-visible:ring-color-focus/50

        aria-invalid:border-color-error
        aria-invalid:ring-color-error/30

        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
