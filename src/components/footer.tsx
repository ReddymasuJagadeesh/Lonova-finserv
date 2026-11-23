import { ArrowRight, ArrowUp } from 'lucide-react';

const loanLinks = [
  ['Home Loan', '#home-loan'],
  ['Gold Loan', '#gold-loan'],
  ['Personal Loan', '#personal-loan'],
  ['Business Loan', '#business-loan'],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#30243a] px-6 pb-6 pt-14 text-white md:pt-16">
      <div className="pointer-events-none absolute -right-24 -top-36 h-80 w-80 rounded-full bg-[#9c79bb]/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[88rem]">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.1fr] lg:gap-8">
          <div>
            <a href="#top" className="inline-block text-2xl font-semibold tracking-tight text-white" aria-label="Lonova Finserv home">
              Lonova <span className="text-[#d7b9eb]">Finserv</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">Thoughtful finance for the milestones and plans that matter to you.</p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-white/45">RBI-registered NBFC · Trusted since 2004</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/45">Explore</h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li><a className="transition-colors hover:text-white" href="#top">Home</a></li>
              <li><a className="transition-colors hover:text-white" href="#about-us">About us</a></li>
              <li><a className="transition-colors hover:text-white" href="#apply">Our loans</a></li>
              <li><a className="transition-colors hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <nav aria-label="Loan products">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/45">Loan products</h2>
            <ul className="space-y-3 text-sm text-white/75">
              {loanLinks.map(([label, href]) => <li key={label}><a className="transition-colors hover:text-white" href={href}>{label}</a></li>)}
            </ul>
          </nav>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <p className="font-serif text-xl">Ready for your next step?</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">Explore your options and find a loan that fits your plans.</p>
            <a href="#apply" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e7d8f0] px-4 py-2.5 text-sm font-semibold text-[#35283e] transition-colors hover:bg-white">
              Explore loans <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lonova Finserv. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-white/80">Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
