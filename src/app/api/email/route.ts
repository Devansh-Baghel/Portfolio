import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, message } = reqBody;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!message)
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );

    const data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["devanshbaghel85@gmail.com"],
      subject: "Someone Contacted You",
      react: EmailTemplate({ name, message }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
