import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  inline-flex items-center justify-center rounded-md text-lg font-medium font-sans
  transition-all duration-150 ease-out
  cursor-pointer
  active:scale-95
  disabled:!scale-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-[var(--btn-primary-bg)]
          text-[var(--btn-primary-text)]
          hover:bg-[var(--btn-primary-hover)]
        `,
        secondary: `
          bg-[var(--btn-secondary-bg)]
          text-[var(--color-black)]
          border border-[var(--btn-secondary-border)]
          hover:bg-[var(--btn-secondary-hover)]
        `,
        tertiary: `
          bg-[var(--btn-tertiary-bg)]
          text-[var(--color-black)]
          border border-[var(--btn-tertiary-border)]
          hover:bg-[var(--btn-tertiary-hover)]
        `,
        google: `
          bg-[var(--btn-google-bg)]
          hover:bg-[var(--btn-google-hover)]
          text-white
        `,
      },
      size: {
        default:
          "py-4 px-16 text-base md:py-4 md:px-[120px] md:text-lg md:justify-center whitespace-nowrap text-center",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size }),
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
