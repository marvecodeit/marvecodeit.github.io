import { ArrowUp, ArrowUpRight } from "lucide-react";
import {
  ISSUES_URL,
  LICENSE_URL,
  README_URL,
  RELEASES_URL,
  REPO_URL,
  WEBSITE_REPO_URL,
} from "../lib/constants";
import { ButtonLink } from "./ButtonLink";
import { AppleMark, GitHubMark } from "./Icons";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Installation", href: "#installation" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub repository", href: REPO_URL, external: true },
      { label: "Latest release", href: RELEASES_URL, external: true },
      { label: "Support", href: ISSUES_URL, external: true },
      { label: "MIT License", href: LICENSE_URL, external: true },
    ],
  },
  {
    title: "Site",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Documentation", href: README_URL, external: true },
      { label: "Website source", href: WEBSITE_REPO_URL, external: true },
      { label: "Back to top", href: "#top" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[290px] text-[12.5px] leading-relaxed text-ink-secondary">
              A native macOS captive portal assistant. Detect the portal, finish
              the sign-in, and verify the internet &mdash; locally.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <ButtonLink
                href={RELEASES_URL}
                variant="secondary"
                size="sm"
                icon={<AppleMark className="h-3.5 w-3.5" />}
              >
                Download for macOS
              </ButtonLink>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AirLink on GitHub"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface/70 text-ink-secondary transition-colors hover:border-hairline-strong hover:bg-surface hover:text-ink"
              >
                <GitHubMark className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-tertiary">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="group inline-flex items-center gap-1 text-[12.5px] text-ink-secondary transition-colors hover:text-ink"
                    >
                      {link.label}
                      {"external" in link && link.external ? (
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-ink-tertiary">
            &copy; {new Date().getFullYear()} marvecodeit. AirLink is open source
            under the{" "}
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-secondary underline decoration-hairline-strong underline-offset-2 transition-colors hover:text-ink"
            >
              MIT License
            </a>
            .
          </p>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-1.5 text-[11px] font-medium text-ink-tertiary transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>

        <p className="mt-4 max-w-4xl text-[10.5px] leading-relaxed text-ink-tertiary">
          macOS is a trademark of Apple Inc. AirLink is an independent project
          and is not affiliated with Apple. This website stores only your
          appearance preference and uses no cookies or analytics.
        </p>
      </div>
    </footer>
  );
}
