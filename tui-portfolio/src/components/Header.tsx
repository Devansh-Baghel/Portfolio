import { LIME, TEXT_SECONDARY, TEXT_DIM } from '../colors';
import { name, tagline } from '../data';

export function Header() {
  return (
    <box flexDirection="column" paddingX={2} paddingTop={1}>
      <ascii-font text={name.toUpperCase()} font="block" color={LIME} />
      <box marginTop={1} flexDirection="row" gap={1} alignItems="center">
        <text fg={TEXT_SECONDARY}>
          {'> '}
          <span fg={LIME}>{tagline}</span>
        </text>
      </box>
    </box>
  );
}
