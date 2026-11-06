import {
  ArrowRight,
  Check,
  Clock3,
  Globe2,
  LockKeyhole,
  MonitorSmartphone,
  RotateCw,
  ShieldAlert,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SignalBars } from "./Icons";

function FeatureCard({
  icon: Icon,
  title,
  children,
  visual,
  className,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal
      className={cn(
        "group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-5 shadow-card transition-colors duration-300 hover:border-hairline-strong sm:p-6",
        className,
      )}
      delay={delay}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-brand/15 bg-brand-soft text-brand transition-colors duration-300 group-hover:border-brand/25">
          <Icon className="h-[17px] w-[17px]" strokeWidth={1.9} />
        </span>
        <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-ink">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-ink-secondary">
        {children}
      </p>
      {visual ? <div className="mt-auto pt-5">{visual}</div> : null}
    </Reveal>
  );
}

function ProbeLine({
  title,
  detail,
  tone,
  icon,
}: {
  title: string;
  detail: string;
  tone: "warning" | "success" | "muted";
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-hairline bg-surface px-2.5 py-2">
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          tone === "success"
            ? "bg-brand-soft text-brand"
            : tone === "warning"
              ? "bg-warning-soft text-warning"
              : "bg-surface-muted text-ink-tertiary",
        )}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[10px] font-medium text-ink">
          {title}
        </span>
        <span className="block truncate text-[9px] text-ink-tertiary">
          {detail}
        </span>
      </span>
    </div>
  );
}

function ProbeVisual() {
  return (
    <div className="rounded-xl border border-hairline bg-surface-muted/55 p-3">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
          Probe results
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-warning/25 bg-warning-soft px-2 py-0.5 text-[9px] font-medium text-warning">
          <span className="h-1 w-1 rounded-full bg-warning" />
          Portal detected
        </span>
      </div>
      <div className="grid gap-1.5 sm:grid-cols-3">
        <ProbeLine
          title="HTTP interception"
          detail="Redirect to sign-in"
          tone="warning"
          icon={<ShieldAlert className="h-3 w-3" />}
        />
        <ProbeLine
          title="DNS resolution"
          detail="Resolved normally"
          tone="success"
          icon={<Check className="h-3 w-3" />}
        />
        <ProbeLine
          title="HTTPS internet"
          detail="Blocked until sign-in"
          tone="muted"
          icon={<Globe2 className="h-3 w-3" />}
        />
      </div>
    </div>
  );
}

function BrowserVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-hairline bg-surface">
      <div className="flex items-center gap-1.5 border-b border-hairline bg-surface-muted/70 px-2.5 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-hairline-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-hairline-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-hairline-strong" />
        <div className="ml-1.5 flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-hairline bg-surface px-2 py-1">
          <LockKeyhole className="h-2.5 w-2.5 shrink-0 text-brand" />
          <span className="truncate text-[8.5px] text-ink-secondary">
            portal.campus.edu/signin
          </span>
        </div>
        <RotateCw className="h-2.5 w-2.5 text-ink-tertiary" />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-on-brand">
            <Wifi className="h-3 w-3" />
          </span>
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
              CampusNet
            </p>
            <p className="text-[10px] font-semibold text-ink">Network sign-in</p>
          </div>
        </div>
        <div className="mt-2.5 flex h-6 items-center rounded-md border border-hairline bg-surface-muted px-2 text-[8.5px] text-ink-tertiary">
          Username
        </div>
        <div className="mt-1.5 flex h-6 items-center rounded-md border border-hairline bg-surface-muted px-2 text-[8.5px] text-ink-tertiary">
          Password
        </div>
        <div className="mt-2 flex h-6 items-center justify-center gap-1 rounded-md bg-brand text-[8.5px] font-semibold text-on-brand">
          Sign in
          <ArrowRight className="h-2.5 w-2.5" />
        </div>
      </div>
    </div>
  );
}

function WifiVisual() {
  return (
    <div className="rounded-xl border border-hairline bg-surface-muted/55 p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium text-ink">
          <Wifi className="h-3.5 w-3.5 text-brand" />
          Campus Wi-Fi
        </span>
        <SignalBars bars={4} />
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {["WPA2 Enterprise", "5 GHz", "Channel 44"].map((chip) => (
          <span
            key={chip}
            className="rounded-md border border-hairline bg-surface px-1.5 py-0.5 text-[8.5px] text-ink-tertiary"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function VerifyVisual() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-muted/55 p-3">
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-soft text-brand">
        <span className="absolute inset-0 rounded-full ring-1 ring-brand/15" />
        <ShieldCheck className="h-4 w-4" strokeWidth={1.9} />
      </span>
      <span className="min-w-0">
        <span className="block text-[8.5px] font-semibold uppercase tracking-[0.13em] text-ink-tertiary">
          System-wide access
        </span>
        <span className="mt-0.5 block text-[11.5px] font-semibold text-ink">
          HTTPS verified
        </span>
        <span className="mt-0.5 block text-[8.5px] text-ink-tertiary">
          Fresh probe over your Mac&rsquo;s network path
        </span>
      </span>
      <Check className="ml-auto h-4 w-4 shrink-0 text-brand" strokeWidth={2.4} />
    </div>
  );
}

function MonitorVisual() {
  return (
    <div className="rounded-xl border border-hairline bg-surface-muted/55 p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
          Last 6 checks
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-brand/20 bg-brand-soft px-2 py-0.5 text-[8.5px] font-medium text-brand-ink">
          <span className="h-1 w-1 animate-pulse-soft rounded-full bg-brand" />
          Monitoring
        </span>
      </div>
      <svg
        viewBox="0 0 220 46"
        className="mt-2 h-11 w-full overflow-visible"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="monitor-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[10, 22, 34].map((y) => (
          <line
            key={y}
            x1="0"
            x2="220"
            y1={y}
            y2={y}
            stroke="var(--hairline)"
            strokeWidth="1"
          />
        ))}
        <path
          d="M0 34 L36 34 L50 22 L76 22 L92 30 L120 30 L136 14 L164 14 L180 26 L220 26 L220 46 L0 46 Z"
          fill="url(#monitor-fill)"
        />
        <path
          d="M0 34 L36 34 L50 22 L76 22 L92 30 L120 30 L136 14 L164 14 L180 26 L220 26"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="136" cy="14" r="2.5" fill="var(--brand)" />
        <circle cx="220" cy="26" r="2.5" fill="var(--brand)" />
      </svg>
    </div>
  );
}

const notifications = [
  {
    icon: ShieldAlert,
    title: "Sign-in required",
    detail: "Campus Wi-Fi needs a sign-in.",
    time: "now",
    tone: "warning" as const,
  },
  {
    icon: Clock3,
    title: "Session expired",
    detail: "Your Wi-Fi session ended. Sign in again.",
    time: "12m",
    tone: "warning" as const,
  },
  {
    icon: Globe2,
    title: "Internet restored",
    detail: "AirLink verified a working connection.",
    time: "1m",
    tone: "success" as const,
  },
];

function NotificationsVisual() {
  return (
    <div className="space-y-2">
      {notifications.map((notification) => {
        const Icon = notification.icon;
        return (
          <div
            key={notification.title}
            className="flex items-center gap-2.5 rounded-xl border border-hairline bg-surface-muted/55 px-3 py-2.5 shadow-[0_1px_1px_rgba(16,35,26,0.02)]"
          >
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                notification.tone === "success"
                  ? "bg-brand-soft text-brand"
                  : "bg-warning-soft text-warning",
              )}
            >
              <Icon className="h-3 w-3" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10.5px] font-semibold text-ink">
                {notification.title}
              </span>
              <span className="block truncate text-[9px] text-ink-tertiary">
                {notification.detail}
              </span>
            </span>
            <span className="shrink-0 text-[8.5px] text-ink-tertiary">
              {notification.time}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="What AirLink does"
          title="Everything between “connected” and actually online."
          titleId="features-heading"
          description="A focused set of tools for the networks that make you sign in, expire your session, or leave you guessing whether anything is working."
        />

        <div className="mt-12 grid gap-3.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={ShieldAlert}
            title="Captive Portal Detection"
            className="md:col-span-2"
            visual={<ProbeVisual />}
          >
            HTTP interception probes and separate HTTPS internet probes
            distinguish a portal from DNS failure, network loss, or a clean
            connection.
            <span className="mt-3 block border-l-2 border-brand/25 pl-2.5 text-[11px] leading-relaxed text-ink-tertiary">
              A failed DNS lookup is not a portal. AirLink reports them
              differently.
            </span>
          </FeatureCard>

          <FeatureCard
            icon={Globe2}
            title="Integrated Authentication Browser"
            delay={60}
            visual={<BrowserVisual />}
          >
            A real WKWebView with JavaScript, cookies, redirects, forms,
            back/forward, and an editable address bar. Portal pages stay inside
            AirLink.
          </FeatureCard>

          <FeatureCard
            icon={Wifi}
            title="Smart Wi-Fi Detection"
            delay={80}
            visual={<WifiVisual />}
          >
            Reads SSID, signal, channel, band, security, IP, gateway, and DNS
            from CoreWLAN and native macOS networking data.
          </FeatureCard>

          <FeatureCard
            icon={ShieldCheck}
            title="Internet Connectivity Verification"
            delay={120}
            visual={<VerifyVisual />}
          >
            Fresh HTTPS probes over your Mac&rsquo;s own network path confirm
            system-wide access. A cookie or form submission is never accepted as
            proof.
          </FeatureCard>

          <FeatureCard
            icon={MonitorSmartphone}
            title="Connection Monitoring"
            delay={160}
            visual={<MonitorVisual />}
          >
            Checks run in the background, update the menu bar, and watch for
            portal sessions that quietly expire.
          </FeatureCard>

          <Reveal
            className="min-w-0 rounded-2xl border border-hairline bg-surface p-5 shadow-card sm:p-7 md:col-span-2 lg:col-span-3"
            delay={100}
          >
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-brand/15 bg-brand-soft text-brand">
                    <MonitorSmartphone
                      className="h-[17px] w-[17px]"
                      strokeWidth={1.9}
                    />
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-ink">
                    macOS Notifications
                  </h3>
                </div>
                <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-ink-secondary">
                  Native notifications when a portal appears, a session expires,
                  the network drops, or the internet comes back. AirLink stays
                  out of the way until something needs your attention.
                </p>
              </div>
              <NotificationsVisual />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6 flex items-start gap-3 rounded-xl border border-hairline bg-surface/60 px-4 py-3.5">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          <p className="text-[12px] leading-relaxed text-ink-secondary">
            <span className="font-semibold text-ink">
              Conservative by design.
            </span>{" "}
            If AirLink cannot verify the connection, it says so instead of
            pretending.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
