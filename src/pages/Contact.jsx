import { Link } from "react-router-dom";

function Contact() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <p className="text-[#62735a] font-semibold">Contact Us</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#10291b] mt-2">
            Get in Touch with Peaceful Pines
          </h1>
          <p className="max-w-2xl mx-auto mt-5 text-gray-700">
            For booking, resort details, availability, and travel support, reach
            out to us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#e5dcc5]">
            <h2 className="text-2xl font-bold text-[#10291b]">Phone</h2>
            <p className="mt-3 text-gray-700">Call us for booking support.</p>
            <a
              href="tel:7541094242"
              className="inline-block mt-5 text-xl font-bold text-[#10291b]"
            >
              7541094242
            </a>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#e5dcc5]">
            <h2 className="text-2xl font-bold text-[#10291b]">WhatsApp</h2>
            <p className="mt-3 text-gray-700">
              Send a direct booking inquiry.
            </p>
            <a
              href="https://wa.me/917541094242"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 bg-[#10291b] text-white px-6 py-3 rounded-full font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#e5dcc5]">
            <h2 className="text-2xl font-bold text-[#10291b]">Instagram</h2>
            <p className="mt-3 text-gray-700">
              Follow Peaceful Pines for updates.
            </p>
            <a
              href="https://www.instagram.com/_peacefulpines?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-[#10291b] font-bold underline"
            >
              Visit Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl p-7 shadow-sm border border-[#e5dcc5]">
          <h2 className="text-3xl font-bold text-[#10291b]">Our Locations</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#f7f1df] rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#10291b]">
                Doi Stays Dak Bunglow
              </h3>
              <p className="mt-3 text-gray-700 text-sm leading-6">
                Dak Bungalow by Doi Stays, Hawalbagh Village, Almora,
                Uttarakhand 263636
              </p>
              <a
                href="https://www.google.com/maps/place/Doi+Stays+Dak+Bunglow/@29.6461258,79.6362246,17z/data=!3m1!4b1!4m6!3m5!1s0x39a0b1972578a5e1:0xf25d374e67a5bbb7!8m2!3d29.6461258!4d79.6362246!16s%2Fg%2F11z4p09kv7!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-[#10291b] font-semibold underline"
              >
                View on Google Map
              </a>
            </div>

            <div className="bg-[#f7f1df] rounded-2xl p-5">
              <h3 className="text-xl font-bold text-[#10291b]">
                The Moksha Retreat
              </h3>
              <p className="mt-3 text-gray-700 text-sm leading-6">
                Binsar Road, Kasardevi, NH309A, Matena, Uttarakhand 263601
              </p>
              <a
                href="https://www.google.com/maps/place/The+Moksha+Retreat/@29.6576949,79.6766347,17z/data=!3m1!4b1!4m9!3m8!1s0x39a0b69ec8e3e79b:0x1c906bc807be8cdc!5m2!4m1!1i2!8m2!3d29.6576949!4d79.6766347!16s%2Fg%2F11bwpzkjfw!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-[#10291b] font-semibold underline"
              >
                View on Google Map
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#10291b] rounded-[2rem] p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Want to Book a Stay?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-green-100">
            Send your travel dates and guest details. We will help you with the
            best available option.
          </p>

          <Link
            to="/booking"
            className="inline-block mt-7 bg-[#f7f1df] text-[#10291b] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Go to Booking Form
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Contact;