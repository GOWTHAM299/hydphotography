const gallery = [
  {
    image: "/images/wedding-01.jpg",
    title: "Wedding Stories",
    category: "Wedding",
  },
  {
    image: "/images/prewedding-01.jpg",
    title: "Beautiful Beginnings",
    category: "Pre-Wedding",
  },
  {
    image: "/images/maternity-01.jpg",
    title: "Motherhood",
    category: "Maternity",
  },
  {
    image: "/images/baby-01.jpg",
    title: "Little Moments",
    category: "Baby & Kids",
  },
  {
    image: "/images/hero.jpg",
    title: "Behind The Lens",
    category: "HYD Photography",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* HERO */}

      <section className="bg-[#111111] px-6 py-32 text-white md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
            Gallery
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Moments
            <span className="block text-[#f5a400]">
              In Frames.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            A collection of photographs capturing genuine emotions,
            celebrations and unforgettable moments.
          </p>

        </div>

      </section>


      {/* GALLERY */}

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1400px] columns-1 gap-5 sm:columns-2 lg:columns-3">

          {gallery.map((item, index) => (

            <div
              key={`${item.image}-${index}`}
              className="group relative mb-5 break-inside-avoid overflow-hidden bg-black"
            >

              <img
                src={item.image}
                alt={item.title}
                className="block w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5a400]">
                  {item.category}
                </p>

                <h2 className="mt-2 text-xl font-black uppercase">
                  {item.title}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#f5a400] px-6 py-16 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">
              Your story deserves to be remembered
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
              Let's Create
              <br />
              Beautiful Memories.
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