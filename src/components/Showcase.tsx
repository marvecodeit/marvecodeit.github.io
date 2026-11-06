import { ArrowUpRight, Route, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { README_URL } from "../lib/constants";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    icon: Route,
    title: "Connection path",
    copy: "Wi-Fi, portal, and internet status at a glance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Network details",
    copy: "SSID, security, IP, gateway, DNS, channel, and signal.",
  },
  {
    icon: ShieldCheck,
    title: "Probe history",
    copy: "See what passed, redirected, or failed — and when.",
  },
];

export function Showcase() {
  return (
    <section
      id="app-preview"
      aria-labelledby="app-preview-heading"
      className="relative overflow-hidden border-t border-hairline py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_68%)] blur-2xl"
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="The app"
            title="Not a spinner. A real diagnosis."
            titleId="app-preview-heading"
            description="The overview shows the Wi-Fi link, the captive portal, and the verified internet path in one place — with the details you need when something goes wrong."
          />

          <div className="mt-7 space-y-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-brand/15 bg-brand-soft text-brand">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-ink">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-ink-secondary">
                      {point.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={README_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-ink transition-colors hover:text-brand"
          >
            Read the documentation
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <Reveal delay={80} className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-8 h-[70%] rounded-full bg-[color-mix(in_srgb,var(--brand)_16%,transparent)] blur-3xl"
          />
          <figure className="relative">
            <span className="absolute -top-3 left-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[9px] font-semibold text-on-brand shadow-float">
              <span className="h-1 w-1 rounded-full bg-on-brand/80" />
              Actual app window
            </span>
            <div className="overflow-hidden rounded-[18px] border border-hairline-strong bg-surface shadow-stage ring-1 ring-black/[0.03] dark:ring-white/[0.04]">
              <div className="flex h-9 items-center gap-2 border-b border-hairline bg-surface-muted/80 px-4">
                <div className="flex items-center gap-[6px]" aria-hidden="true">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
                </div>
                <p className="flex-1 text-center text-[10px] font-medium text-ink-tertiary">
                  AirLink — Overview
                </p>
                <div className="w-[39px]" />
              </div>
              <img
                src={`${import.meta.env.BASE_URL}app-overview-1080.jpg`}
                srcSet={`${import.meta.env.BASE_URL}app-overview-1080.jpg 1080w, ${import.meta.env.BASE_URL}app-overview-2160.jpg 2160w`}
                sizes="(min-width: 1024px) 660px, 100vw"
                width={2160}
                height={1221}
                loading="lazy"
                decoding="async"
                alt="AirLink’s actual overview window showing a verified internet connection, connection path, network details, connectivity checks, and recent activity."
                className="block w-full"
              />
            </div>
            <figcaption className="mt-3 text-center text-[10px] text-ink-tertiary">
              The AirLink overview after a verified connection.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
