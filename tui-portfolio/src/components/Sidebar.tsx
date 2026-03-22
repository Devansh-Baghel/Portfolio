import { LIME, NAME_FONT, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BG_DARK, BORDER, SLATE_900 } from '../constants';
import { name, tagline, bio, socials, resumeUrl } from '../data';
import { openUrl } from '../utils/open-url';

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
        <box backgroundColor={LIME} paddingX={2} height={1} onMouseDown={() => openUrl(resumeUrl)}>
          <text>
            <span fg="#0a0a0a"><strong>Resume</strong></span>
          </text>
        </box>
        <box backgroundColor={SLATE_900} paddingX={2} height={1} onMouseDown={() => openUrl(`mailto:${socials.email.replace('mailto:', '')}`)}>
          <text>
            <span fg="#ffffff"><strong>Contact</strong></span>
          </text>
        </box>
      </box>

      <box marginTop={2} flexDirection="column" gap={1}>
        <box flexDirection="row" gap={1}>
          <box onMouseDown={() => openUrl(socials.github)}>
            <text><span fg={TEXT_DIM}>GitHub</span></text>
          </box>
          <text><span fg={TEXT_DIM}>·</span></text>
          <box onMouseDown={() => openUrl(socials.linkedin)}>
            <text><span fg={TEXT_DIM}>LinkedIn</span></text>
          </box>
        </box>
        <box flexDirection="row" gap={1}>
          <box onMouseDown={() => openUrl(socials.twitter)}>
            <text><span fg={TEXT_DIM}>Twitter</span></text>
          </box>
          <text><span fg={TEXT_DIM}>·</span></text>
          <box onMouseDown={() => openUrl(socials.email)}>
            <text><span fg={TEXT_DIM}>Email</span></text>
          </box>
        </box>
      </box>
    </box>
  );
}
