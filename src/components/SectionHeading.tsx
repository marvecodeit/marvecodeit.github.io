import { cn } from "../lib/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
  className,
  descriptionClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleId?: string;
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand",
          align === "center" && "justify-center",
        )}
      >
        <span
          aria-hidden="true"
          className="h-px w-5 bg-brand/60"
        />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-3 text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-[42px] lg:text-[46px]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-balance text-[15px] leading-relaxed text-ink-secondary sm:text-[16px]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
