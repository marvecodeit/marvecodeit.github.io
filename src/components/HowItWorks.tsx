import { Globe2, ShieldAlert, ShieldCheck, Wifi, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps: {
  icon: LucideIcon;
  title: string;
  copy: string;
  tag: string;
}[] = [
  {
    icon: Wifi,
    title: "Connect to a Wi-Fi network",
    copy: "Join the network as usual. AirLink reads the active link and starts a fresh connectivity check.",
    tag: "CoreWLAN",
  },
  {
    icon: ShieldAlert,
    title: "AirLink detects the portal",
    copy: "HTTP interception probes separate a sign-in page from DNS failure, network loss, or a clean connection.",
    tag: "HTTP + HTTPS probes",
  },
  {
    icon: Globe2,
    title: "Authenticate in AirLink",
    copy: "The network's own sign-in page opens in an integrated WebKit browser with cookies, redirects, and forms intact.",
    tag: "WKWebView",
  },
  {
    icon: ShieldCheck,
    title: "Verify the internet",
    copy: "Fresh HTTPS probes over your Mac's own network path confirm system-wide access before AirLink says you're online.",
    tag: "HTTPS verification",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From Wi-Fi to the wider internet, in four steps."
          titleId="how-it-works-heading"
          align="center"
          description="No guessing, no failed sign-in loops, and no “it says connected but nothing loads.”"
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[6%] right-[6%] top-[22px] hidden h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent lg:block"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal as="li" key={step.title} delay={index * 70}>
                  <div className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-brand shadow-card">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[8px] font-semibold text-on-brand">
                      {index + 1}
                    </span>
                  </div>
                  <p className="mt-5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-tertiary">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 text-[15px] font-semibold tracking-[-0.015em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink-secondary">
                    {step.copy}
                  </p>
                  <span className="mt-4 inline-flex rounded-md border border-hairline bg-surface-muted px-1.5 py-0.5 font-mono text-[8.5px] text-ink-tertiary">
                    {step.tag}
                  </span>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-12 flex flex-col gap-4 rounded-2xl border border-brand/20 bg-brand-soft/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-on-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
              <Globe2 className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-ink/70">
                When it all works
              </p>
              <p className="mt-0.5 text-[14.5px] font-semibold tracking-[-0.015em] text-ink">
                “Internet available” &mdash; and it is actually true.
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-surface px-3 py-1.5 text-[10.5px] font-medium text-brand-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Verified with a fresh HTTPS probe
          </span>
        </Reveal>
      </div>
    </section>
  );
}
