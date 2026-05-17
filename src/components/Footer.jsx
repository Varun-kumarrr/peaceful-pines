import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#10291b] text-white mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Peaceful Pines</h2>
          <p className="mt-3 text-sm text-green-100 leading-6">
            Peaceful Pines brings you calm mountain stays surrounded by pine
            forests, scenic hills, and fresh Himalayan air.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-green-100">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/resorts">Resorts</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm text-green-100">Phone: 7541094242</p>
          <p className="text-sm text-green-100 mt-2">
            Resorts in Almora, Uttarakhand
          </p>

          <a
            href="https://www.instagram.com/_peacefulpines?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm underline text-green-100"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-green-900 py-4 text-center text-sm text-green-100">
        © {new Date().getFullYear()} Peaceful Pines. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;