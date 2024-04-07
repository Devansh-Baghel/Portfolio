import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
}) => (
  <div>
    <h1>Sent by: , {name}!</h1>
    <h3>Message body: {message}</h3>
  </div>
);
