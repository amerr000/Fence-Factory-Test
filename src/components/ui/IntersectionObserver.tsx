
import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IntersectionObserverProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  disabled?: boolean;
}

export default function IntersectionObserver({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  disabled = false,
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [disabled, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        {
          'opacity-0 translate-y-10': !isVisible && !disabled,
          'opacity-100 translate-y-0': isVisible || disabled,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
