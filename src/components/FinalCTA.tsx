import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { REPO_URL, RELEASES_URL } from "../lib/constants";
import { ButtonLink } from "./ButtonLink";
import { AppleMark, GitHubMark } from "./Icons";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="pb-20 pt-4 sm:pb-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#082f18_0%,#0b4a24_48%,#0e6b2f_100%)] px-6 py-12 shadow-stage sm:px-10 sm:py-16 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-36 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(109,224,148,0.22),transparent_66%)]"
          />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-30 lg:block"
            viewBox="0 0 400 400"
            fill="none"
          >
            {[70, 120, 170, 220].map((radius) => (
              <circle
                key={radius}
                cx="200"
                cy="200"
                r={radius}
                stroke="white"
                strokeOpacity="0.22"
              />
            ))}
            <circle cx="200" cy="200" r="8" fill="white" fillOpacity="0.55" />
          </svg>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_80%_at_70%_50%,#000,transparent)]"
          />

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10.5px] font-medium text-white/80">
              <img
                src={`${import.meta.env.BASE_URL}app-icon.png`}
                alt=""
                className="h-4 w-4 rounded-[4px]"
              />
              AirLink for macOS
            </span>
            <h2
              id="cta-heading"
              className="mt-5 text-balance text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[46px]"
            >
              Stop guessing whether you&rsquo;re online.
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/70 sm:text-[15.5px]">
              Join the Wi-Fi. Let AirLink handle the sign-in, verify the
              connection, and tell you the truth about the internet.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
              <ButtonLink
                href={RELEASES_URL}
                variant="inverse"
                size="lg"
                icon={<AppleMark className="h-[17px] w-[17px]" />}
              >
                Download for macOS
              </ButtonLink>
              <ButtonLink
                href={REPO_URL}
                variant="inverseGhost"
                size="lg"
                icon={<GitHubMark className="h-4 w-4" />}
                trailingIcon={<ArrowUpRight className="h-4 w-4" />}
              >
                View on GitHub
              </ButtonLink>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10.5px] text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                No account required
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span>macOS 12 or later</span>
              <span className="h-3 w-px bg-white/20" />
              <span>Free and open source</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
