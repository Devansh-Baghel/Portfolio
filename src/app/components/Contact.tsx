"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(formdata: FormData) {
    if (!name || !message || !email) return;

    const emailPromise = axios.post(`/api/email`, { name, email, message }).then(() => {
      setName("");
      setEmail("");
      setMessage("");
    })

    toast.promise(emailPromise, {
      loading: "Sending email...",
      success: "Thank you for contacting me!",
      error: "Something went wrong while sending email :("
    })
  }

  return (
    <section id="contact" className="text-slate-900 p-6 flex flex-col gap-6 mt-32 pb-20">
      <h3 className="text-4xl">Contact me</h3>
      <form action={sendEmail} className="flex flex-col gap-6 text-xl placeholder:text-xl">
        <input
          className="wrapper p-6 md:h-20 border-slate-900 border-[3px] rounded-[30px] placeholder:text-xl placeholder:text-slate-800 focus:outline-none"
          required
          placeholder="Your name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          value={name}
        />
        <input
          className="wrapper p-6 md:h-20 border-slate-900 border-[3px] rounded-[30px] placeholder:text-xl placeholder:text-slate-800 focus:outline-none"
          required
          placeholder="Your email"
          id="email"
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="wrapper p-6 md:h-32 border-slate-900 border-[3px] rounded-[30px] placeholder:text-xl placeholder:text-slate-800 focus:outline-none"
          required
          placeholder="Your message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button className="text-sm md:text-xl px-6 py-4 border-[2px] font-medium border-slate-900 rounded-[30px] bg-slate-900 text-white">
          Send
        </button>
      </form>
    </section>
  );
}
