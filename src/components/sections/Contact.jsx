import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! something went wrong. Please resend your message.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r 
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...FormData, name: e.target.value })
                }
                className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              ></input>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="example@gmail.com"
                required
                onChange={(e) =>
                  setFormData({ ...FormData, email: e.target.value })
                }
                className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              ></input>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                placeholder="Your Message..."
                required
                onChange={(e) =>
                  setFormData({ ...FormData, message: e.target.value })
                }
                className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded 
                        font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
