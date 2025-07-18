import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--btn-blue,#1C64F2)] focus-visible:ring-[var(--btn-blue,#1C64F2)]/30 focus-visible:ring-[3px] aria-invalid:ring-[#dc2626]/20 dark:aria-invalid:ring-[#ef4444]/40 aria-invalid:border-[#dc2626]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--btn-blue,#1C64F2)] text-white shadow-xs hover:bg-[color-mix(in_srgb,var(--btn-blue,#1C64F2)_80%,black_20%)]",
        destructive:
          "bg-[#dc2626] text-white shadow-xs hover:bg-[#b91c1c] focus-visible:ring-[#f87171]/20 dark:focus-visible:ring-[#ef4444]/40 dark:bg-[#b91c1c]",
        outline:
          "border border-[var(--btn-blue,#1C64F2)] bg-white text-[var(--btn-blue,#1C64F2)] shadow-xs hover:bg-[#eff6ff] hover:text-[color-mix(in_srgb,var(--btn-blue,#1C64F2)_80%,black_20%)] dark:bg-[#1e293b] dark:border-[var(--btn-blue,#1C64F2)] dark:hover:bg-[#1e40af] dark:hover:text-white",
        secondary:
          "bg-[#f3f4f6] text-[#1f2937] shadow-xs hover:bg-[#e5e7eb]",
        ghost:
          "hover:bg-[#f1f5f9] hover:text-[var(--btn-blue,#1C64F2)] dark:hover:bg-[#334155] dark:hover:text-[#60a5fa]",
        link: "text-[var(--btn-blue,#1C64F2)] underline-offset-4 hover:underline hover:text-[color-mix(in_srgb,var(--btn-blue,#1C64F2)_80%,black_20%)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
