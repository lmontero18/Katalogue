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
        `,
        google: `
          bg-[var(--btn-google-bg)]
          text-white
        `,
      },
      size: {
        default: "h-10 px-6",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
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
