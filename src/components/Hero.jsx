import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resorts } from "../data/resorts";

function Hero() {
  const heroImages = resorts.flatMap((resort) => resort.images);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {heroImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Peaceful Pines Resort"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 text-white">
        <p className="text-sm md:text-base tracking-[0.35em] uppercase text-green-100 font-semibold">
          Peaceful Pines
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Stay Close to Nature in the Hills of Almora
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-100 leading-8">
          Discover calm mountain resorts surrounded by pine forests, fresh air,
          scenic views, and peaceful Himalayan beauty.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/resorts"
            className="bg-[#f7f1df] text-[#10291b] px-7 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Explore Resorts
          </Link>

          <Link
            to="/booking"
            className="border border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-[#10291b] transition"
          >
            Book Your Stay
          </Link>
        </div>

        <div className="mt-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImage
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;