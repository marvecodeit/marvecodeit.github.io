import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, RELEASES_URL, SECTION_IDS } from "../lib/constants";
import { cn } from "../lib/cn";
import { ButtonLink } from "./ButtonLink";
import { AppleMark } from "./Icons";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 220) setActive("");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.4] },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "glass border-hairline shadow-[0_1px_2px_rgba(16,35,26,0.04)]"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                  isActive
                    ? "bg-surface-muted text-ink"
                    : "text-ink-secondary hover:bg-surface-muted/70 hover:text-ink",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden sm:inline-flex">
            <ButtonLink
              href={RELEASES_URL}
              size="sm"
              icon={<AppleMark className="h-3.5 w-3.5" />}
            >
              Download
            </ButtonLink>
          </span>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface/70 text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[68px] z-40 cursor-default bg-ink/20 backdrop-blur-[2px] lg:hidden"
          />
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 border-b border-hairline bg-canvas/98 px-5 pb-5 pt-3 shadow-float backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-colors",
                    active === link.href.slice(1)
                      ? "bg-surface-muted text-ink"
                      : "text-ink-secondary hover:bg-surface-muted hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-brand transition-opacity",
                      active === link.href.slice(1)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </a>
              ))}
            </nav>
            <div className="mt-3 border-t border-hairline pt-4">
              <ButtonLink
                href={RELEASES_URL}
                className="w-full"
                icon={<AppleMark className="h-4 w-4" />}
              >
                Download for macOS
              </ButtonLink>
              <p className="mt-3 text-center text-[11.5px] text-ink-tertiary">
                macOS 12 or later · Free and open source
              </p>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
