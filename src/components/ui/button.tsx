import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  inline-flex items-center justify-center rounded-md font-sans text-md font-medium 
  transition-transform transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  active:scale-95
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-[var(--color-black)]
          text-white
          hover:bg-[var(--color-button-hover)] 
          transition-colors
        `,
        secondary: `
          bg-[var(--color-pure-white)]
          text-[var(--color-black)]
          border border-[var(--color-black)]
        `,
        tertiary: `
          bg-[var(--color-gray-200)]
          text-[var(--color-black)]
        `,
        google: `
          bg-[var(--color-black)]
          text-white
          font-medium
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
