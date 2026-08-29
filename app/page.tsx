const services = [
  {
    number: "01",
    title: "Wedding Photography",
    description: "Capturing your big day with love and creativity.",
  },
  {
    number: "02",
    title: "Pre-Wedding Shoots",
    description: "Beautiful stories before the big day.",
  },
  {
    number: "03",
    title: "Maternity Shoots",
    description: "Celebrating the beautiful journey of motherhood.",
  },
  {
    number: "04",
    title: "Baby & Kids Photography",
    description: "Preserving the innocence and cutest moments.",
  },
  {
    number: "05",
    title: "Events & Party Photography",
    description: "From birthdays to corporate events, we do it all.",
  },
];

const portfolio = [
  {
    title: "Wedding Stories",
    category: "Wedding",
    image: "/images/wedding-01.jpg",
  },
  {
    title: "Beautiful Beginnings",
    category: "Pre-Wedding",
    image: "/images/prewedding-01.jpg",
  },
  {
    title: "Motherhood",
    category: "Maternity",
    image: "/images/maternity-01.jpg",
  },
  {
    title: "Little Moments",
    category: "Baby & Kids",
    image: "/images/baby-01.jpg",
  },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.9-1.61A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.75c-2.08 0-4.02-.62-5.64-1.69l-.4-.26-4.09.95.97-3.99-.27-.41A10.71 10.71 0 1 1 16 26.75Zm5.86-7.94c-.32-.16-1.87-.92-2.16-1.02-.29-.11-.5-.16-.71.16-.21.32-.81 1.02-.99 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 4.5c0-.8.6-1.5 1.4-1.5h2.1c.6 0 1.1.4 1.3 1l.9 3.2c.2.6 0 1.2-.5 1.6l-1.4 1.1c1 2.1 2.7 3.8 4.8 4.8l1.1-1.4c.4-.5 1-.7 1.6-.5l3.2.9c.6.2 1 .7 1 1.3v2.1c0 .8-.7 1.4-1.5 1.4C10.8 19.5 4.5 13.2 4.5 5.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="absolute left-0 top-0 z-50 w-full bg-white">

        <div className="mx-auto flex h-[104px] max-w-[1600px] items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16">

          {/* LOGO */}

          <a
            href="#home"
            className="block w-[95px] sm:w-[110px] md:w-[125px]"
          >
            <img
              src="/logo.png"
              alt="HYD Photography"
              className="h-auto w-full object-contain"
            />
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">

            <a
              href="#home"
              className="border-b-2 border-[#f5a400] pb-2 text-[12px] font-bold uppercase tracking-[0.08em]"
            >
              Home
            </a>

            <a
              href="#about"
              className="pb-2 text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
            >
              About
            </a>

            <a
              href="#services"
              className="pb-2 text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
            >
              Services
            </a>

            <a
              href="#portfolio"
              className="pb-2 text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
            >
              Portfolio
            </a>

            <a
              href="#gallery"
              className="pb-2 text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="pb-2 text-[12px] font-bold uppercase tracking-[0.08em] transition hover:text-[#f5a400]"
            >
              Contact
            </a>

          </nav>

          {/* BOOK NOW */}

          <a
            href="#contact"
            className="hidden rounded-full bg-[#f5a400] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-[#df9200] lg:block"
          >
            Book Now
          </a>

          {/* MOBILE BOOK BUTTON */}

          <a
            href="#contact"
            className="rounded-full bg-[#f5a400] px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-white lg:hidden"
          >
            Book Now
          </a>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative overflow-hidden bg-[#050505] pt-[104px]"
      >

        <div className="mx-auto flex min-h-[calc(100vh-104px)] max-w-[1800px] flex-col lg:flex-row">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 flex w-full items-center bg-[#050505] px-7 py-20 sm:px-10 md:px-14 lg:w-[40%] lg:px-16 lg:py-16 xl:px-20">

            <div className="w-full max-w-[590px]">

              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#f5a400] sm:text-sm">
                Capturing Moments
              </p>

              <h1 className="text-[52px] font-black uppercase leading-[0.88] tracking-[-0.045em] text-white sm:text-[66px] md:text-[78px] lg:text-[76px] xl:text-[92px]">

                Creating

                <span className="block text-[#f5a400]">
                  Memories
                </span>

              </h1>

              <p className="mt-8 max-w-[500px] text-base leading-7 text-white/75 md:text-lg lg:text-[17px]">
                We capture real emotions and beautiful moments
                that you will cherish forever.
              </p>

              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-3 bg-[#f5a400] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-[#df9200]"
                >
                  View Portfolio
                  <ArrowIcon />
                </a>

                <a
                  href="#contact"
                  className="border border-[#f5a400] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-[#f5a400]"
                >
                  Contact Us
                </a>

              </div>

              {/* SLIDER */}

              <div className="mt-14 flex items-center gap-4 text-sm">

                <span className="font-bold text-[#f5a400]">
                  01
                </span>

                <div className="h-[2px] w-9 bg-[#f5a400]" />

                <span className="text-white/45">
                  02
                </span>

                <div className="h-px w-9 bg-white/25" />

                <span className="text-white/45">
                  03
                </span>

                <div className="h-px w-9 bg-white/25" />

                <span className="text-white/45">
                  04
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <div className="relative min-h-[590px] w-full overflow-hidden bg-[#111111] sm:min-h-[650px] lg:min-h-0 lg:w-[60%]">

            <img
              src="/images/hero.jpg"
              alt="HYD Photography"
              className="absolute inset-0 h-full w-full object-cover object-[50%_center] lg:object-[50%_center]"
            />

            {/* IMAGE OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/15 via-transparent to-transparent" />

          </div>


          {/* =================================================
              SOCIAL SIDEBAR
          ================================================= */}

          <div className="absolute bottom-10 right-6 z-40 hidden flex-col items-center gap-5 rounded-full border border-white/30 bg-black/25 px-3 py-4 text-white backdrop-blur-md md:flex">

            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:text-[#f5a400]"
            >
              <InstagramIcon />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="transition hover:text-[#f5a400]"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://wa.me/919949530010"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-[#25D366]"
            >
              <WhatsAppIcon />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          <a href="/about">
      ===================================================== */}

      <section
        id="about"
        className="px-6 py-20 md:px-10 md:py-28 lg:px-16"
      >

        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[300px_1fr] lg:items-center">

          {/* LOGO */}

          <div className="flex justify-center lg:justify-start">

            <div className="relative flex aspect-square w-[220px] items-center justify-center border border-black/15 p-8 md:w-[240px]">

              <img
                src="/logo.png"
                alt="HYD Photography logo"
                className="w-full object-contain"
              />

            </div>

          </div>


          {/* CONTENT */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
              Welcome To
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
              HYD{" "}
              <span className="text-[#f5a400]">
                Photography
              </span>
            </h2>

            <p className="mt-6 max-w-[800px] text-base leading-8 text-black/60 md:text-lg">
              We are a team of passionate photographers dedicated to
              capturing your special moments with creativity and
              perfection. From weddings to portraits, we turn your
              memories into timeless treasures.
            </p>


            {/* FEATURES */}

            <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-8">

              <div>
                <div className="text-3xl text-[#f5a400]">
                  ◎
                </div>
                <h3 className="mt-3 text-xs font-bold uppercase leading-5">
                  Professional
                  <br />
                  Team
                </h3>
              </div>

              <div>
                <div className="text-3xl text-[#f5a400]">
                  ☆
                </div>
                <h3 className="mt-3 text-xs font-bold uppercase leading-5">
                  High Quality
                  <br />
                  Results
                </h3>
              </div>

              <div>
                <div className="text-3xl text-[#f5a400]">
                  ◷
                </div>
                <h3 className="mt-3 text-xs font-bold uppercase leading-5">
                  On Time
                  <br />
                  Delivery
                </h3>
              </div>

              <div>
                <div className="text-3xl text-[#f5a400]">
                  ♡
                </div>
                <h3 className="mt-3 text-xs font-bold uppercase leading-5">
                  Customer
                  <br />
                  Satisfaction
                </h3>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="bg-[#faf9f6] px-6 py-20 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-12">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
              What We Do
            </p>

            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Our Services
            </h2>

            <div className="mt-5 h-[3px] w-12 bg-[#f5a400]" />

          </div>


          <div className="grid border border-black/5 bg-white md:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (

              <div
                key={service.number}
                className="group border-b border-black/10 p-7 transition duration-300 hover:bg-[#111111] lg:border-b-0 lg:border-r last:border-r-0"
              >

                <span className="text-2xl font-light text-[#f5a400]">
                  {service.number}
                </span>

                <h3 className="mt-8 min-h-[50px] text-sm font-black uppercase leading-5 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-black/55 group-hover:text-white/60">
                  {service.description}
                </p>

                <div className="mt-6 text-[#f5a400]">
                  <ArrowIcon />
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section
        id="portfolio"
        className="px-6 py-20 md:px-10 md:py-28 lg:px-16"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
                Our Work
              </p>

              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-5xl">
                Recent Stories
              </h2>

            </div>

            <a
              href="#gallery"
              className="inline-flex items-center gap-3 border border-[#f5a400] px-6 py-3 text-xs font-bold uppercase tracking-wider transition hover:bg-[#f5a400] hover:text-white"
            >
              View All Portfolio
              <ArrowIcon />
            </a>

          </div>


          {/* PHOTO GRID */}

          <div
            id="gallery"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >

            {portfolio.map((item) => (

              <a
                key={item.title}
                href="#contact"
                className="group relative aspect-[4/5] overflow-hidden bg-black"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-0 left-0 p-6 text-white">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5a400]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold uppercase">
                    {item.title}
                  </h3>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="bg-[#111111] px-6 py-12 text-white md:px-10 lg:px-16">

        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-10 md:grid-cols-4">

          <div className="text-center">

            <div className="text-4xl font-black text-[#f5a400]">
              500+
            </div>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              Projects Completed
            </p>

          </div>

          <div className="text-center">

            <div className="text-4xl font-black text-[#f5a400]">
              300+
            </div>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              Happy Clients
            </p>

          </div>

          <div className="text-center">

            <div className="text-4xl font-black text-[#f5a400]">
              8+
            </div>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              Years Experience
            </p>

          </div>

          <div className="text-center">

            <div className="text-4xl font-black text-[#f5a400]">
              20K+
            </div>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/70">
              Memories Captured
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#f5a400] px-6 py-16 md:px-10 lg:px-16"
      >

        <div className="absolute inset-0 bg-black/5" />

        <div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <h2 className="max-w-[650px] text-3xl font-black uppercase leading-tight md:text-5xl">
              Let's Capture Your
              <br />
              Beautiful Moments
            </h2>

            <p className="mt-4 text-sm font-medium">
              We are just a message away!
            </p>

          </div>


          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="https://wa.me/919949530010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-md bg-[#111111] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-black/80"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>

            <a
              href="tel:+919949530010"
              className="flex items-center justify-center gap-3 rounded-md border-2 border-[#111111] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#111111] transition hover:bg-[#111111] hover:text-white"
            >
              <PhoneIcon />
              +91 99495 30010
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#111111] px-6 py-12 text-white md:px-10 lg:px-16">

        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-4">

          {/* BRAND */}

          <div>

            <img
              src="/logo.png"
              alt="HYD Photography"
              className="w-[115px] object-contain"
            />

            <p className="mt-5 max-w-[270px] text-xs leading-6 text-white/50">
              Capturing moments, emotions and memories
              that stay with you forever.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f5a400]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-xs text-white/60">

              <a href="#home" className="block hover:text-white">
                Home
              </a>

              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#services" className="block hover:text-white">
                Services
              </a>

              <a href="#portfolio" className="block hover:text-white">
                Portfolio
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>

            </div>

          </div>


          {/* SERVICES */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f5a400]">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-xs text-white/60">

              <p>Wedding Photography</p>
              <p>Pre-Wedding Shoots</p>
              <p>Maternity Photography</p>
              <p>Baby & Kids Photography</p>
              <p>Events Photography</p>

            </div>

          </div>


          {/* FOLLOW */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f5a400]">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-5 text-white">

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-[#f5a400]"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-[#f5a400]"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://wa.me/919949530010"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition hover:text-[#25D366]"
              >
                <WhatsAppIcon />
              </a>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="mx-auto mt-10 max-w-[1500px] border-t border-white/10 pt-6 text-center text-[10px] text-white/40">
          © {new Date().getFullYear()} HYD PHOTOGRAPHY. ALL RIGHTS RESERVED.
        </div>

      </footer>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href="https://wa.me/919949530010"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with HYD Photography on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110 md:bottom-8 md:right-8"
      >
        <WhatsAppIcon />
      </a>

    </main>
  );
}