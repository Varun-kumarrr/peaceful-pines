import { useState } from "react";
import { resorts } from "../data/resorts";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    resortName: resorts[0]?.name || "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Hello Peaceful Pines,

I want to book a stay.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Resort: ${formData.resortName}
Check-in Date: ${formData.checkIn}
Check-out Date: ${formData.checkOut}
Guests: ${formData.guests}
Message: ${formData.message}
`;

    const whatsappUrl = `https://wa.me/917541094242?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-[#e5dcc5]"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Resort Name
          </label>
          <select
            name="resortName"
            required
            value={formData.resortName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b] bg-white"
          >
            {resorts.map((resort) => (
              <option key={resort.id} value={resort.name}>
                {resort.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            required
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            required
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            required
            min="1"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Example: 4"
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-[#10291b] mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-xl border border-[#d8cba6] outline-none focus:border-[#10291b] resize-none"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-[#10291b] text-white py-4 rounded-full font-semibold hover:bg-[#244b34] transition"
      >
        Send Inquiry on WhatsApp
      </button>
    </form>
  );
}

export default BookingForm;