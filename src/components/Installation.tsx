import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Folder,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { ISSUES_URL, RELEASES_URL } from "../lib/constants";
import { ButtonLink } from "./ButtonLink";
import { AppleMark } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const requirements = [
  {
    icon: AppleMark,
    label: "macOS 12 Monterey or later",
    kind: "apple" as const,
  },
  {
    icon: Wifi,
    label: "A Wi-Fi network to sign in to",
    kind: "lucide" as const,
  },
  {
    icon: ShieldCheck,
    label: "No account required",
    kind: "lucide" as const,
  },
];

const steps = [
  {
    title: "Check your macOS version",
    copy: "AirLink requires macOS 12 Monterey or later. Open the Apple menu, then About This Mac, to check.",
  },
  {
    title: "Download the latest release",
    copy: "Use the download button on this page. It always points to the newest published GitHub Release.",
  },
  {
    title: "Open the downloaded DMG",
    copy: "Double-click the disk image to mount it. A Finder-style window opens with AirLink and your Applications folder.",
  },
  {
    title: "Drag AirLink into Applications",
    copy: "Move the app into Applications. That is the recommended install location.",
    visual: true,
  },
  {
    title: "Launch and follow the instructions",
    copy: "Open AirLink from Applications or Spotlight, then follow the on-screen guidance. Join your Wi-Fi when you are ready.",
  },
];

function DmgMockup() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-hairline bg-surface-muted/40">
      <div className="flex h-7 items-center gap-1.5 border-b border-hairline bg-surface-muted px-3">
        <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
        <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
        <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
        <span className="mx-auto pr-8 text-[8.5px] font-medium text-ink-tertiary">
          AirLink
        </span>
      </div>
      <div className="flex items-center justify-center gap-7 px-4 py-5">
        <div className="text-center">
          <img
            src={`${import.meta.env.BASE_URL}app-icon.png`}
            alt=""
            className="mx-auto h-12 w-12 rounded-[12px] shadow-[0_4px_10px_rgba(14,80,36,0.22)] ring-1 ring-black/5 dark:ring-white/10"
          />
          <p className="mt-2 text-[9px] font-medium text-ink">AirLink</p>
        </div>
        <ArrowRight className="h-4 w-4 text-ink-tertiary" strokeWidth={1.7} />
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-[12px] border border-info/15 bg-info-soft text-info">
            <Folder
              className="h-6 w-6"
              strokeWidth={1.6}
              fill="currentColor"
              fillOpacity={0.14}
            />
          </span>
          <p className="mt-2 text-[9px] font-medium text-ink">Applications</p>
        </div>
      </div>
      <p className="border-t border-hairline bg-surface/60 py-2 text-center text-[8.5px] text-ink-tertiary">
        Drag AirLink into Applications
      </p>
    </div>
  );
}

export function Installation() {
  return (
    <section
      id="installation"
      aria-labelledby="installation-heading"
      className="relative border-y border-hairline bg-canvas-deep py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Installation"
            title="Installed in about a minute."
            titleId="installation-heading"
            description="AirLink ships as a standard macOS disk image. No account, no package manager, and no setup wizard maze."
          />

          <Reveal className="mt-8 overflow-hidden rounded-2xl border border-brand/20 bg-surface shadow-card">
            <div className="border-b border-hairline bg-[linear-gradient(135deg,var(--brand-soft),var(--surface)_70%)] p-5">
              <div className="flex items-center gap-3">
                <img
                  src={`${import.meta.env.BASE_URL}app-icon.png`}
                  alt="AirLink app icon"
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] rounded-[13px] shadow-[0_4px_12px_rgba(14,80,36,0.22)] ring-1 ring-black/5 dark:ring-white/10"
                />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-ink/70">
                    Latest release
                  </p>
                  <h3 className="mt-0.5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                    AirLink for macOS
                  </h3>
                  <p className="mt-0.5 text-[11.5px] text-ink-secondary">
                    Download the newest published build from GitHub Releases.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <ButtonLink
                href={RELEASES_URL}
                className="w-full"
                icon={<AppleMark className="h-4 w-4" />}
                trailingIcon={<Download className="h-4 w-4" />}
              >
                Download for macOS
              </ButtonLink>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10.5px] text-ink-tertiary">
                <span className="inline-flex items-center gap-1.5">
                  <AppleMark className="h-3 w-3" />
                  macOS 12+
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                  No account
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand" />
                  Free and open source
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="mt-4 rounded-2xl border border-hairline bg-surface p-5"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
              Before you start
            </h3>
            <ul className="mt-3 space-y-2.5">
              {requirements.map((requirement) => {
                const Icon = requirement.icon;
                return (
                  <li
                    key={requirement.label}
                    className="flex items-center gap-2.5 text-[12.5px] text-ink-secondary"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-hairline bg-surface-muted text-ink-tertiary">
                      <Icon
                        className={
                          requirement.kind === "apple"
                            ? "h-3 w-3"
                            : "h-3.5 w-3.5"
                        }
                      />
                    </span>
                    {requirement.label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal
            delay={50}
            className="rounded-2xl border border-hairline bg-surface p-5 shadow-card sm:p-7"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
                Installation steps
              </h3>
              <span className="rounded-full border border-hairline bg-surface-muted px-2 py-0.5 text-[9px] font-medium text-ink-tertiary">
                About a minute
              </span>
            </div>

            <ol className="mt-5">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative flex gap-4 pb-6 last:pb-0"
                >
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[13px] top-8 h-[calc(100%-1.75rem)] w-px bg-hairline"
                    />
                  ) : null}
                  <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-soft text-[10px] font-semibold text-brand-ink">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h4 className="text-[13.5px] font-semibold tracking-[-0.01em] text-ink">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ink-secondary">
                      {step.copy}
                    </p>
                    {step.visual ? <DmgMockup /> : null}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-4 flex flex-col gap-2 rounded-xl border border-hairline bg-surface/60 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[11.5px] text-ink-secondary">
              Install trouble or a question? The issue tracker is the fastest
              way to reach the project.
            </p>
            <a
              href={ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-[11.5px] font-semibold text-brand-ink transition-colors hover:text-brand"
            >
              Open an issue
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
