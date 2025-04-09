// src/components/wrapper/NoScrollWrapper.tsx
import React, { useRef, useEffect } from "react";

interface NoScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * NoScrollWrapper prevents mouse wheel and touchmove scrolling by attaching
 * non-passive event listeners. The component accepts a `className` prop so that
 * you can pass a CSS module class (or any class) with associated styles.
 */
const NoScrollWrapper: React.FC<NoScrollWrapperProps> = ({
  children,
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleEvent = (e: Event) => {
      e.preventDefault();
    };

    container.addEventListener("wheel", handleEvent, { passive: false });
    container.addEventListener("touchmove", handleEvent, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleEvent);
      container.removeEventListener("touchmove", handleEvent);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflowY: "auto", scrollBehavior: "smooth", ...style }}
    >
      {children}
    </div>
  );
};

export default NoScrollWrapper;
