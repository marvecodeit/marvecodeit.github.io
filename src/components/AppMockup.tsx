import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  LogIn,
  RadioTower,
  RefreshCw,
  RotateCw,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  User,
  Wifi,
} from "lucide-react";
import { SignalBars } from "./Icons";
import { cn } from "../lib/cn";

const trafficLights = (
  <div className="flex items-center gap-[6px]" aria-hidden="true">
    <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
    <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
    <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
  </div>
);

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Browser", icon: Globe2, active: false },
  { label: "Hotspot", icon: RadioTower, active: false },
  { label: "Settings", icon: Settings2, active: false },
];

export function AppMockup() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[1080px]"
      role="img"
      aria-label="Preview of the AirLink macOS app. The overview shows a campus Wi-Fi network that needs a sign-in, a connection path from Wi-Fi to portal to internet, a network details card, and an integrated portal browser."
    >
      <div aria-hidden="true" className="select-none">
        <div className="overflow-hidden rounded-[20px] border border-hairline-strong bg-surface shadow-stage ring-1 ring-black/[0.03] dark:ring-white/[0.04]">
          <div className="flex h-10 items-center gap-3 border-b border-hairline bg-surface-muted/80 px-4">
            {trafficLights}
            <p className="flex-1 text-center text-[10.5px] font-medium text-ink-tertiary">
              AirLink
            </p>
            <div className="w-[39px]" />
          </div>

          <div className="flex min-h-[508px] bg-canvas">
            <aside className="hidden w-[204px] shrink-0 flex-col border-r border-hairline bg-sidebar md:flex">
              <div className="flex items-center gap-2.5 px-4 pb-4 pt-4">
                <img
                  src={`${import.meta.env.BASE_URL}app-icon.png`}
                  alt=""
                  className="h-7 w-7 rounded-[8px] ring-1 ring-black/5 dark:ring-white/10"
                />
                <div>
                  <p className="text-[12px] font-semibold leading-none tracking-[-0.02em] text-ink">
                    AirLink
                  </p>
                  <p className="mt-1 text-[7.5px] font-semibold uppercase leading-none tracking-[0.16em] text-ink-tertiary">
                    marvecodeit
                  </p>
                </div>
              </div>

              <div className="px-2.5">
                <p className="mb-2 px-2.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-ink-tertiary">
                  Workspace
                </p>
                <div className="space-y-0.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={cn(
                          "flex h-8 items-center gap-2.5 rounded-[8px] px-2.5 text-[11.5px] font-medium",
                          item.active
                            ? "bg-brand-soft text-brand-ink ring-1 ring-inset ring-brand/10"
                            : "text-ink-secondary",
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-3.5 w-3.5",
                            item.active ? "text-brand" : "text-ink-tertiary",
                          )}
                          strokeWidth={item.active ? 2.1 : 1.8}
                        />
                        <span>{item.label}</span>
                        {item.active ? (
                          <span className="ml-auto h-1 w-1 rounded-full bg-brand/70" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto p-2.5 pb-3">
                <div className="rounded-[10px] border border-hairline bg-surface p-2.5 shadow-[0_1px_1px_rgba(16,35,26,0.02)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[7.5px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
                      Current network
                    </span>
                    <SignalBars bars={3} />
                  </div>
                  <p className="mt-1.5 truncate text-[11px] font-semibold text-ink">
                    Campus Wi-Fi
                  </p>
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-warning/25 bg-warning-soft px-1.5 py-0.5 text-[8px] font-medium text-warning">
                    <span className="h-1 w-1 rounded-full bg-warning" />
                    Sign-in required
                  </span>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.025em] text-ink">
                    Overview
                  </h3>
                  <p className="mt-0.5 text-[10px] text-ink-tertiary">
                    Your Wi-Fi, connection health, and next step.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-[8px] border border-hairline bg-surface px-2.5 py-1.5 text-[9.5px] font-medium text-ink-secondary">
                  <RefreshCw className="h-3 w-3" />
                  Refresh
                </span>
              </div>

              <div className="mt-3.5 space-y-3">
                <div className="grid gap-3 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
                  <div className="relative overflow-hidden rounded-[13px] border border-hairline bg-surface p-3.5 shadow-card">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_68%)]" />
                    <div className="relative">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/25 bg-warning-soft px-2 py-0.5 text-[9px] font-medium text-warning">
                          <ShieldAlert className="h-2.5 w-2.5" />
                          Portal detected
                        </span>
                        <span className="inline-flex items-center gap-1 text-[8.5px] text-ink-tertiary">
                          <Clock3 className="h-2.5 w-2.5" />
                          Checked 12s ago
                        </span>
                      </div>

                      <div className="mt-3 flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-warning/25 bg-warning-soft text-warning">
                          <LogIn className="h-5 w-5" strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-ink-tertiary">
                            Campus Wi-Fi
                          </p>
                          <p className="mt-1 text-[16px] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
                            This network needs a sign-in
                          </p>
                          <p className="mt-1.5 text-[10px] leading-relaxed text-ink-secondary">
                            The network intercepted a web request. Sign in
                            through the campus portal to continue.
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1.5 rounded-[7px] bg-brand px-2.5 py-1.5 text-[9.5px] font-semibold text-on-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                          <LogIn className="h-3 w-3" />
                          Open sign-in page
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-hairline-strong bg-surface px-2.5 py-1.5 text-[9.5px] font-medium text-ink-secondary">
                          <RefreshCw className="h-3 w-3" />
                          Check connection
                        </span>
                        <span className="hidden items-center gap-1.5 px-1.5 py-1.5 text-[9.5px] font-medium text-ink-tertiary sm:inline-flex">
                          Network details
                          <ChevronDown className="h-3 w-3" />
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-hairline pt-2.5">
                        <RouteStep
                          icon={<Wifi className="h-2.5 w-2.5" />}
                          label="Wi-Fi link"
                          detail="Connected"
                          tone="success"
                        />
                        <span className="h-px w-3 bg-hairline-strong" />
                        <RouteStep
                          icon={<ShieldAlert className="h-2.5 w-2.5" />}
                          label="Portal"
                          detail="Sign-in needed"
                          tone="warning"
                        />
                        <span className="h-px w-3 bg-hairline-strong" />
                        <RouteStep
                          icon={<Globe2 className="h-2.5 w-2.5" />}
                          label="Internet"
                          detail="Not verified"
                          tone="muted"
                        />
                      </div>

                      <p className="mt-2 flex items-center gap-1 text-[8px] text-ink-tertiary">
                        <ShieldCheck className="h-2.5 w-2.5 text-brand" />
                        Verification requires a live HTTPS check.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[13px] border border-hairline bg-surface p-3.5 shadow-card">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
                        Current network
                      </span>
                      <SignalBars bars={3} />
                    </div>
                    <p className="mt-1.5 text-[13px] font-semibold tracking-[-0.01em] text-ink">
                      Campus Wi-Fi
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-[9px] text-ink-tertiary">
                      <LockKeyhole className="h-2.5 w-2.5" />
                      WPA2 Enterprise · 5 GHz
                    </p>

                    <dl className="mt-2.5 divide-y divide-hairline border-y border-hairline text-[9.5px]">
                      {[
                        ["IP address", "10.24.8.31"],
                        ["Gateway", "10.24.0.1"],
                        ["DNS", "10.24.0.2"],
                        ["Channel", "44 · 5 GHz"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between gap-2 py-[5px]"
                        >
                          <dt className="text-ink-tertiary">{label}</dt>
                          <dd className="font-mono text-[9px] text-ink-secondary">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 text-[8.5px] text-ink-tertiary">
                        <Wifi className="h-2.5 w-2.5 text-brand" />
                        Signal good
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-[6px] border border-hairline bg-surface-muted px-2 py-1 text-[8.5px] font-medium text-ink-secondary">
                        Details
                        <ChevronDown className="h-2.5 w-2.5" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[13px] border border-hairline bg-surface p-3.5 shadow-card">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3 w-3 text-brand" />
                      <span className="text-[9.5px] font-semibold text-ink">
                        Connectivity checks
                      </span>
                    </div>
                    <span className="text-[8px] text-ink-tertiary">
                      3 probes · just now
                    </span>
                  </div>
                  <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
                    <ProbeRow
                      title="DNS resolution"
                      detail="Resolved"
                      icon={<Check className="h-3 w-3" />}
                      tone="success"
                    />
                    <ProbeRow
                      title="Portal interception"
                      detail="Redirect detected"
                      icon={<ShieldAlert className="h-3 w-3" />}
                      tone="warning"
                    />
                    <ProbeRow
                      title="HTTPS internet"
                      detail="Blocked until sign-in"
                      icon={<Globe2 className="h-3 w-3" />}
                      tone="muted"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-9 right-3 hidden w-[330px] animate-float-slow lg:block xl:-right-6">
          <div className="relative">
            <span className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[9px] font-semibold text-on-brand shadow-float">
              <Globe2 className="h-2.5 w-2.5" />
              Integrated browser
            </span>
            <div className="overflow-hidden rounded-[14px] border border-hairline-strong bg-surface shadow-stage ring-1 ring-black/[0.04] dark:ring-white/[0.05]">
              <div className="flex h-8 items-center gap-2 border-b border-hairline bg-surface-muted/90 px-3">
                <div className="flex items-center gap-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
                  <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
                </div>
                <p className="flex-1 text-center text-[8.5px] text-ink-tertiary">
                  Sign in — AirLink
                </p>
                <ExternalLink className="h-2.5 w-2.5 text-ink-tertiary" />
              </div>
              <div className="flex h-8 items-center gap-1.5 border-b border-hairline bg-surface px-2">
                <ArrowLeft className="h-3 w-3 text-ink-tertiary" />
                <ArrowRight className="h-3 w-3 text-ink-tertiary/50" />
                <RotateCw className="h-3 w-3 text-ink-tertiary" />
                <div className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-[6px] border border-hairline bg-surface-muted px-2 py-1">
                  <LockKeyhole className="h-2.5 w-2.5 shrink-0 text-brand" />
                  <span className="truncate text-[8.5px] text-ink-secondary">
                    portal.campus.edu/signin
                  </span>
                </div>
              </div>
              <div className="bg-surface px-4 pb-4 pt-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-brand text-on-brand">
                    <Wifi className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-ink-tertiary">
                      CampusNet
                    </p>
                    <p className="text-[10.5px] font-semibold text-ink">
                      Network sign-in
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-[13px] font-semibold tracking-[-0.02em] text-ink">
                  Welcome to Campus Wi-Fi
                </p>
                <p className="mt-1 text-[9px] leading-relaxed text-ink-secondary">
                  Sign in with your student account to continue.
                </p>
                <div className="mt-3 space-y-1.5">
                  <div className="flex h-8 items-center gap-2 rounded-[7px] border border-hairline bg-surface-muted px-2.5 text-[9px] text-ink-tertiary">
                    <User className="h-3 w-3" />
                    Username
                  </div>
                  <div className="flex h-8 items-center gap-2 rounded-[7px] border border-hairline bg-surface-muted px-2.5 text-[9px] text-ink-tertiary">
                    <LockKeyhole className="h-3 w-3" />
                    Password
                  </div>
                </div>
                <div className="mt-2.5 flex h-8 items-center justify-center gap-1.5 rounded-[7px] bg-brand text-[9.5px] font-semibold text-on-brand">
                  Sign in
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="mt-2.5 flex items-center justify-center gap-1 text-[7.5px] text-ink-tertiary">
                  <ShieldCheck className="h-2.5 w-2.5 text-brand" />
                  Kept inside AirLink · Credentials never auto-filled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function RouteStep({
  icon,
  label,
  detail,
  tone,
}: {
  icon: ReactNode;
  label: string;
  detail: string;
  tone: "success" | "warning" | "muted";
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border",
          tone === "success"
            ? "border-brand/20 bg-brand-soft text-brand"
            : tone === "warning"
              ? "border-warning/25 bg-warning-soft text-warning"
              : "border-hairline bg-surface-muted text-ink-tertiary",
        )}
      >
        {icon}
      </span>
      <span className="leading-none">
        <span className="block text-[8px] font-medium text-ink">{label}</span>
        <span className="mt-0.5 block text-[7.5px] text-ink-tertiary">
          {detail}
        </span>
      </span>
    </span>
  );
}

function ProbeRow({
  title,
  detail,
  icon,
  tone,
}: {
  title: string;
  detail: string;
  icon: ReactNode;
  tone: "success" | "warning" | "muted";
}) {
  return (
    <div className="flex items-center gap-2 rounded-[8px] border border-hairline bg-surface-muted/60 px-2.5 py-2">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
          tone === "success"
            ? "bg-brand-soft text-brand"
            : tone === "warning"
              ? "bg-warning-soft text-warning"
              : "bg-surface text-ink-tertiary",
        )}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[8.5px] font-medium text-ink">
          {title}
        </span>
        <span className="block truncate text-[7.5px] text-ink-tertiary">
          {detail}
        </span>
      </span>
    </div>
  );
}
