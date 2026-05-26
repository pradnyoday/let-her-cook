import { HTMLAttributes } from "react";
import { cn } from "@/design-system/utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        `
        bg-white
        border
        border-[#ebe3d9]
        rounded-[28px]
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}