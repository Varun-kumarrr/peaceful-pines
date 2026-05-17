import BookingForm from "../components/BookingForm";

function Booking() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-[#62735a] font-semibold">Booking Inquiry</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#10291b] mt-2">
              Plan Your Peaceful Stay
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              Fill out the booking inquiry form and send your details directly
              on WhatsApp. Our team will contact you with availability and
              further details.
            </p>

            <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm border border-[#e5dcc5]">
              <h2 className="text-2xl font-bold text-[#10291b]">
                Booking Support
              </h2>
              <p className="mt-3 text-gray-700">Phone / WhatsApp:</p>
              <a
                href="https://wa.me/917541094242"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-2xl font-bold text-[#10291b]"
              >
                7541094242
              </a>

              <p className="mt-5 text-sm text-gray-600 leading-6">
                You can also directly message us on WhatsApp for room
                availability, pricing, and resort suggestions.
              </p>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}

export default Booking;