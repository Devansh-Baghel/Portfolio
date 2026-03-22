import { useState, useEffect } from 'react';
import { useTimeline } from '@opentui/react';
import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
} from '../../colors';
import { bio, socials, resumeUrl } from '../../data';

const INTRO_TEXT = "Hello there, I'm Devansh Baghel, and I build full-stack web apps with modern tools.";

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(INTRO_TEXT.slice(0, i));
      if (i >= INTRO_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <box flexDirection="column" gap={1} height="100%">
      <box border borderStyle="rounded" borderColor={BORDER} padding={2} flexDirection="column" gap={1}>
        <text>
          <span fg={TEXT_PRIMARY}>{typedText}</span>
          {!done && <span fg={LIME}>█</span>}
        </text>
      </box>

      {done && (
        <box flexDirection="column" gap={1} marginTop={1}>
          <text>
            <span fg={TEXT_DIM}>Quick Links</span>
          </text>
          <box flexDirection="row" gap={3}>
            <text>
              <span fg={LIME}>→ </span>
              <a href={resumeUrl}><span fg={TEXT_PRIMARY}>Resume</span></a>
            </text>
            <text>
              <span fg={LIME}>→ </span>
              <a href={socials.github}><span fg={TEXT_PRIMARY}>GitHub</span></a>
            </text>
            <text>
              <span fg={LIME}>→ </span>
              <a href={socials.linkedin}><span fg={TEXT_PRIMARY}>LinkedIn</span></a>
            </text>
            <text>
              <span fg={LIME}>→ </span>
              <a href={socials.twitter}><span fg={TEXT_PRIMARY}>Twitter</span></a>
            </text>
          </box>

          <text marginTop={1}>
            <span fg={TEXT_DIM}>Navigation</span>
          </text>
          <text>
            <span fg={TEXT_SECONDARY}>Use </span>
            <span fg={LIME}>Tab</span>
            <span fg={TEXT_SECONDARY}> or </span>
            <span fg={LIME}>[ ]</span>
            <span fg={TEXT_SECONDARY}> to switch sections, or press </span>
            <span fg={LIME}>1-6</span>
            <span fg={TEXT_SECONDARY}> to jump directly.</span>
          </text>
          <text>
            <span fg={TEXT_SECONDARY}>Press </span>
            <span fg={LIME}>h</span>
            <span fg={TEXT_SECONDARY}> for keyboard shortcuts.</span>
          </text>
        </box>
      )}
    </box>
  );
}
