import { cn } from "@/design-system/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        className
      )}
    >
      {children}
    </section>
  );
}