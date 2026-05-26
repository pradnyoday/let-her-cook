import { cn } from "@/design-system/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  className,
}: Props) {
  return (
    <p
      className={cn(
        `
        text-base
        md:text-lg
        leading-relaxed
        text-[#5f5f5f]
        `,
        className
      )}
    >
      {children}
    </p>
  );
}