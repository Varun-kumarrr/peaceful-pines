import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resorts", path: "/resorts" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f7f1df]/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Peaceful Pines Logo"
            className="w-14 h-14 object-cover rounded-full border border-[#d8cba6]"
          />
          <div>
            <h1 className="text-xl font-bold tracking-wide text-[#10291b]">
              Peaceful Pines
            </h1>
            <p className="text-xs text-[#62735a]">Stay Close to Nature</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-[#10291b]"
                    : "text-[#3f4638] hover:text-[#10291b]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a
          href="https://wa.me/917541094242"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-[#10291b] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#244b34] transition"
        >
          Book Now
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full border border-[#10291b] flex items-center justify-center text-[#10291b]"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#f7f1df] border-t border-[#e5dcc5] px-5 py-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-base font-semibold ${
                    isActive ? "text-[#10291b]" : "text-[#3f4638]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/917541094242"
              target="_blank"
              rel="noreferrer"
              className="bg-[#10291b] text-white px-5 py-3 rounded-full text-center font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;