import { useState, useRef } from 'react';
import { useKeyboard } from '@opentui/react';
import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
  ERROR,
  SUCCESS,
} from '../../constants';
import { emailWorkerUrl } from '../../data';

type FocusField = 'name' | 'email' | 'message' | 'submit';
type Status = 'idle' | 'sending' | 'success' | 'error';

interface ContactProps {
  onFormFocus: (focused: boolean) => void;
}

export function Contact({ onFormFocus }: ContactProps) {
  const [focusField, setFocusField] = useState<FocusField>('name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const textareaRef = useRef<any>(null);

  useKeyboard((key) => {
    if (key.name === 'tab') {
      const fields: FocusField[] = ['name', 'email', 'message', 'submit'];
      const currentIdx = fields.indexOf(focusField);
      if (key.shift) {
        const prev = (currentIdx - 1 + fields.length) % fields.length;
        setFocusField(fields[prev]!);
      } else {
        const next = (currentIdx + 1) % fields.length;
        setFocusField(fields[next]!);
      }
      return;
    }

    if (key.name === 'enter' && focusField === 'submit') {
      handleSubmit();
      return;
    }

    if (key.name === 'escape') {
      setFocusField('name');
      onFormFocus(false);
      return;
    }

    onFormFocus(true);
  });

  const handleSubmit = async () => {
    const message = textareaRef.current?.plainText ?? '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setStatusMsg('All fields are required.');
      return;
    }

    setStatus('sending');
    setStatusMsg('Sending...');

    try {
      const res = await fetch(emailWorkerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMsg('Message sent successfully!');
        setName('');
        setEmail('');
        textareaRef.current?.setText?.('');
      } else {
        setStatus('error');
        setStatusMsg('Failed to send. Try again later.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Check your connection.');
    }
  };

  return (
    <box flexDirection="column" gap={1} marginTop={1}>
      <text>
        <span fg={LIME}><strong>Contact Me</strong></span>
      </text>
      <text>
        <span fg={TEXT_SECONDARY}>Got a question or want to work together? Send me a message!</span>
      </text>

      <box flexDirection="column" gap={1} marginTop={1}>
        <box flexDirection="row" gap={1} alignItems="center">
          <text width={10}>
            <span fg={focusField === 'name' ? LIME : TEXT_DIM}>Name</span>
          </text>
          <input
            value={name}
            onChange={setName}
            placeholder="Your name"
            focused={focusField === 'name'}
            width={40}
            backgroundColor={BG_CARD}
            textColor={TEXT_PRIMARY}
            cursorColor={LIME}
            focusedBackgroundColor="#1e1e1e"
          />
        </box>

        <box flexDirection="row" gap={1} alignItems="center">
          <text width={10}>
            <span fg={focusField === 'email' ? LIME : TEXT_DIM}>Email</span>
          </text>
          <input
            value={email}
            onChange={setEmail}
            placeholder="your@email.com"
            focused={focusField === 'email'}
            width={40}
            backgroundColor={BG_CARD}
            textColor={TEXT_PRIMARY}
            cursorColor={LIME}
            focusedBackgroundColor="#1e1e1e"
          />
        </box>

        <box flexDirection="column" gap={0}>
          <text>
            <span fg={focusField === 'message' ? LIME : TEXT_DIM}>Message</span>
          </text>
          <textarea
            ref={textareaRef}
            placeholder="Your message..."
            focused={focusField === 'message'}
            width={50}
            height={6}
            wrapMode="word"
          />
        </box>

        <box flexDirection="row" gap={2} alignItems="center" marginTop={1}>
          <box
            backgroundColor={focusField === 'submit' ? LIME : BG_CARD}
            paddingX={2}
            height={1}
            focusable
          >
            <text>
              <span fg={focusField === 'submit' ? '#0a0a0a' : TEXT_PRIMARY}>
                {status === 'sending' ? ' Sending... ' : ' Send Message '}
              </span>
            </text>
          </box>

          {status !== 'idle' && (
            <text>
              <span fg={status === 'success' ? SUCCESS : ERROR}>{statusMsg}</span>
            </text>
          )}
        </box>
      </box>

      <text marginTop={1}>
        <span fg={TEXT_DIM}>Tab to switch fields · Enter on Submit to send · Esc to exit form</span>
      </text>
    </box>
  );
}
