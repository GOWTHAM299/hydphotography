export default function Footer() {
  return (
    <footer className="bg-[#111111] px-6 py-14 text-white md:px-10 lg:px-16">

      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-4">

        {/* BRAND */}

        <div>
          <img
            src="/logo.png"
            alt="HYD Photography"
            className="w-[110px] object-contain"
          />

          <p className="mt-5 max-w-[270px] text-sm leading-7 text-white/50">
            Capturing moments, emotions and memories that stay
            with you forever.
          </p>
        </div>


        {/* QUICK LINKS */}

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#f5a400]">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3 text-sm text-white/60">

            <a
              href="/"
              className="block transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/about"
              className="block transition hover:text-white"
            >
              About
            </a>

            <a
              href="/services"
              className="block transition hover:text-white"
            >
              Services
            </a>

            <a
              href="/portfolio"
              className="block transition hover:text-white"
            >
              Portfolio
            </a>

            <a
              href="/gallery"
              className="block transition hover:text-white"
            >
              Gallery
            </a>

            <a
              href="/contact"
              className="block transition hover:text-white"
            >
              Contact
            </a>

          </div>
        </div>


        {/* SERVICES */}

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#f5a400]">
            Services
          </h3>

          <div className="mt-5 space-y-3 text-sm text-white/60">
            <p>Wedding Photography</p>
            <p>Pre-Wedding Photography</p>
            <p>Maternity Photography</p>
            <p>Baby & Kids Photography</p>
            <p>Event Photography</p>
          </div>
        </div>


        {/* CONTACT */}

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#f5a400]">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-sm text-white/60">

            <a
              href="tel:+919949530010"
              className="block transition hover:text-white"
            >
              +91 99495 30010
            </a>

            <a
              href="https://wa.me/919949530010"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-[#25D366]"
            >
              WhatsApp Us
            </a>

            <p>Hyderabad, Telangana</p>

          </div>
        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="mx-auto mt-12 max-w-[1500px] border-t border-white/10 pt-6">

        <div className="flex flex-col justify-between gap-4 text-[11px] text-white/40 sm:flex-row">

          <p>
            © {new Date().getFullYear()} HYD Photography. All Rights Reserved.
          </p>

          <p>
            Designed & Developed for HYD Photography
          </p>

        </div>

      </div>

    </footer>
  );
}