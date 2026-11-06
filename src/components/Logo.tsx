import { cn } from "../lib/cn";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <a
      href="#top"
      aria-label="AirLink home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-offset-4",
        className,
      )}
    >
      <img
        src={`${import.meta.env.BASE_URL}app-icon.png`}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 rounded-[9px] shadow-[0_2px_6px_rgba(14,80,36,0.24)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5 dark:ring-white/10"
      />
      {showWordmark ? (
        <span className="flex flex-col text-left">
          <span className="text-[16px] font-semibold leading-none tracking-[-0.025em] text-ink">
            AirLink
          </span>
          <span className="mt-1 text-[8.5px] font-semibold uppercase leading-none tracking-[0.16em] text-ink-tertiary">
            for macOS
          </span>
        </span>
      ) : null}
    </a>
  );
}
