import type { ElementType, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  icon?: ElementType;
};

export default function Card({ children, className = "", icon: Icon }: CardProps) {
  return (
    <div
      className={`group rounded-[24px] border border-line bg-panel p-6 shadow-premium backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-parchment/[0.095] ${className}`}
    >
      {Icon ? (
        <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold shadow-glow">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </div>
      ) : null}
      {children}
    </div>
  );
}
