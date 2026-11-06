import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} appearance`}
      title={`Switch to ${next} appearance`}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface/70 text-ink-secondary transition-colors hover:border-hairline-strong hover:bg-surface hover:text-ink",
        className,
      )}
    >
      <span className="relative h-4 w-4" aria-hidden="true">
        <Sun
          className={cn(
            "absolute inset-0 h-4 w-4 transition-all duration-300",
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0",
          )}
          strokeWidth={1.8}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-4 w-4 transition-all duration-300",
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-50 opacity-0",
          )}
          strokeWidth={1.8}
        />
      </span>
    </button>
  );
}
