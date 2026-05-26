import { ButtonHTMLAttributes } from "react";
import { cn } from "@/design-system/utils/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        `
        h-12
        px-6
        rounded-full
        font-medium
        transition-all
        duration-300
        text-sm
        md:text-base
        `,

        variant === "primary" &&
          `
          bg-[#1f5c3f]
          text-white
          hover:bg-[#174530]
          shadow-lg
          `,

        variant === "secondary" &&
          `
          bg-[#ff6b00]
          text-white
          hover:opacity-90
          `,

        variant === "outline" &&
          `
          border
          border-[#1f5c3f]
          text-[#1f5c3f]
          hover:bg-[#1f5c3f]
          hover:text-white
          `,

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}