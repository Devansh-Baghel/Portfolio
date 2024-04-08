"use client";

import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(formdata: FormData) {
    if (!name || !message || !email) return;

    axios.post(`/api/email`, { name, email, message });
  }

  return (
    <section
      className="md:absolute md:right-12 top-[320vh] flex flex-col gap-6 mt-24 ml-6 sm:ml-10 md:ml-0 mb-80"
      id="contact"
    >
      <h3 className="text-4xl mb-4 text-slate-900">Contact me</h3>
      <form
        className="flex flex-col gap-6 text-xl placeholder:text-xl"
        action={sendEmail}
      >
        <input
          className="wrapper p-6 md:h-20 border-slate-900 border-[3px] rounded-[30px] md:w-[600px] placeholder:text-xl placeholder:text-slate-800"
          required
          placeholder="Your name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="wrapper p-6 md:h-20 border-slate-900 border-[3px] rounded-[30px] md:w-[600px] placeholder:text-xl placeholder:text-slate-800"
          required
          placeholder="Your email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="wrapper p-6 md:h-32 border-slate-900 border-[3px] rounded-[30px] md:w-[600px] placeholder:text-xl placeholder:text-slate-800"
          required
          placeholder="Your message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="text-sm md:text-xl px-6 py-4 border-[2px] font-medium border-slate-900 rounded-[30px] bg-slate-900 text-white">
          Send
        </button>
      </form>
    </section>
  );
}
