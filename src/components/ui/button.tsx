import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  inline-flex items-center justify-center rounded-md text-md font-medium font-sans
  transition-colors transition-transform duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  active:scale-95 cursor-pointer
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
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
