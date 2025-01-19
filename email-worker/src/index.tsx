import React from 'react';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

const app = new Hono();

app.use(
	'/api/*',
	cors({ origin: ['https://baghel.dev', 'http://localhost:3000', 'http://localhost:8771', 'https://portfolio-pages.pages.dev/'] }),
);

app.post('/api/email', async (c) => {
	const resend = new Resend(c.env.RESEND_API_KEY);

	const { name, message, email } = await c.req.json();

	const { data, error } = await resend.emails.send({
		from: `${name} <onboarding@resend.dev>`,
		to: ['devanshbaghel85@gmail.com'],
		subject: `Message from ${name} on baghel.dev`,
		react: <EmailTemplate name={name} email={email} message={message} />,
	});

	if (error) {
		return c.json(error, 400);
	}

	return c.json(data);
});

export default app;
