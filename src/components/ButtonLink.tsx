import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverseGhost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-on-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_2px_rgba(16,35,26,0.18)] hover:bg-brand-dark dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
  secondary:
    "border border-hairline-strong bg-surface/80 text-ink shadow-[0_1px_1px_rgba(16,35,26,0.03)] hover:border-ink-tertiary/45 hover:bg-surface",
  ghost: "text-ink-secondary hover:bg-surface-muted hover:text-ink",
  inverse:
    "bg-white text-[#0b3d1f] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_10px_rgba(0,0,0,0.18)] hover:bg-white/90",
  inverseGhost:
    "border border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/[0.16]",
};

const sizes: Record<Size, string> = {
  sm: "min-h-8 px-3.5 py-2 text-[12.5px]",
  md: "min-h-10 px-5 py-2.5 text-[13.5px]",
  lg: "min-h-12 px-6 py-3.5 text-[15px]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  external?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  trailingIcon,
  external,
  className,
  ...rest
}: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition duration-200 active:scale-[0.985]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      {...rest}
    >
      {icon ? (
        <span className="shrink-0 transition-transform duration-200 group-hover:scale-105">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
      {trailingIcon ? (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      ) : null}
    </a>
  );
}
