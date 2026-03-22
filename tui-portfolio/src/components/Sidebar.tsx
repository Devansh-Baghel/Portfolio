import { LIME, NAME_FONT, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BG_DARK, BORDER } from '../constants';
import { name, tagline, bio, socials, resumeUrl } from '../data';

export function Sidebar() {
  return (
    <box
      flexDirection="column"
      padding={2}
      height="100%"
      backgroundColor={BG_DARK}
    >
      <ascii-font text="DEVANSH" font={NAME_FONT} color={LIME} />
      <ascii-font text="BAGHEL" font={NAME_FONT} color={LIME} />

      <box marginTop={1} flexDirection="row" gap={1} alignItems="center">
        <text fg={TEXT_SECONDARY}>
          {'> '}
          <span fg={LIME}>{tagline}</span>
        </text>
      </box>

      <box marginTop={1}>
        <text>
          <span fg={TEXT_DIM}>{bio}</span>
        </text>
      </box>

      <box marginTop={2} flexDirection="row" gap={2}>
        <box backgroundColor={LIME} paddingX={2} height={1}>
          <text>
            <a href={resumeUrl}><span fg="#0a0a0a"><strong>Resume</strong></span></a>
          </text>
        </box>
        <box border borderColor={LIME} paddingX={2} height={1}>
          <text>
            <a href={`mailto:${socials.email.replace('mailto:', '')}`}><span fg={LIME}>Contact</span></a>
          </text>
        </box>
      </box>

      <box marginTop={2} flexDirection="column" gap={1}>
        <text>
          <a href={socials.github}><span fg={TEXT_DIM}>GitHub</span></a>
          <span fg={TEXT_DIM}> · </span>
          <a href={socials.linkedin}><span fg={TEXT_DIM}>LinkedIn</span></a>
        </text>
        <text>
          <a href={socials.twitter}><span fg={TEXT_DIM}>Twitter</span></a>
          <span fg={TEXT_DIM}> · </span>
          <a href={socials.email}><span fg={TEXT_DIM}>Email</span></a>
        </text>
      </box>
    </box>
  );
}
