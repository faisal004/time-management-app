import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "bg-[var(--input-bg,white)] border border-[var(--input-border,#d1d5db)] text-[var(--input-text,#171717)] placeholder:text-[var(--input-placeholder,#9ca3af)] focus-visible:border-[var(--input-focus,#2563eb)] focus-visible:ring-[var(--input-focus-ring,#2563eb)]/30 focus-visible:ring-[3px] aria-invalid:ring-[var(--input-error,#dc2626)]/20 dark:aria-invalid:ring-[var(--input-error-dark,#ef4444)]/40 aria-invalid:border-[var(--input-error,#dc2626)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
