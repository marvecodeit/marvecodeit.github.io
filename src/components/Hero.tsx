import { ArrowDown, ShieldCheck, Sparkles } from "lucide-react";
import { RELEASES_URL } from "../lib/constants";
import { AppMockup } from "./AppMockup";
import { ButtonLink } from "./ButtonLink";
import { AppleMark, GitHubMark } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_70%_55%_at_50%_-8%,color-mix(in_srgb,var(--brand)_14%,transparent),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="dot-grid mask-radial pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1200px] -translate-x-1/2 border-x border-hairline/50 lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="animate-fade-in">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-hairline bg-surface/70 px-3.5 py-1.5 text-[11.5px] font-medium text-ink-secondary shadow-[0_1px_1px_rgba(16,35,26,0.03)] backdrop-blur">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-brand" strokeWidth={2} />
                Native macOS utility
              </span>
              <span className="hidden items-center gap-x-2.5 min-[360px]:inline-flex">
                <span
                  aria-hidden="true"
                  className="h-3 w-px bg-hairline-strong"
                />
                <span className="text-ink-tertiary">
                  Captive portals, handled
                </span>
              </span>
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mx-auto mt-6 max-w-[1020px] animate-hero-rise text-balance text-[42px] font-semibold leading-[0.98] tracking-[-0.05em] text-ink sm:text-[64px] lg:text-[78px] xl:text-[84px]"
            style={{ animationDelay: "60ms" }}
          >
            The missing link between{" "}
            <span className="text-brand">Wi-Fi</span> and the internet.
          </h1>

          <p
            className="mx-auto mt-5 max-w-[660px] animate-hero-rise text-balance text-[16px] leading-relaxed text-ink-secondary sm:mt-6 sm:text-[18px]"
            style={{ animationDelay: "140ms" }}
          >
            AirLink detects captive portals, opens the network&rsquo;s real
            sign-in page in a secure built-in browser, and verifies your Mac
            actually has internet access &mdash; not just a Wi-Fi icon.
          </p>

          <div
            className="mt-7 flex animate-hero-rise flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <ButtonLink
              href={RELEASES_URL}
              size="lg"
              icon={<AppleMark className="h-[17px] w-[17px]" />}
            >
              Download for macOS
            </ButtonLink>
            <ButtonLink
              href="#features"
              variant="secondary"
              size="lg"
              trailingIcon={<ArrowDown className="h-4 w-4" />}
            >
              View features
            </ButtonLink>
          </div>

          <div
            className="mt-5 flex animate-fade-in flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11.5px] font-medium text-ink-tertiary"
            style={{ animationDelay: "320ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <AppleMark className="h-3 w-3 text-ink-secondary" />
              macOS 12 or later
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand" />
              No account required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GitHubMark className="h-3 w-3 text-ink-secondary" />
              Open source
            </span>
          </div>
        </div>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand)_20%,transparent),transparent_66%)] blur-3xl"
          />
          <div
            className="relative animate-hero-rise px-0 sm:px-2 lg:px-6"
            style={{ animationDelay: "300ms" }}
          >
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
