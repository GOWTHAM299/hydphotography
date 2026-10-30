"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-white">

      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:h-[84px] sm:px-8 lg:h-[88px] lg:px-16">

        {/* LOGO */}

        <a
          href="/"
          onClick={closeMenu}
          className="block w-[82px] sm:w-[100px] md:w-[110px] lg:w-[115px]"
        >
          <img
            src="/logo.png"
            alt="HYD Photography"
            className="h-auto w-full object-contain"
          />
        </a>


        {/* DESKTOP NAVIGATION */}

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

          <a
            href="/"
            className="text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
          >
            About
          </a>

          <a
            href="/services"
            className="text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
          >
            Services
          </a>

          <a
            href="/portfolio"
            className="text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
          >
            Portfolio
          </a>

          <a
            href="/gallery"
            className="text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
          >
            Gallery
          </a>

          <a
            href="/contact"
            className="text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
          >
            Contact
          </a>

        </nav>


        {/* DESKTOP BOOK BUTTON */}

        <a
          href="/contact"
          className="hidden rounded-full bg-[#f5a400] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#df9200] lg:block"
        >
          Book Now
        </a>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >

          <span className="relative block h-5 w-6">

            <span
              className={`absolute left-0 top-0 block h-[2px] w-6 bg-black transition ${
                menuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] block h-[2px] w-6 bg-black transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[18px] block h-[2px] w-6 bg-black transition ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />

          </span>

        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] border-t" : "max-h-0"
        }`}
      >

        <nav className="flex flex-col px-6 py-5">

          <a
            href="/"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.1em]"
          >
            Home
          </a>

          <a
            href="/about"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.1em]"
          >
            About
          </a>

          <a
            href="/services"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.1em]"
          >
            Services
          </a>

          <a
            href="/portfolio"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.1em]"
          >
            Portfolio
          </a>

          <a
            href="/gallery"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.1em]"
          >
            Gallery
          </a>

          <a
            href="/contact"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.1em]"
          >
            Contact
          </a>

          <a
            href="/contact"
            onClick={closeMenu}
            className="mt-5 rounded-full bg-[#f5a400] px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white"
          >
            Book Now
          </a>

        </nav>

      </div>

    </header>
  );
}