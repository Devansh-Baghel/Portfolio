import React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

export default {
	async fetch(request, env, context): Promise<Response> {
		const resend = new Resend(env.RESEND_API_KEY);

		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['devanshbaghel85@gmail.com'],
			subject: 'hello world',
			react: <EmailTemplate firstName="John" />,
		});

		return Response.json(data);
	},
} satisfies ExportedHandler<Env, ExecutionContext>;
