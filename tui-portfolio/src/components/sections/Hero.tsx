import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BORDER } from '../../constants';
import { bio } from '../../data';

export function Hero() {
  return (
    <box flexDirection="column" gap={1}>
      <text>
        <span fg={LIME}><strong>About</strong></span>
      </text>
      <text>
        <span fg={TEXT_SECONDARY}>{bio}</span>
      </text>
    </box>
  );
}
