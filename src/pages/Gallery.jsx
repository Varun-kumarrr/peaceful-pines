import { resorts } from "../data/resorts";

function Gallery() {
  const galleryImages = resorts.flatMap((resort) =>
    resort.images.map((image) => ({
      image,
      resortName: resort.name,
    }))
  );

  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 py-16 text-center">
        <p className="text-[#62735a] font-semibold">Gallery</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#10291b] mt-2">
          Moments from Peaceful Pines
        </h1>
        <p className="max-w-2xl mx-auto mt-5 text-gray-700">
          Explore the peaceful surroundings, cozy stays, and scenic mountain
          beauty of our resorts.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.resortName}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <p className="font-semibold">{item.resortName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Gallery;