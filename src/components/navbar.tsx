import { ArrowDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

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

export default Navbar;
