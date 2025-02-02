import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Ensure `cn` is correctly defined in your utils

// Define button variants using `cva`
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "relative bg-gray-100 border border-primary/50 text-primary shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-primary/25 hover:scale-105 hover:border-primary transition-all active:scale-95 ",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define the props for the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Allows for using `Slot` for flexibility (e.g., wrapping links)
}

// Define and export the Button component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Use Slot if `asChild` is true, otherwise render a button
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)} // Combine classes
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"; 
