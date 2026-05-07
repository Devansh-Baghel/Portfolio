'use client';

import { useState } from 'react';
import { gooeyToast } from '@baghel/goey-toast';
import ScrollReveal from '@/components/ScrollReveal';
import { sendContactForm } from '@/lib/email';
import { cn } from '@/lib/utils';
import { inputBase, buttonFilled } from '@/utils/constants';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function sendEmail(formdata: FormData) {
    if (!name || !message || !email) return;

    const emailPromise = sendContactForm(name, email, message).then(() => {
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
      style={{
        backgroundImage: 'url("/Grad_05.webp")',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat-y',
      }}
    >
      <ScrollReveal>
        <h3 className="contact-title mb-4 font-heading text-4xl">
          Contact me
        </h3>
      </ScrollReveal>
      <form
        action={sendEmail}
        className="flex flex-col gap-6 text-xl placeholder:text-xl"
      >
        <ScrollReveal>
          <div className="w-full">
            <input
              className={cn('wrapper', inputBase, 'w-full p-6 md:h-20')}
              required
              placeholder="Your name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              value={name}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="w-full">
            <input
              className={cn('wrapper', inputBase, 'w-full p-6 md:h-20')}
              required
              placeholder="Your email"
              id="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="w-full">
            <textarea
              className={cn('wrapper', inputBase, 'w-full p-6 md:h-32')}
              required
              placeholder="Your message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <button className={cn(buttonFilled, 'w-full max-w-[600px] px-6 py-4 text-sm shadow-[4px_4px_0px_0px_#84cc16] md:text-xl')}>
            Send
          </button>
        </ScrollReveal>
      </form>
    </section>
  );
}
