import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
  CYAN,
} from '../../constants';
import { projects } from '../../data';

export function Projects() {
  return (
    <box flexDirection="column" gap={1} marginTop={1}>
      <text>
        <span fg={LIME}><strong>Selected Projects</strong></span>
      </text>

      {projects.map((project) => (
        <box
          key={project.name}
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
      ))}
    </box>
  );
}
