import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BG_DARK, SLATE_900 } from '../constants';
import { socials, resumeUrl } from '../data';

export interface Command {
  name: string;
  description: string;
  url: string;
}

export const commands: Command[] = [
  { name: 'GitHub', description: 'github.com/devansh-baghel', url: socials.github },
  { name: 'LinkedIn', description: 'linkedin.com/in/devanshbaghel', url: socials.linkedin },
  { name: 'Twitter', description: '@bagheldotdev', url: socials.twitter },
  { name: 'Email', description: 'hello@baghel.dev', url: socials.email },
  { name: 'Resume', description: 'baghel.dev/resume.pdf', url: resumeUrl },
];

interface CommandPaletteProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function CommandPalette({ selectedIndex, onSelect }: CommandPaletteProps) {
  return (
    <box
      position="absolute"
      left={0}
      top={0}
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      zIndex={100}
      backgroundColor="#00000080"
    >
      <box flexDirection="column" width={50} border borderColor={LIME} backgroundColor={BG_DARK} padding={2}>
        <text>
          <span fg={LIME}><strong>Commands</strong></span>
        </text>

        <box height={1} />

        {commands.map((cmd, i) => (
          <box
            key={cmd.name}
            paddingX={1}
            height={1}
            backgroundColor={i === selectedIndex ? SLATE_900 : 'transparent'}
            onMouseDown={() => onSelect(i)}
          >
            <text>
              <span fg={i === selectedIndex ? LIME : TEXT_PRIMARY}>{cmd.name}</span>
              <span fg={TEXT_DIM}> — {cmd.description}</span>
            </text>
          </box>
        ))}

        <box height={1} />

        <text>
          <span fg={TEXT_DIM}>↑↓</span>
          <span fg={TEXT_SECONDARY}> navigate </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> Enter</span>
          <span fg={TEXT_SECONDARY}> select </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> Esc</span>
          <span fg={TEXT_SECONDARY}> close</span>
        </text>
      </box>
    </box>
  );
}
