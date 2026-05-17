import { Link } from "react-router-dom";

function ResortCard({ resort }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition border border-[#e5dcc5]">
      <div className="h-64 overflow-hidden">
        <img
          src={resort.images[0]}
          alt={resort.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold text-[#62735a] mb-2">
          {resort.rooms} Rooms • Starting {resort.price}
        </p>

        <h2 className="text-2xl font-bold text-[#10291b]">{resort.name}</h2>

        <p className="mt-3 text-gray-600 text-sm leading-6">
          {resort.shortDescription}
        </p>

        <p className="mt-3 text-sm text-gray-500">{resort.location}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/resorts/${resort.slug}`}
            className="bg-[#10291b] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#244b34] transition"
          >
            View Details
          </Link>

          <a
            href={`https://wa.me/91${resort.contact}?text=Hello%20Peaceful%20Pines,%20I%20want%20to%20book%20${encodeURIComponent(
              resort.name
            )}`}
            target="_blank"
            rel="noreferrer"
            className="border border-[#10291b] text-[#10291b] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#10291b] hover:text-white transition"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResortCard;