import { ArrowUpRight, EyeOff, KeyRound, ShieldCheck } from "lucide-react";
import { REPO_URL } from "../lib/constants";
import { GitHubMark } from "./Icons";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "No account, no cloud",
    copy: "AirLink is a local utility. There is no account, no cloud backend, and nothing to sign up for.",
  },
  {
    icon: EyeOff,
    title: "No analytics, no telemetry",
    copy: "AirLink has no analytics service and no telemetry. Network details are read locally and stay on your Mac.",
  },
  {
    icon: KeyRound,
    title: "Credentials in Keychain",
    copy: "Passwords stay in the macOS Keychain. Usernames are saved only with your explicit consent.",
  },
];

export function Privacy() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="relative border-y border-hairline bg-canvas-deep py-16 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand">
            <span aria-hidden="true" className="h-px w-5 bg-brand/60" />
            Private by design
          </p>
          <h2
            id="privacy-heading"
            className="mt-3 max-w-md text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[38px]"
          >
            Your network stays your business.
          </h2>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink-secondary">
            AirLink was built as a local tool, not a service. It reads the
            connection it needs, does its job, and gets out of the way.
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-brand-ink transition-colors hover:text-brand"
          >
            <GitHubMark className="h-3.5 w-3.5" />
            Read the source on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="rounded-2xl border border-hairline bg-surface/70 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/15 bg-brand-soft text-brand">
                  <Icon className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <h3 className="mt-3 text-[13px] font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-secondary">
                  {item.copy}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
