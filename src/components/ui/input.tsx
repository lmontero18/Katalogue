import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "default" | "error" | "success";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", status = "default", ...props }, ref) => {
    const base = `
      w-full h-10 px-3 py-[10px]
      rounded-md border text-sm font-sans
      bg-[var(--color-pure-white)]
      placeholder:text-[var(--color-gray-400)]
      text-[var(--color-black)]
      outline-none transition
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-1
    `;

    const variants = {
      default: `
        border-[var(--color-gray-200)]
        bg-[var(--color-pure-white)]
      `,
      error: `
        border-[var(--color-error)]
        text-[var(--color-error)]
        placeholder:text-[var(--color-error)]
        bg-[var(--color-pure-white)]
      `,
      success: `
        border-[var(--color-success)]
        text-black
        placeholder:text-[var(--color-success)]
        bg-[var(--color-pure-white)]
      `,
    };

    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          base,
          variants[status],
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
