import { cn } from "@/design-system/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-container px-5 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}
