import {
  LIME,
  TEXT_PRIMARY,
  BG_CARD,
  BORDER,
} from '../../constants';
import { skills } from '../../data';

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#f59e0b',
  Backend: '#06b6d4',
  Misc: '#a78bfa',
};

export function Skills() {
  return (
    <box flexDirection="column" gap={1} marginTop={1}>
      <text>
        <span fg={LIME}><strong>Tech Stack &amp; Tools</strong></span>
      </text>

      <box flexDirection="column" gap={1}>
        {skills.map((category) => (
          <box
            key={category.name}
            border
            borderStyle="rounded"
            borderColor={BORDER}
            backgroundColor={BG_CARD}
            padding={2}
            flexDirection="column"
            gap={1}
          >
            <text>
              <span fg={CATEGORY_COLORS[category.name] ?? LIME}>
                <strong>{category.name}</strong>
              </span>
            </text>
            <box flexDirection="row" flexWrap="wrap" gap={2}>
              {category.skills.map((skill) => (
                <box key={skill} backgroundColor="#1e1e1e" paddingX={1}>
                  <text>
                    <span fg={TEXT_PRIMARY}>{skill}</span>
                  </text>
                </box>
              ))}
            </box>
          </box>
        ))}
      </box>
    </box>
  );
}
