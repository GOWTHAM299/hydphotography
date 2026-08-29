const services = [
  {
    number: "01",
    title: "Wedding Photography",
    description:
      "Capturing every emotion, detail and unforgettable moment of your wedding day.",
  },
  {
    number: "02",
    title: "Pre-Wedding Photography",
    description:
      "Beautiful and natural photographs that tell your story before the big day.",
  },
  {
    number: "03",
    title: "Maternity Photography",
    description:
      "Timeless photographs celebrating the beautiful journey into motherhood.",
  },
  {
    number: "04",
    title: "Baby & Kids Photography",
    description:
      "Preserving the smiles, innocence and little moments you'll treasure forever.",
  },
  {
    number: "05",
    title: "Events & Party Photography",
    description:
      "Professional coverage for birthdays, celebrations, corporate events and special occasions.",
  },
  {
    number: "06",
    title: "Portrait Photography",
    description:
      "Creative portraits that capture personality, confidence and genuine expressions.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* HERO */}

      <section className="bg-[#111111] px-6 py-32 text-white md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
            What We Do
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            Our
            <span className="block text-[#f5a400]">
              Services.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Professional photography for weddings, portraits, families,
            celebrations and the moments that matter most.
          </p>

        </div>

      </section>


      {/* SERVICES */}

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <a
                key={service.number}
                href="/contact"
                className="group border border-black/10 bg-white p-8 transition duration-300 hover:bg-[#111111] hover:text-white"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-[#f5a400]">
                    {service.number}
                  </span>

                  <span className="text-xl text-[#f5a400] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <h2 className="mt-10 text-xl font-black uppercase leading-6 md:text-2xl">
                  {service.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-black/55 group-hover:text-white/60">
                  {service.description}
                </p>

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
              Ready to create something beautiful?
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
              Let's Capture
              <br />
              Your Story.
            </h2>

          </div>

          <a
            href="/contact"
            className="inline-flex w-fit bg-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-black/80"
          >
            Book A Session →
          </a>

        </div>

      </section>

    </main>
  );
}