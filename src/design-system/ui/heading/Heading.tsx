import { cn } from "@/design-system/utils/cn";

type HeadingSize = "sm" | "md" | "lg";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: HeadingSize;
}

export default function Heading({
  children,
  className,
  size = "md",
}: Props) {
  const sizeMap: Record<HeadingSize, string> = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-5xl",
    lg: "text-4xl md:text-6xl",
  };

  return (
    <h2
      className={cn(
        `
        font-[family-name:var(--font-playfair)]
        font-bold
        leading-tight
        text-[#1f5c3f]
        ${sizeMap[size]}
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}