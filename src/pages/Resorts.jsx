import ResortCard from "../components/ResortCard";
import { resorts } from "../data/resorts";

function Resorts() {
  return (
    <main className="max-w-7xl mx-auto px-5 py-16">
      <div className="text-center mb-12">
        <p className="text-[#62735a] font-semibold">Our Nature Stays</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#10291b] mt-2">
          Explore Our Resorts
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-700">
          Choose from peaceful mountain stays in Almora, designed for comfort,
          calmness, and a refreshing nature experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resort={resort} />
        ))}
      </div>
    </main>
  );
}

export default Resorts;