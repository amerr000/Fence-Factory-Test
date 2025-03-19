
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  className, 
  centered = false 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-2 mb-8",
      centered && "text-center",
      className
    )}>
      <div className="inline-flex items-center">
        <div className="h-1 w-10 rounded-full bg-primary mr-2" />
        <h2 className="text-3xl font-medium text-balance">{title}</h2>
        <div className="h-1 w-10 rounded-full bg-primary ml-2" />
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
