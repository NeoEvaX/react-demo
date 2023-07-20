import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center text-semibold text-sm leading-4 font-medium transition-colors ",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-base font-medium text-white hover:bg-blue-700 tracking-wide",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-white hover:text-white text-blue-600 border border-blue-600 hover:bg-blue-600",
        subtle:
          "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 dark:bg-indigo-700 dark:text-indigo-100",
        ghost:
          "bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-800 dark:text-indigo-100 dark:hover:text-indigo-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-indigo-900 dark:text-indigo-100 hover:bg-transparent dark:hover:bg-transparent",
        greyWhite: "bg-gray-600 font-medium tracking-wide text-white text-base",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-5 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
