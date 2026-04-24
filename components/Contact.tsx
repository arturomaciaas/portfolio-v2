"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email me directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-nord-0/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-nord-6 lg:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <p className="mb-8 leading-relaxed">
          I'm always interested in hearing about new opportunities, collaborations, or just 
          chatting about AI and technology. Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-nord-5 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-nord-1/50 border border-nord-2 rounded-md text-nord-6 focus:outline-none focus:ring-2 focus:ring-nord-8 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-nord-5 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-nord-1/50 border border-nord-2 rounded-md text-nord-6 focus:outline-none focus:ring-2 focus:ring-nord-8 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-nord-5 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-nord-1/50 border border-nord-2 rounded-md text-nord-6 focus:outline-none focus:ring-2 focus:ring-nord-8 focus:border-transparent transition-colors resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-nord-11 text-sm">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-nord-14 text-sm">Message sent successfully! I'll get back to you soon.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-nord-8/10 text-nord-8 rounded-md font-medium hover:bg-nord-8/20 focus:outline-none focus:ring-2 focus:ring-nord-8 focus:ring-offset-2 focus:ring-offset-nord-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-nord-2">
          <p className="text-sm text-nord-4">
            Or email me directly at{" "}
            <a
              href="mailto:arturomaciaas@protonmail.com"
              className="text-nord-8 hover:underline"
            >
              arturomaciaas@protonmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
