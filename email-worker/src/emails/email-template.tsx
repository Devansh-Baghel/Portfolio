import * as React from 'react';

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
  <div
    style={{
      fontFamily: "'Poppins', Arial, sans-serif",
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      borderRadius: '12px',
      padding: '20px',
      color: '#333',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    }}
  >
    <h2
      style={{
        textAlign: 'center',
        color: '#333',
        fontSize: '1.5em',
        marginBottom: '16px',
      }}
    >
      ✉️ New Contact Form Submission
    </h2>
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '16px',
        borderRadius: '8px',
      }}
    >
      <p style={{ fontWeight: '600', marginBottom: '8px' }}>
        👤 <strong>Name:</strong> {name}
      </p>
      <p style={{ fontWeight: '600', marginBottom: '8px' }}>
        📧 <strong>Email:</strong> {email}
      </p>
      <p style={{ fontWeight: '600', marginBottom: '8px' }}>
        📝 <strong>Message:</strong>
      </p>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {message}
      </p>
    </div>
    <footer
      style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '0.9em',
        color: '#777',
      }}
    >
      This email was generated from your portfolio contact form. 💻
    </footer>
  </div>
);

export default EmailTemplate;
