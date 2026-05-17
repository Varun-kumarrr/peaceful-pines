import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ResortCard from "../components/ResortCard";
import { resorts } from "../data/resorts";

function Home() {
  return (
    <main>
      <Hero />

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="text-[#62735a] font-semibold">Our Nature Stays</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#10291b] mt-2">
            Featured Resorts
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-700">
            Choose from peaceful mountain stays designed for comfort, privacy,
            and a refreshing nature experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resorts.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#62735a] font-semibold">About Peaceful Pines</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#10291b] mt-3">
              A Peaceful Escape into the Mountains
            </h2>
          </div>

          <div>
            <p className="text-gray-700 leading-8">
              Peaceful Pines offers calm and cozy resort stays in Almora,
              Uttarakhand. Our resorts are designed for travelers who want to
              relax away from city noise and experience fresh mountain air,
              pine-covered surroundings, scenic views, and warm hospitality.
            </p>

            <Link
              to="/about"
              className="inline-block mt-6 bg-[#10291b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#244b34] transition"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="text-[#62735a] font-semibold">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#10291b] mt-2">
            Designed for Peaceful Mountain Living
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Nature Stay",
              desc: "Surrounded by pine trees, fresh air, and calm mountain views.",
            },
            {
              title: "Cozy Rooms",
              desc: "Clean and comfortable rooms for families, couples, and groups.",
            },
            {
              title: "Easy Booking",
              desc: "Book directly through WhatsApp without complicated steps.",
            },
            {
              title: "Almora Location",
              desc: "Located near peaceful hill areas and scenic travel spots.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#e5dcc5]"
            >
              <div className="w-12 h-12 rounded-full bg-[#10291b] text-white flex items-center justify-center font-bold mb-5">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-[#10291b]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="bg-[#10291b] rounded-[2rem] p-8 md:p-14 text-center text-white">
          <p className="text-green-100 font-semibold">Plan Your Stay</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Ready for a Peaceful Mountain Getaway?
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-green-100 leading-7">
            Send us your travel dates and guest details. We’ll help you choose
            the best resort for your stay.
          </p>

          <Link
            to="/booking"
            className="inline-block mt-8 bg-[#f7f1df] text-[#10291b] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Send Booking Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;