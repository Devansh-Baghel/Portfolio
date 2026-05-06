export async function sendContactForm(
  name: string,
  email: string,
  message: string,
): Promise<void> {
  const workerUrl = process.env.NEXT_PUBLIC_EMAIL_WORKER_URL;
  if (!workerUrl) throw new Error('Email worker URL not configured');

  const res = await fetch(workerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) throw new Error('Failed to send email');
}
