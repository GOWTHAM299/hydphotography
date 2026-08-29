const works = [
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

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* HERO */}

      <section className="bg-[#111111] px-6 py-32 text-white md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
            Our Work
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Selected
            <span className="block text-[#f5a400]">
              Stories.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            A selection of moments, emotions and stories captured
            by HYD Photography.
          </p>

        </div>

      </section>


      {/* PORTFOLIO */}

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-6 sm:grid-cols-2">

            {works.map((work) => (

              <a
                key={work.title}
                href="/contact"
                className="group relative aspect-[4/5] overflow-hidden bg-black"
              >

                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5a400]">
                    {work.category}
                  </p>

                  <h2 className="mt-2 text-2xl font-black uppercase md:text-3xl">
                    {work.title}
                  </h2>

                  <p className="mt-3 text-sm text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                    View story →
                  </p>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#f5a400] px-6 py-16 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">
              Have a story to capture?
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
              Let's Create
              <br />
              Something Beautiful.
            </h2>

          </div>

          <a
            href="/contact"
            className="inline-flex w-fit bg-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-black/80"
          >
            Book A Session →
          </a>

        </div>

      </section>

    </main>
  );
}