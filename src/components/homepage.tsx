import { ArrowRight, BriefcaseBusiness, Clock3, Coins, FileCheck2, House, Percent, ShieldCheck, UserRound } from 'lucide-react';
import Navbar from './navbar';
import Footer from './footer';
import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import personalLoanImage from '../assets/personal.png';
import homeLoanImage from '../assets/home.png';
import goldLoanImage from '../assets/gold.png';
import businessLoanImage from '../assets/business.png';

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4';
const useCasesVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4';
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
  { name: 'Home Loans', style: { fontFamily: 'Times New Roman, serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: 14 } },
  { name: 'Gold Loans', style: { fontFamily: 'Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: 16 } },
  { name: 'Personal Loans', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: 18 } },
  { name: 'Business Loans', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: 17 } },
  { name: 'Investment Loans', style: { fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: 15 } },
  { name: 'Retirement Loans', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: 14, textTransform: 'uppercase' as const } },
  { name: 'Student Loans', style: { fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: 14 } },
  { name: 'Pension Loans', style: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: 15 } },
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

const loanProducts = [
  { name: 'Home Loan', description: 'Walk into the home you have imagined.', serviceInfo: 'Finance for buying, building, or renovating a home, with repayments planned around your budget.', terms: 'From 8.4% · up to ₹ 5 Cr', icon: House, image: homeLoanImage, imageAlt: 'Family celebrating their new home' },
  { name: 'Gold Loan', description: 'Liquidity from the gold you already own.', serviceInfo: 'Borrow against eligible gold jewellery to meet a planned expense or an urgent need. The loan amount is based on the gold valuation.', terms: 'From 9% · up to ₹ 1 Cr', icon: Coins, image: goldLoanImage, imageAlt: 'Gold jewellery and a gold loan' },
  { name: 'Personal Loan', description: 'Fast, flexible funds for life’s moments.', serviceInfo: 'Put funds toward expenses such as education, travel, medical needs, or a major purchase, then repay in instalments.', terms: 'From 10.5% · up to ₹ 40 L', icon: UserRound, image: personalLoanImage, imageAlt: 'Personal loan options for travel, education and everyday needs' },
  { name: 'Business Loan', description: 'Working capital that moves at your pace.', serviceInfo: 'Support day-to-day cash flow, purchase equipment, or fund the next stage of your business growth.', terms: 'From 11.5% · up to ₹ 2 Cr', icon: BriefcaseBusiness, image: businessLoanImage, imageAlt: 'Business owner planning and growing a company' },
];

function LoanProductsSection() {
  return (
    <section id="apply" className="loan-section px-6 py-16 md:py-20" aria-labelledby="loan-products-title">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-[#786982]">Simple, thoughtful financing</p>
            <h2 id="loan-products-title" className="font-serif text-3xl tracking-tight text-[#35283e] md:text-4xl">Find the right loan for you</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6d6273]">Flexible options for the milestones and plans that matter most.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {loanProducts.map(({ name, description, serviceInfo, terms, icon: Icon, image, imageAlt }, index) => (
            <article key={name} id={name.toLowerCase().replace(/ /g, '-')} className="loan-card group relative aspect-square min-h-[270px] w-full overflow-hidden rounded-2xl border border-[#5e4b68]/10 text-[#35283e] xl:max-w-[18rem] xl:justify-self-center" style={{ '--card-delay': `${index * 90}ms` } as CSSProperties}>
              <div className="loan-card-inner">
                <div className="loan-card-front">
                  <img src={image} alt={imageAlt} />
                </div>
                <div className="loan-card-back">
                  <Icon className="loan-card-back-icon h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                  <div className="my-2">
                    <h3 className="mb-2 font-serif text-2xl text-[#35283e]">{name}</h3>
                    <p className="text-sm leading-relaxed text-[#6d6273]">{description}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-[#6d6273]">{serviceInfo}</p>
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium text-[#8563a6]">{terms}</p>
                    <a href="#apply" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#493853] transition-colors hover:text-[#21182b]">Explore <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const applicationBenefits = [
  { title: '24-hour approval', description: 'Decisions within one working day.', icon: Clock3 },
  { title: 'Minimal paperwork', description: 'Three documents for most loans.', icon: FileCheck2 },
  { title: 'No hidden charges', description: 'Every fee listed upfront.', icon: Percent },
  { title: 'RBI-registered', description: 'Fully regulated and audited.', icon: ShieldCheck },
];

function ApplicationBenefitsSection() {
  return (
    <section className="application-benefits px-6 py-12 md:py-14" aria-label="Loan application benefits">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {applicationBenefits.map(({ title, description, icon: Icon }, index) => (
          <article key={title} className="application-benefit-card group relative isolate flex min-h-[140px] flex-col justify-center overflow-hidden rounded-2xl border border-[#8563a6]/[0.08] bg-white px-6 py-5" style={{ '--benefit-delay': `${index * 180}ms` } as CSSProperties}>
            <span className="application-benefit-glow" aria-hidden="true" />
            <Icon className="application-benefit-icon relative z-10 mb-4 h-6 w-6 text-[#d94f20]" strokeWidth={2} aria-hidden="true" />
            <h3 className="relative z-10 mb-1 font-serif text-xl text-[#233b42]">{title}</h3>
            <p className="relative z-10 text-sm text-[#687d82]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const emiLoanTypes = [
  { name: 'Home Loan', rate: 8.4, maxAmount: 50000000 },
  { name: 'Gold Loan', rate: 9, maxAmount: 10000000 },
  { name: 'Personal Loan', rate: 10.5, maxAmount: 4000000 },
  { name: 'Business Loan', rate: 11.5, maxAmount: 20000000 },
];

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

function EmiCalculatorSection() {
  const [selectedLoan, setSelectedLoan] = useState(emiLoanTypes[2]);
  const [principal, setPrincipal] = useState(300000);
  const [annualRate, setAnnualRate] = useState(emiLoanTypes[2].rate);
  const [tenureMonths, setTenureMonths] = useState(36);
  const monthlyRate = annualRate / 1200;
  const growthFactor = (1 + monthlyRate) ** tenureMonths;
  const monthlyEmi = monthlyRate === 0
    ? principal / tenureMonths
    : (principal * monthlyRate * growthFactor) / (growthFactor - 1);
  const totalPayment = monthlyEmi * tenureMonths;
  const totalInterest = totalPayment - principal;
  const principalShare = totalPayment > 0 ? (principal / totalPayment) * 100 : 100;

  const chooseLoan = (loan: typeof emiLoanTypes[number]) => {
    setSelectedLoan(loan);
    setAnnualRate(loan.rate);
    setPrincipal((current) => Math.min(current, loan.maxAmount));
  };

  return (
    <section id="emi-calculator" className="emi-section px-6 py-16 md:py-20" aria-labelledby="emi-title">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#8563a6]">Plan with clarity</p>
          <h2 id="emi-title" className="font-serif text-3xl leading-tight text-[#35283e] md:text-4xl">Calculate your monthly EMI</h2>
          <p className="mt-3 text-base leading-relaxed text-[#6d6273]">Adjust the loan amount, starting interest rate, and repayment period to see an estimate.</p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-[#8563a6]/10 bg-white shadow-[0_20px_60px_rgba(73,56,83,0.08)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-9">
            <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Choose a loan type">
              {emiLoanTypes.map((loan) => (
                <button
                  key={loan.name}
                  type="button"
                  aria-pressed={selectedLoan.name === loan.name}
                  onClick={() => chooseLoan(loan)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${selectedLoan.name === loan.name ? 'border-[#8563a6] bg-[#8563a6] text-white' : 'border-[#8563a6]/25 bg-white text-[#62566a] hover:bg-[#f7f3f9]'}`}
                >
                  {loan.name}
                </button>
              ))}
            </div>

            <div className="space-y-7">
              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label htmlFor="emi-principal" className="text-sm font-semibold text-[#35283e]">Loan amount</label>
                  <span className="text-xs text-[#8a7a94]">Up to {inr.format(selectedLoan.maxAmount)}</span>
                </div>
                <div className="flex items-center rounded-xl border border-[#d9cde2] bg-[#fcfafe] px-4 transition focus-within:border-[#8563a6] focus-within:ring-2 focus-within:ring-[#8563a6]/15">
                  <span className="mr-2 text-base font-semibold text-[#493853]">₹</span>
                  <input id="emi-principal" type="number" min={10000} max={selectedLoan.maxAmount} step={10000} value={principal} onChange={(event) => setPrincipal(Math.min(selectedLoan.maxAmount, Math.max(10000, Number(event.target.value) || 10000)))} className="w-full border-0 bg-transparent py-3 text-lg font-semibold text-[#35283e] outline-none" />
                </div>
                <input aria-label="Adjust loan amount" type="range" min={10000} max={selectedLoan.maxAmount} step={10000} value={principal} onChange={(event) => setPrincipal(Number(event.target.value))} className="emi-range mt-3 w-full" />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label htmlFor="emi-rate" className="text-sm font-semibold text-[#35283e]">Interest rate (p.a.)</label>
                  <span className="text-xs text-[#8a7a94]">Starting rate: {selectedLoan.rate}%</span>
                </div>
                <div className="flex items-center rounded-xl border border-[#d9cde2] bg-[#fcfafe] px-4 transition focus-within:border-[#8563a6] focus-within:ring-2 focus-within:ring-[#8563a6]/15">
                  <input id="emi-rate" type="number" min={0} max={30} step={0.1} value={annualRate} onChange={(event) => setAnnualRate(Math.min(30, Math.max(0, Number(event.target.value) || 0)))} className="w-full border-0 bg-transparent py-3 text-lg font-semibold text-[#35283e] outline-none" />
                  <span className="ml-2 text-base font-semibold text-[#493853]">%</span>
                </div>
                <input aria-label="Adjust annual interest rate" type="range" min={0} max={30} step={0.1} value={annualRate} onChange={(event) => setAnnualRate(Number(event.target.value))} className="emi-range mt-3 w-full" />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label htmlFor="emi-tenure" className="text-sm font-semibold text-[#35283e]">Repayment period</label>
                  <span className="text-sm font-semibold text-[#493853]">{tenureMonths} months</span>
                </div>
                <input id="emi-tenure" aria-label="Adjust repayment period in months" type="range" min={6} max={360} step={6} value={tenureMonths} onChange={(event) => setTenureMonths(Number(event.target.value))} className="emi-range w-full" />
                <div className="mt-1 flex justify-between text-xs text-[#8a7a94]"><span>6 months</span><span>360 months</span></div>
              </div>
            </div>
          </div>

          <div className="emi-results flex flex-col justify-center p-6 md:p-9">
            <div className="mx-auto mb-8 flex h-52 w-52 items-center justify-center rounded-full p-3" style={{ background: `conic-gradient(#8563a6 0% ${principalShare}%, #e5d9ed ${principalShare}% 100%)` }} aria-label={`Principal is ${Math.round(principalShare)} percent of total repayment`}>
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
                <span className="text-sm text-[#766a7d]">Estimated EMI</span>
                <strong className="mt-1 text-2xl font-semibold tabular-nums text-[#493853]">{inr.format(Math.round(monthlyEmi))}</strong>
                <span className="mt-1 text-xs text-[#8a7a94]">per month</span>
              </div>
            </div>

            <dl className="mx-auto w-full max-w-md space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4"><dt className="flex items-center gap-2 text-[#6d6273]"><span className="h-2.5 w-2.5 rounded-full bg-[#8563a6]" />Principal amount</dt><dd className="font-semibold tabular-nums text-[#35283e]">{inr.format(principal)}</dd></div>
              <div className="flex items-center justify-between gap-4"><dt className="flex items-center gap-2 text-[#6d6273]"><span className="h-2.5 w-2.5 rounded-full bg-[#d7c5e3]" />Estimated interest</dt><dd className="font-semibold tabular-nums text-[#35283e]">{inr.format(Math.round(totalInterest))}</dd></div>
              <div className="flex items-center justify-between gap-4 border-t border-[#e8e0ed] pt-4"><dt className="text-[#493853]">Total repayment</dt><dd className="font-semibold tabular-nums text-[#35283e]">{inr.format(Math.round(totalPayment))}</dd></div>
            </dl>
            <p className="mx-auto mt-6 max-w-md text-center text-xs leading-relaxed text-[#8a7a94]">This is an estimate using a monthly reducing-balance calculation. Your actual rate, EMI, and terms may vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoanEnquirySection() {
  return (
    <section id="contact" className="loan-enquiry-section px-6 py-16 md:py-20" aria-labelledby="loan-enquiry-title">
      <div className="mx-auto grid max-w-[88rem] overflow-hidden rounded-[2rem] border border-[#8563a6]/10 bg-white shadow-[0_22px_70px_rgba(73,56,83,0.08)] lg:grid-cols-2">
        <div className="relative flex min-h-[520px] flex-col justify-center overflow-hidden bg-[#faf8fb] p-7 md:p-12 lg:p-14">
          <span className="enquiry-decoration" aria-hidden="true" />
          <div className="relative z-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#8563a6]">Lonova Finserv</p>
            <h2 id="loan-enquiry-title" className="max-w-lg font-serif text-4xl leading-tight tracking-[-0.03em] text-[#35283e] md:text-5xl">Let’s talk about your next step.</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#6d6273]">Tell us what you’re planning. Our team can help you explore the loan options that may fit your needs.</p>
            <div className="mt-9 flex flex-wrap gap-2" aria-label="Available loan types">
              {['Home', 'Gold', 'Personal', 'Business'].map((name) => <span key={name} className="rounded-full border border-[#8563a6]/15 bg-white/80 px-3.5 py-2 text-sm font-medium text-[#62566a]">{name} loan</span>)}
            </div>
          </div>
        </div>

        <div className="loan-enquiry-panel p-7 md:p-12 lg:p-14">
          <div className="mb-7">
            <h3 className="font-serif text-2xl text-[#35283e]">Request a callback</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6d6273]">Share a few details and we’ll help you get started.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#493853]">First name
                <input required autoComplete="given-name" name="firstName" type="text" placeholder="First name" className="enquiry-input mt-1.5" />
              </label>
              <label className="block text-sm font-medium text-[#493853]">Last name
                <input required autoComplete="family-name" name="lastName" type="text" placeholder="Last name" className="enquiry-input mt-1.5" />
              </label>
            </div>
            <label className="block text-sm font-medium text-[#493853]">Mobile number
              <input required autoComplete="tel" name="phone" type="tel" inputMode="tel" placeholder="Enter your mobile number" className="enquiry-input mt-1.5" />
            </label>
            <label className="block text-sm font-medium text-[#493853]">Email address
              <input required autoComplete="email" name="email" type="email" placeholder="you@example.com" className="enquiry-input mt-1.5" />
            </label>
            <label className="block text-sm font-medium text-[#493853]">Loan you’re interested in
              <select required name="loanType" defaultValue="" className="enquiry-input mt-1.5 text-[#6d6273]">
                <option value="" disabled>Select a loan type</option>
                <option>Home Loan</option>
                <option>Gold Loan</option>
                <option>Personal Loan</option>
                <option>Business Loan</option>
              </select>
            </label>
            <label className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-[#6d6273]">
              <input required type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-[#8563a6]" />
              <span>I agree to be contacted by Lonova Finserv about this loan enquiry.</span>
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8563a6] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#8563a6]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#73548f] hover:shadow-lg">
              Request a callback <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section id="about-us" className="bg-[#f7f3f9] px-6 py-24" aria-labelledby="meet-title">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h2 id="meet-title" className="mb-8 text-4xl font-medium leading-tight tracking-[-0.03em] text-[#35283e] md:text-5xl">Finance for your next milestone.</h2>
            <ArrowPill href="#apply">Explore our loans</ArrowPill>
          </div>
          <p className="text-2xl leading-relaxed text-[#62566a] md:text-3xl">From a home of your own to a growing business, find financing for the plans and moments that matter to you.</p>
        </div>
      </div>
    </section>
  );
}
function BackedBySection() {
  return (
    <section id="network" className="bg-[#F5F5F5] px-6 py-5" aria-label="Backed by premier partners">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 md:grid-cols-4">
        <div className="text-[#493853]">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8563a6]">Loan Solutions</p>
          <p className="mt-1 text-base font-bold leading-relaxed">Choose what fits your plan.</p>
        </div>
        <div className="overflow-hidden md:col-span-3">
          <Marquee items={backers} backer />
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="help" className="bg-[#F5F5F5] px-6 py-24" aria-labelledby="loan-journey-title">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="md:pr-12 md:pt-2">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.13em] text-[#8563a6]">Loans for life’s milestones</p>
          <h2 id="loan-journey-title" className="mb-6 text-5xl font-medium leading-none tracking-[-0.04em] text-[#35283e] md:text-6xl">Finance for what matters.</h2>
          <p className="max-w-md text-base leading-relaxed text-[#6d6273]">From buying a home to managing a personal expense or growing a business, explore loan options for the plans you’re working toward.</p>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Explore loan options">
            {loanProducts.map(({ name, terms, icon: Icon }) => (
              <a key={name} href={`#${name.toLowerCase().replace(/ /g, '-')}`} className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[#8563a6]/10 bg-white/80 p-3.5 shadow-sm shadow-[#493853]/[0.03] transition-all duration-200 hover:-translate-y-1 hover:border-[#8563a6]/25 hover:bg-white hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f0f8] text-[#8563a6]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-sm font-semibold text-[#493853]">{name}</span><span className="mt-0.5 block text-xs leading-relaxed text-[#817487]">{terms}</span></span>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#9a8ba2] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <article id="news" className="relative min-h-[480px] w-full max-w-[42rem] justify-self-end overflow-hidden rounded-3xl bg-[#eee6f3] lg:min-h-[560px]" aria-labelledby="loan-journey-card-title">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={useCasesVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative z-10 p-10 md:p-12">
            <h3 id="loan-journey-card-title" className="mb-5 text-4xl font-medium leading-tight tracking-[-0.03em] text-[#35283e] md:text-5xl">Find your way forward</h3>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#51445a]">Explore home, gold, personal, and business loans. Review the starting rates and amounts, then choose the option that fits your plans.</p>
            <a href="#apply" className="group inline-flex items-center gap-3 text-base font-medium text-[#35283e]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-colors group-hover:bg-white"><ArrowRight className="h-4 w-4 text-black" strokeWidth={1.8} aria-hidden="true" /></span>
              <span>Explore loans</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <HeroSection />
      <LoanProductsSection />
      <ApplicationBenefitsSection />
      <EmiCalculatorSection />
      <InfoSection />
      <BackedBySection />
      <UseCasesSection />
      <LoanEnquirySection />
      <Footer />
    </div>
  );
}
