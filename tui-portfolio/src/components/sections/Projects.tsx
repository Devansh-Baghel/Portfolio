import { useState } from 'react';
import { useKeyboard } from '@opentui/react';
import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
  CYAN,
} from '../../colors';
import { projects, type Project } from '../../data';

export function Projects() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const project = projects[selectedIdx]!;

  useKeyboard((key) => {
    if (key.name === 'up' || key.name === 'k') {
      setSelectedIdx((i) => Math.max(0, i - 1));
    }
    if (key.name === 'down' || key.name === 'j') {
      setSelectedIdx((i) => Math.min(projects.length - 1, i + 1));
    }
  });

  return (
    <box flexDirection="column" height="100%" gap={1}>
      <text>
        <span fg={LIME}><strong>Selected Projects</strong></span>
      </text>

      <box flexDirection="row" flexGrow={1} gap={2}>
        {/* Project list */}
        <box flexDirection="column" width={25} gap={0}>
          {projects.map((p, i) => (
            <box
              key={p.name}
              backgroundColor={i === selectedIdx ? BG_CARD : 'transparent'}
              paddingX={1}
              paddingY={0}
            >
              <text>
                <span fg={i === selectedIdx ? LIME : TEXT_DIM}>
                  {i === selectedIdx ? '▶ ' : '  '}{p.name}
                </span>
              </text>
            </box>
          ))}
        </box>

        {/* Project detail */}
        <box
          flexGrow={1}
          border
          borderStyle="rounded"
          borderColor={BORDER}
          backgroundColor={BG_CARD}
          padding={2}
          flexDirection="column"
          gap={1}
        >
          <text>
            <span fg={LIME}><strong>{project.name}</strong></span>
          </text>
          <text>
            <span fg={TEXT_PRIMARY}>{project.desc}</span>
          </text>
          <text> </text>
          <text>
            <span fg={TEXT_DIM}>Tech Stack</span>
          </text>
          <box flexDirection="row" flexWrap="wrap" gap={1}>
            {project.tech.map((t) => (
              <box key={t} backgroundColor="#1e1e1e" paddingX={1}>
                <text>
                  <span fg={CYAN}>{t}</span>
                </text>
              </box>
            ))}
          </box>
          <text> </text>
          <box flexDirection="row" gap={3}>
            <text>
              <span fg={LIME}>→ </span>
              <a href={project.deployed}><span fg={TEXT_PRIMARY}>Live Demo</span></a>
            </text>
            <text>
              <span fg={LIME}>→ </span>
              <a href={project.source}><span fg={TEXT_PRIMARY}>Source Code</span></a>
            </text>
          </box>
        </box>
      </box>

      <text>
        <span fg={TEXT_DIM}>↑↓ / jk to navigate</span>
      </text>
    </box>
  );
}
