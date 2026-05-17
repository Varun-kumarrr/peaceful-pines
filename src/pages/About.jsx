import { Link } from "react-router-dom";
import { resorts } from "../data/resorts";

function About() {
  const image = resorts[1]?.images[0] || resorts[0].images[0];

  return (
    <main>
      <section className="relative min-h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={image}
          alt="About Peaceful Pines"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-5 text-white">
          <p className="tracking-[0.3em] uppercase text-green-100 font-semibold">
            About Us
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Peaceful Pines
          </h1>
          <p className="max-w-2xl mx-auto mt-5 text-gray-100 leading-7">
            A nature-inspired resort brand offering peaceful stays in the
            beautiful hills of Almora, Uttarakhand.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#62735a] font-semibold">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#10291b] mt-3">
            Built for Travelers Who Seek Calmness
          </h2>
        </div>

        <div>
          <p className="text-gray-700 leading-8">
            Peaceful Pines was created with a simple idea — to offer calm,
            comfortable, and nature-connected stays in the mountains. Our
            resorts are located around Almora, where guests can enjoy fresh air,
            scenic surroundings, pine forests, village charm, and a peaceful
            break from busy city life.
          </p>

          <p className="text-gray-700 leading-8 mt-5">
            Whether you are planning a family trip, a couple getaway, a group
            stay, or a relaxing workation, Peaceful Pines gives you a warm and
            peaceful environment with clean rooms, beautiful locations, and easy
            booking support.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-[#62735a] font-semibold">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#10291b] mt-2">
              Comfort, Nature, and Peace
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mountain Stays",
                desc: "Peaceful resorts surrounded by scenic hill views and fresh mountain air.",
              },
              {
                title: "Homely Experience",
                desc: "Comfortable rooms, simple hospitality, and a warm stay experience.",
              },
              {
                title: "Easy Travel Support",
                desc: "Direct WhatsApp booking and guidance for choosing the right resort.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f7f1df] rounded-3xl p-7 border border-[#e5dcc5]"
              >
                <h3 className="text-2xl font-bold text-[#10291b]">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "2", label: "Resorts" },
            { number: "16", label: "Rooms" },
            { number: "24/7", label: "Booking Support" },
            { number: "100%", label: "Nature Experience" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 shadow-sm border border-[#e5dcc5]"
            >
              <h3 className="text-4xl font-bold text-[#10291b]">
                {item.number}
              </h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="bg-[#10291b] rounded-[2rem] p-8 md:p-14 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience the Peace of Almora
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-green-100 leading-7">
            Explore our resorts and choose the stay that fits your trip.
          </p>

          <Link
            to="/resorts"
            className="inline-block mt-8 bg-[#f7f1df] text-[#10291b] px-8 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Explore Resorts
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;