import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ISSUES_URL, README_URL } from "../lib/constants";
import { cn } from "../lib/cn";
import { GitHubMark } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "What is AirLink?",
    answer:
      "AirLink is a native macOS utility for captive-portal networks. It detects when a Wi-Fi network is intercepting web traffic, opens the network's own sign-in page in a secure built-in browser, and verifies that your Mac has system-wide internet access. It is a local app: no account, no cloud backend, no analytics, and no telemetry.",
  },
  {
    question: "Does AirLink bypass Wi-Fi authentication?",
    answer:
      "No. AirLink helps you complete the network's legitimate sign-in flow; it does not bypass it. It never auto-fills or injects credentials into arbitrary websites, and it does not bypass TLS certificates, change DNS, or alter MAC addresses. If a portal uses a mechanism AirLink cannot verify, such as a custom protocol or native supplicant, it reports that verification failed instead of pretending.",
  },
  {
    question: "Which macOS versions are supported?",
    answer:
      "AirLink requires macOS 12 Monterey or later and is built and tested on current macOS. The download button on this page always points to the latest published GitHub Release.",
  },
  {
    question: "Is AirLink free?",
    answer:
      "Yes. AirLink is free to download, and the source is open under the MIT License. There is no account or subscription.",
  },
  {
    question: "How do I update AirLink?",
    answer:
      "AirLink includes signed automatic updates. Open Settings → About → Software Updates to check for a new release, read the release notes, and install it. AirLink verifies the update signature before installing and can restart when it is done. You can also download the latest release from GitHub at any time.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            titleId="faq-heading"
            description="The short version: AirLink helps with the sign-in, not by going around it."
          />

          <Reveal delay={80} className="mt-8 rounded-2xl border border-hairline bg-surface p-5 shadow-card">
            <div className="flex items-center gap-2">
              <GitHubMark className="h-4 w-4 text-ink-secondary" />
              <p className="text-[12px] font-semibold text-ink">
                Open source, openly supported
              </p>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-ink-secondary">
              Found a bug or have a question? Open an issue on GitHub and include
              your macOS version and what happened.
            </p>
            <div className="mt-4 flex flex-col gap-2 border-t border-hairline pt-4">
              <a
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-ink transition-colors hover:text-brand"
              >
                Visit GitHub Issues
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={README_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-secondary transition-colors hover:text-ink"
              >
                Read the documentation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={50} className="border-t border-hairline">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="border-b border-hairline">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "text-[14.5px] font-semibold tracking-[-0.01em] transition-colors",
                        isOpen
                          ? "text-ink"
                          : "text-ink-secondary group-hover:text-ink",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-180 border-brand/20 bg-brand-soft text-brand"
                          : "border-hairline bg-surface text-ink-tertiary group-hover:border-hairline-strong",
                      )}
                    >
                      <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                <section
                  id={panelId}
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[620px] pb-5 pr-8 text-[13px] leading-relaxed text-ink-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </section>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
