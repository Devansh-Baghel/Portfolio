import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
  AMBER,
} from '../../constants';
import { experience } from '../../data';

export function Experience() {
  return (
    <box flexDirection="column" gap={1} marginTop={1}>
      <text>
        <span fg={LIME}><strong>Work Experience</strong></span>
      </text>

      {experience.map((job, i) => (
        <box
          key={i}
          border
          borderStyle="rounded"
          borderColor={BORDER}
          backgroundColor={BG_CARD}
          padding={2}
          flexDirection="column"
          gap={1}
        >
          <box flexDirection="row" justifyContent="space-between">
            <text>
              <span fg={LIME}><strong>{job.role}</strong></span>
            </text>
            <text>
              <span fg={AMBER}>{job.duration}</span>
            </text>
          </box>
          <text>
            <span fg={TEXT_PRIMARY}>{job.company}</span>
            <span fg={TEXT_DIM}> · </span>
            <span fg={TEXT_SECONDARY}>{job.location}</span>
          </text>
          <box flexDirection="column" gap={0} marginTop={1}>
            {job.responsibilities.map((resp, j) => (
              <text key={j}>
                <span fg={LIME}>  ◆ </span>
                <span fg={TEXT_SECONDARY}>{resp}</span>
              </text>
            ))}
          </box>
        </box>
      ))}
    </box>
  );
}
