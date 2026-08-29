export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      <section className="bg-[#111111] px-6 py-32 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
            More Than
            <span className="block text-[#f5a400]">
              Photography.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            We capture emotions, personalities and moments that deserve
            to be remembered for a lifetime.
          </p>

        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2">

          <div>
            <img
              src="/images/hero.jpg"
              alt="HYD Photography"
              className="min-h-[450px] w-full object-cover"
            />
          </div>

          <div className="flex items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
                HYD Photography
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
                We Turn Moments
                <span className="block text-[#f5a400]">
                  Into Memories.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-black/65">
                Every celebration is different. Every family is different.
                Every story deserves to be captured in its own way.
              </p>

              <p className="mt-5 text-base leading-8 text-black/65">
                Our approach focuses on natural expressions, genuine
                emotions and photographs that continue to feel special
                years after they were taken.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-block bg-[#f5a400] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#df9200]"
              >
                Book A Session
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}