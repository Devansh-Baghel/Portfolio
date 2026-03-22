import { LIME, TEXT_DIM, TEXT_SECONDARY, BORDER } from '../colors';
import { socials } from '../data';

export function Footer() {
  return (
    <box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingX={2}
      height={1}
    >
      <text>
        <span fg={TEXT_DIM}>q</span>
        <span fg={TEXT_SECONDARY}> quit </span>
        <span fg={TEXT_DIM}>·</span>
        <span fg={TEXT_DIM}> h</span>
        <span fg={TEXT_SECONDARY}> help </span>
        <span fg={TEXT_DIM}>·</span>
        <span fg={TEXT_DIM}> 1-6</span>
        <span fg={TEXT_SECONDARY}> navigate</span>
      </text>
      <text>
        <a href={socials.github}><span fg={TEXT_DIM}>github</span></a>
        <span fg={TEXT_DIM}> · </span>
        <a href={socials.linkedin}><span fg={TEXT_DIM}>linkedin</span></a>
        <span fg={TEXT_DIM}> · </span>
        <a href={socials.twitter}><span fg={TEXT_DIM}>twitter</span></a>
      </text>
    </box>
  );
}
