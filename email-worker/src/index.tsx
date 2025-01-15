import React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

export default {
	async fetch(request, env, context): Promise<Response> {
		const resend = new Resend(env.RESEND_API_KEY);

		const { name, message, email } = await request.json();

		const data = await resend.emails.send({
			from: `${name} <onboarding@resend.dev>`,
			to: ['devanshbaghel85@gmail.com'],
			subject: `Message from ${name} on baghel.dev`,
			react: <EmailTemplate name={name} email={email} message={message} />,
		});

		return Response.json(data);
	},
} satisfies ExportedHandler<Env, ExecutionContext>;
