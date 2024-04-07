import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>
      Sent by: , {name} {email}!
    </h1>
    <h3>Message body: {message}</h3>
  </div>
);
