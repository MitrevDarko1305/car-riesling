"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Placeholder — wire this to mailto, Formspree, or your own API later
    const subject = encodeURIComponent("New inquiry from Car-Riesling website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@car-riesling.de?subject=${subject}&body=${body}`;

    setStatus("sent");
  };

  return (
    <div className="bg-background border border-white/10 pt-12  p-2 md:p-8 max-w-md mx-auto w-full">
      <h2 className="text-xl font-bold text-white mb-2">Get in Touch</h2>
      <p className="text-light/50 text-[14px] mb-8">
        Have a question about a vehicle or want to schedule a test drive?
        Send us a message and we&apos;ll get back to you quickly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-start text-light/50 mb-2 ">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10  px-4 py-1.5 text-white placeholder:text-light/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-start text-light/50 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@example.com"
            className="w-full bg-white/5 border border-white/10  px-4 py-1.5 text-white placeholder:text-light/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
        
        {/*
         <div>
          <label className="block text-[12px] font-medium text-light/50 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 172 1058392"
            className="w-full bg-white/5 border border-white/10  px-4 py-1.5 placeholder:text-light/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
        */}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-accent md:mt-6 mt-4 mb-7 md:mb-0 hover:bg-background cursor-pointer text-light text-[13px] font-extrabold py-3 transition-colors disabled:opacity-50"
        >
          {status === "sent" ? "Message Sent" : "Send Message"}
        </button>
      </form>
    </div>
  );
}