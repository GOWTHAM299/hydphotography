import { getOptimizedImagePath } from "../lib/image-asset";

const galleryServices = [
  {
    id: "wedding",
    number: "01",
    service: "Wedding Photography",
    images: [
      "/images/wedding/wedding-01.JPG",
      "/images/wedding/03.jpg",
      "/images/wedding/266A7378.JPG",
      "/images/wedding/266A7394.JPG",
      "/images/wedding/266A7409.JPG",
      "/images/wedding/266A7437.JPG",
      "/images/wedding/266A7480.JPG",
      "/images/wedding/266A7488.JPG",
      "/images/wedding/266A7498.JPG",
      "/images/wedding/266A7517.JPG",
      "/images/wedding/266A8049.JPG",
      "/images/wedding/266A8065.JPG",
      "/images/wedding/266A8241.JPG",
      "/images/wedding/266A8449.JPG",
      "/images/wedding/266A9159.JPG",
      "/images/wedding/266A9171.JPG",
      "/images/wedding/266A9174.JPG",
      "/images/wedding/266A9186.JPG",
      "/images/wedding/266A9465.JPG",
      "/images/wedding/266A9502.JPG",
      "/images/wedding/27.jpg",
      "/images/wedding/28.jpg",
      "/images/wedding/32.jpg",
      "/images/wedding/49.jpg",
      "/images/wedding/54.jpg",
      "/images/wedding/55.jpg",
      "/images/wedding/56.jpg",
      "/images/wedding/57.jpg",
    ],
    description:
      "Capturing every emotion, detail and unforgettable moment of your wedding day.",
  },
  {
    id: "pre-wedding",
    number: "02",
    service: "Pre-Wedding Photography",
    images: ["/images/pre-wedding/prewedding-01.jpg"],
    description:
      "Beautiful and natural photographs that tell your story before the big day.",
  },
  {
    id: "maternity",
    number: "03",
    service: "Maternity Photography",
    images: [
      "/images/maternity/33.jpg",
      "/images/maternity/36.jpg",
    ],
    description:
      "Timeless photographs celebrating the beautiful journey into motherhood.",
  },
  {
    id: "baby-kids",
    number: "04",
    service: "Baby & Kids Photography",
    images: ["/images/baby-kids/baby-01.jpg", "/images/baby-kids/001.jpg"],
    description:
      "Preserving the smiles, innocence and little moments you will treasure forever.",
  },
  {
    id: "events-party",
    number: "05",
    service: "Corporate Events & Automotive",
    images: [
      "/images/corporate-events-automotive/01.jpg",
      "/images/corporate-events-automotive/SREE0782.JPG",
    ],
    description:
      "Professional coverage for corporate events, automotive campaigns and brand launches.",
  },
  {
    id: "portrait",
    number: "06",
    service: "Portrait Photography",
    images: [
      "/images/portrait/04.jpg",
      "/images/portrait/05.jpg",
      "/images/portrait/06.jpg",
      "/images/portrait/07.jpg",
      "/images/portrait/09.jpg",
      "/images/portrait/10.jpg",
      "/images/portrait/12.jpg",
      "/images/portrait/22.jpg",
      "/images/portrait/23.jpg",
      "/images/portrait/24.jpg",
      "/images/portrait/25.jpg",
      "/images/portrait/26.jpg",
      "/images/portrait/50.jpg",
    ],
    description:
      "Creative portraits that capture personality, confidence and genuine expressions.",
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
            We Make
            <span className="block text-[#f5a400]">
              Your Dreams.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Our team of expert photographers brings over 35 years of
            experience to every celebration.
          </p>

        </div>

      </section>


      {/* GALLERY */}

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <nav
            aria-label="Gallery services"
            className="mb-10 flex flex-wrap border-b border-black/10"
          >
            {galleryServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="border-b-2 border-transparent px-4 py-4 text-xs font-bold uppercase tracking-wider text-black/55 transition-colors hover:border-[#f5a400] hover:text-[#111111]"
              >
                {service.service}
              </a>
            ))}
          </nav>

          <div>
            {galleryServices.map((service) => (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-8 border-t border-black/10 py-12 md:py-16"
              >
                <div className="mb-8 grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
                  <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
                    {service.number} / 06
                  </p>

                  <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">
                    {service.service}
                  </h2>
                  </div>

                  <div>
                  <p className="mt-5 max-w-xl text-base leading-8 text-black/65">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#111111] transition-colors hover:text-[#df9200]"
                  >
                    Book this service <span aria-hidden="true">→</span>
                  </a>
                  </div>
                </div>

                {service.images.length > 0 ? (
                  <div className="columns-2 gap-3 sm:gap-4 xl:columns-3">
                    {service.images.map((image, imageIndex) => (
                      <div
                        key={image}
                        className="group mb-3 break-inside-avoid overflow-hidden bg-black sm:mb-4"
                      >
                        <img
                          src={getOptimizedImagePath(image)}
                          alt={`${service.service} photo ${imageIndex + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    role="img"
                    aria-label={`${service.service} portfolio photos coming soon`}
                    className="flex aspect-[4/3] max-h-[480px] flex-col justify-between bg-[#111111] p-8 text-white md:p-10"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
                      {service.number} / 06
                    </p>
                    <p className="max-w-xs text-2xl font-black uppercase leading-tight md:text-3xl">
                      Portfolio photos coming soon.
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

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
              Let&apos;s Create
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