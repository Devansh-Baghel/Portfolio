'use client';

import axios from 'axios';
import { useState } from 'react';
import { gooeyToast } from '@baghel/goey-toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function sendEmail(formdata: FormData) {
    if (!name || !message || !email) return;

    const emailPromise = axios
      .post('https://email-worker.dbaghel.workers.dev/api/email', {
        name,
        email,
        message,
      })
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
      });

    gooeyToast.promise(emailPromise, {
      loading: 'Sending email...',
      success: 'Thank you for contacting me!',
      error: 'Something went wrong while sending email :(',
    });
  }

  return (
    <section
      id="contact"
      className="mt-32 flex flex-col gap-6 px-6 pt-6 text-slate-900"
    >
      <h3 className="contact-title motion-preset-slide-right mb-4 font-heading text-4xl">Contact me</h3>
      <form
        action={sendEmail}
        className="flex flex-col gap-6 text-xl placeholder:text-xl"
      >
        <div className="w-full motion-preset-slide-right">
          <input
            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-20"
            required
            placeholder="Your name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            value={name}
          />
        </div>
        <div className="w-full motion-preset-slide-right motion-delay-150">
          <input
            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-20"
            required
            placeholder="Your email"
            id="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full motion-preset-slide-right motion-delay-300">
          <textarea
            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-32"
            required
            placeholder="Your message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>

        <button className="max-w-[600px] rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-xl motion-preset-slide-right motion-delay-450">
          Send
        </button>
      </form>
    </section>
  );
}
