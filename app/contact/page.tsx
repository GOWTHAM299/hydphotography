export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* HERO */}

      <section className="bg-[#111111] px-6 py-32 text-white md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            Let's Capture
            <span className="block text-[#f5a400]">
              Your Story.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Tell us about your event, your date and the kind of
            photography experience you're looking for.
          </p>

        </div>

      </section>


      {/* CONTACT CONTENT */}

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">

        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5a400]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Start A
              <span className="block text-[#f5a400]">
                Conversation.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-black/60">
              Planning a wedding, pre-wedding shoot, maternity
              session, birthday or special event? Get in touch
              with us and let's discuss your photography requirements.
            </p>


            <div className="mt-10 space-y-5">

              {/* PHONE */}

              <a
                href="tel:+919949530010"
                className="flex items-center gap-4 border-b border-black/10 pb-5 text-lg font-semibold transition hover:text-[#f5a400]"
              >
                <span className="text-[#f5a400]">
                  ☎
                </span>

                +91 99495 30010
              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/919949530010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-b border-black/10 pb-5 text-lg font-semibold transition hover:text-[#f5a400]"
              >
                <span className="text-[#25D366]">
                  WhatsApp
                </span>

                Chat With Us
              </a>


              {/* LOCATION */}

              <div className="flex items-center gap-4 border-b border-black/10 pb-5 text-lg font-semibold">
                <span className="text-[#f5a400]">
                  ●
                </span>

                Hyderabad, Telangana
              </div>

            </div>

          </div>


          {/* RIGHT FORM */}

          <div className="bg-[#faf9f6] p-7 md:p-10">

            <h3 className="text-2xl font-black uppercase">
              Send An Enquiry
            </h3>

            <p className="mt-2 text-sm text-black/50">
              Fill in your details and contact us through WhatsApp.
            </p>


            <form className="mt-8 space-y-5">

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-black/15 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#f5a400]"
                />

              </div>


              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-black/15 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#f5a400]"
                />

              </div>


              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                  Select Service
                </label>

                <select
                  defaultValue=""
                  className="w-full border border-black/15 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#f5a400]"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>

                  <option>Wedding Photography</option>
                  <option>Pre-Wedding Photography</option>
                  <option>Maternity Photography</option>
                  <option>Baby & Kids Photography</option>
                  <option>Corporate Events & Automotive</option>
                  <option>Portrait Photography</option>
                </select>

              </div>


              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                  Your Requirement
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your event, date and requirements..."
                  className="w-full resize-none border border-black/15 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#f5a400]"
                />

              </div>


              {/* WHATSAPP BUTTON */}

              <a
                href="https://wa.me/919949530010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 bg-[#25D366] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#1fba59]"
              >
                WhatsApp Us
              </a>

            </form>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="bg-[#f5a400] px-6 py-16 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">
              Let's Create Something Beautiful
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
              Your Story.
              <br />
              Our Camera.
            </h2>

          </div>


          <a
            href="https://wa.me/919949530010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit bg-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-black/80"
          >
            Start A Conversation →
          </a>

        </div>

      </section>

    </main>
  );
}