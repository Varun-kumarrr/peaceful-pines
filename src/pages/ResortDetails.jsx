import { Link, useParams } from "react-router-dom";
import { resorts } from "../data/resorts";

function ResortDetails() {
  const { slug } = useParams();

  const resort = resorts.find((item) => item.slug === slug);

  if (!resort) {
    return (
      <main className="max-w-5xl mx-auto px-5 py-16 text-center">
        <h1 className="text-4xl font-bold text-[#10291b]">
          Resort Not Found
        </h1>
        <p className="mt-4 text-gray-700">
          The resort you are looking for does not exist.
        </p>
        <Link
          to="/resorts"
          className="inline-block mt-6 bg-[#10291b] text-white px-6 py-3 rounded-full"
        >
          Back to Resorts
        </Link>
      </main>
    );
  }

  const whatsappMessage = `Hello Peaceful Pines, I want to book ${resort.name}. Please share availability and details.`;

  return (
    <main className="max-w-7xl mx-auto px-5 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={resort.images[0]}
            alt={resort.name}
            className="w-full h-[420px] object-cover rounded-3xl shadow-md"
          />

          <div className="grid grid-cols-2 gap-4 mt-4">
            {resort.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${resort.name} ${index + 2}`}
                className="w-full h-48 object-cover rounded-2xl shadow-sm"
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-md border border-[#e5dcc5]">
          <p className="text-[#62735a] font-semibold mb-2">
            Peaceful Pines Resort
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#10291b]">
            {resort.name}
          </h1>

          <p className="mt-4 text-gray-600 leading-7">{resort.location}</p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f7f1df] rounded-2xl p-4">
              <p className="text-sm text-gray-500">Starting Price</p>
              <h3 className="text-xl font-bold text-[#10291b]">
                {resort.price}
              </h3>
            </div>

            <div className="bg-[#f7f1df] rounded-2xl p-4">
              <p className="text-sm text-gray-500">Rooms</p>
              <h3 className="text-xl font-bold text-[#10291b]">
                {resort.rooms}
              </h3>
            </div>
          </div>

          <p className="text-gray-700 leading-7">{resort.fullDescription}</p>

          <div className="mt-7">
            <h2 className="text-2xl font-bold text-[#10291b] mb-4">
              Facilities
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              {resort.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-[#f7f1df] px-4 py-3 rounded-xl text-sm text-gray-700"
                >
                  ✓ {facility}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={resort.mapLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#10291b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#244b34] transition"
            >
              View on Google Map
            </a>

            <a
              href={`https://wa.me/91${resort.contact}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="border border-[#10291b] text-[#10291b] px-6 py-3 rounded-full font-semibold hover:bg-[#10291b] hover:text-white transition"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResortDetails;