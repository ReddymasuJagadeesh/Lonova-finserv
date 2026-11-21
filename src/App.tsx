import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4';
const useCasesVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4';
const savingsArtwork =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85';

const ecosystemBrands = [
  { name: 'Stripe', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 15 } },
  { name: 'Coinbase', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: 13, textTransform: 'uppercase' as const } },
  { name: 'Uniswap', style: { fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: 15, fontStyle: 'italic' as const } },
  { name: 'Aave', style: { fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: 13, textTransform: 'uppercase' as const } },
  { name: 'Compound', style: { fontFamily: 'Palatino, Book Antiqua, serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: 16 } },
  { name: 'MakerDAO', style: { fontFamily: 'Impact, Arial Narrow, sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: 14 } },
  { name: 'Chainlink', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: 13 } },
];

const backers = [
  { name: 'Fundamental Labs', style: { fontFamily: 'Times New Roman, serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: 14 } },
  { name: 'KUCOIN', style: { fontFamily: 'Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: 16 } },
  { name: 'NGC', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: 18 } },
  { name: 'NxGen', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: 17 } },
  { name: 'Matter Labs', style: { fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: 15 } },
  { name: 'DEXTools', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: 14, textTransform: 'uppercase' as const } },
  { name: 'NGRAVE', style: { fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: 14 } },
  { name: 'Polychain', style: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: 15 } },
];

function ArrowPill({ children, className = '', href }: { children: ReactNode; className?: string; href?: string }) {
  const content = (
    <>
      <span>{children}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-2 transition-colors duration-200 group-hover:bg-gray-100">
        <ArrowRight className="h-5 w-5 text-black" strokeWidth={1.8} aria-hidden="true" />
      </span>
    </>
  );
  const classes = `group inline-flex items-center gap-3 rounded-full bg-black pl-8 pr-2 py-2 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800 ${className}`;

  return href ? <a href={href} className={classes}>{content}</a> : <button type="button" className={classes}>{content}</button>;
}

function Marquee({ items, backer = false }: { items: typeof ecosystemBrands; backer?: boolean }) {
  return (
    <div className="overflow-hidden" aria-label={backer ? 'Halo backers' : 'Halo ecosystem partners'}>
      <div className={backer ? 'backers-track' : 'marquee-track'}>
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className={backer ? 'mx-10 shrink-0 whitespace-nowrap text-black/50' : 'mx-7 shrink-0 whitespace-nowrap text-black/60'}
            style={item.style as CSSProperties}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const loanLinks = [
    ['Home Loan', '#home-loan'],
    ['Gold Loan', '#gold-loan'],
    ['Personal Loan', '#personal-loan'],
    ['Business Loan', '#business-loan'],
    ['Vehicle Loan', '#vehicle-loan'],
    ['Loan Against Property', '#loan-against-property'],
  ];

  return (
    <nav className="absolute left-0 right-0 top-0 z-20 bg-white px-6 py-4 shadow-sm" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between">
        <a href="#top" className="text-xl font-semibold tracking-tight text-black md:text-2xl" aria-label="Lonova Finserv home">
          Lonova Finserv
        </a>
        <div className="hidden items-center gap-7 text-base font-medium text-gray-700 md:flex">
          <a href="#top" className="transition-colors duration-200 hover:text-black">Home</a>
          <a href="#about-us" className="transition-colors duration-200 hover:text-black">About Us</a>
          <div className="group relative py-2">
            <button type="button" className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black" aria-haspopup="true">
              Loans <ArrowDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full min-w-56 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl ring-1 ring-black/5 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {loanLinks.map(([label, href]) => <a key={label} href={href} className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">{label}</a>)}
            </div>
          </div>
          <a href="#emi-calculator" className="transition-colors duration-200 hover:text-black">EMI Calculator</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-black">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
          <a href="#apply" className="hidden rounded-full bg-black px-7 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800 md:inline-flex">Apply</a>
        </div>
      </div>
      <div id="mobile-navigation" className={`${mobileOpen ? 'flex' : 'hidden'} absolute left-6 right-6 top-[4.5rem] flex-col gap-1 rounded-2xl bg-white p-3 shadow-xl md:hidden`}>
        <a href="#top" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-black/5 hover:text-black">Home</a>
        <a href="#about-us" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-black/5 hover:text-black">About Us</a>
        <details className="group rounded-xl">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-black/5 hover:text-black">Loans <ArrowDown className="h-4 w-4" aria-hidden="true" /></summary>
          <div className="pb-2 pl-4">
            {loanLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-black/5 hover:text-black">{label}</a>)}
          </div>
        </details>
        <a href="#emi-calculator" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-black/5 hover:text-black">EMI Calculator</a>
        <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-black/5 hover:text-black">Contact</a>
        <a href="#apply" onClick={() => setMobileOpen(false)} className="mt-1 rounded-xl bg-black px-4 py-3 text-center text-base font-medium text-white hover:bg-gray-800">Apply</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [stats, setStats] = useState({ customers: 0, disbursed: 0, years: 0 });

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setStats({
        customers: Math.round(250000 * eased),
        disbursed: Math.round(9800 * eased),
        years: Math.round(22 * eased),
      });
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div id="top" className="relative flex h-screen flex-col overflow-hidden px-6 pt-20 pb-6">
      <Navbar />
      <main className="mx-auto flex w-full max-w-[88rem] flex-1 items-end">
        <section className="relative h-[calc(100vh-96px)] w-full overflow-hidden rounded-2xl bg-[#dbe5e1]" aria-labelledby="hero-title">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10" />
          <div className="hero-copy relative z-10 flex h-full w-full flex-col items-start justify-center p-6 md:max-w-[700px] md:p-12">
            <span className="mb-6 rounded-full border border-[#123b40]/15 bg-white/55 px-4 py-2 text-xs font-medium text-[#a94f40] md:text-sm">RBI-registered NBFC · Trusted since 2004</span>
            <h1 id="hero-title" className="mb-5 max-w-xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.04em] text-[#123b40] md:text-7xl">Finance for your<br /><em className="text-[#e86e5f]">home.</em></h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#23484c] md:text-lg">Private-bank service, transparent rates and approvals in as little as 24 hours.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#apply" className="rounded-full bg-[#123b40] px-6 py-3.5 font-medium text-white shadow-md shadow-[#123b40]/20 transition-colors hover:bg-[#1b5055]">Apply Now</a>
              <a href="#emi-calculator" className="rounded-full border border-[#123b40]/25 bg-white/35 px-6 py-3.5 font-medium text-[#123b40] transition-colors hover:bg-white/60">Calculate EMI</a>
            </div>
            <div className="mt-10 grid w-full max-w-[620px] grid-cols-3 gap-x-6 md:gap-x-10">
              <div className="min-w-0"><p className="whitespace-nowrap font-serif text-2xl font-medium text-[#123b40] sm:text-3xl md:text-4xl">{stats.customers.toLocaleString('en-IN')}+</p><p className="mt-1 text-xs text-[#34565a] md:text-sm">Customers served</p></div>
              <div className="min-w-0"><p className="whitespace-nowrap font-serif text-2xl font-medium text-[#123b40] sm:text-3xl md:text-4xl">{stats.disbursed.toLocaleString('en-IN')} Cr</p><p className="mt-1 text-xs text-[#34565a] md:text-sm">Loans disbursed</p></div>
              <div className="min-w-0"><p className="whitespace-nowrap font-serif text-2xl font-medium text-[#123b40] sm:text-3xl md:text-4xl">{stats.years}</p><p className="mt-1 text-xs text-[#34565a] md:text-sm">Years of trust</p></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoSection() {
  return (
    <section id="ecosystem" className="bg-[#F5F5F5] px-6 py-24" aria-labelledby="meet-title">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h2 id="meet-title" className="mb-8 text-4xl font-medium leading-tight tracking-[-0.03em] text-black md:text-5xl">Meet USD Halo.</h2>
            <ArrowPill href="#rewards">Discover it</ArrowPill>
          </div>
          <p className="text-2xl leading-relaxed text-black/70 md:text-3xl">USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article id="rewards" className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#d6e7d9] bg-cover bg-center p-7 lg:col-span-2" style={{ backgroundImage: `url("${savingsArtwork}")` }}>
            <h3 className="max-w-sm text-2xl font-medium leading-snug tracking-[-0.02em] text-black">Savings that bloom</h3>
            <p className="max-w-xs text-base text-black/70">Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.</p>
          </article>
          <article className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7">
            <h3 className="whitespace-pre-line text-2xl font-medium leading-snug text-white">Always fluid,{`\n`}always pegged.</h3>
            <p className="text-base text-white/60">Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.</p>
          </article>
          <article className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7">
            <h3 className="whitespace-pre-line text-2xl font-medium leading-snug text-white">Fully{`\n`}automated</h3>
            <p className="text-base text-white/60">Skip the task of tuning positions yourself. USD Halo runs in the background for you.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function BackedBySection() {
  return (
    <section id="network" className="bg-[#F5F5F5] px-6 py-5" aria-label="Backed by premier partners">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 md:grid-cols-4">
        <p className="whitespace-pre-line text-base leading-relaxed text-black/70">Funded by premier partners{`\n`}and forward-thinking leaders.</p>
        <div className="overflow-hidden md:col-span-3">
          <Marquee items={backers} backer />
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="help" className="bg-[#F5F5F5] px-6 py-24" aria-labelledby="use-modes-title">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="md:pr-12 md:pt-2">
          <p className="mb-2 text-sm text-black/60">USD Halo in Practice</p>
          <h2 id="use-modes-title" className="mb-6 text-5xl font-medium leading-none tracking-[-0.04em] text-black md:text-6xl">Use modes</h2>
          <p className="max-w-sm text-base leading-relaxed text-black/60">USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more</p>
        </div>
        <article id="news" className="relative min-h-[720px] overflow-hidden rounded-3xl bg-[#d6e7d9]" aria-labelledby="commerce-title">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={useCasesVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative z-10 p-10 md:p-12">
            <h3 id="commerce-title" className="mb-5 text-4xl font-medium leading-tight tracking-[-0.03em] text-black md:text-5xl">Commerce</h3>
            <p className="mb-8 max-w-md text-base text-black/70">Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.</p>
            <a href="#wallet" className="group inline-flex items-center gap-3 text-base font-medium text-black">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-colors group-hover:bg-white"><ArrowRight className="h-4 w-4 text-black" strokeWidth={1.8} aria-hidden="true" /></span>
              <span>Know more</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <HeroSection />
      <InfoSection />
      <BackedBySection />
      <UseCasesSection />
      <footer id="wallet" className="bg-[#F5F5F5] px-6 pb-10 pt-2">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between border-t border-black/10 pt-5 text-sm text-black/50">
          <span>USD Halo</span>
          <span>Built for the next dollar.</span>
        </div>
      </footer>
    </div>
  );
}
