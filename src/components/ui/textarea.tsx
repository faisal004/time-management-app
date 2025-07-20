import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full rounded-md px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none resize-none",
        "bg-[var(--input-bg,white)] border border-[var(--input-border,#d1d5db)] text-[var(--input-text,#171717)] placeholder:text-[var(--input-placeholder,#9ca3af)] focus-visible:border-[var(--input-focus,#2563eb)] focus-visible:ring-[var(--input-focus-ring,#2563eb)]/30 focus-visible:ring-[3px] aria-invalid:ring-[var(--input-error,#dc2626)]/20 dark:aria-invalid:ring-[var(--input-error-dark,#ef4444)]/40 aria-invalid:border-[var(--input-error,#dc2626)]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
