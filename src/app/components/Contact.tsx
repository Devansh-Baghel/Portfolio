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
    <section id="contact">
      <h3>Contact me</h3>
      <form action={sendEmail}>
        <input
          required
          placeholder="Your name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Your email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          required
          placeholder="Your message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button>Send</button>
      </form>
    </section>
  );
}
