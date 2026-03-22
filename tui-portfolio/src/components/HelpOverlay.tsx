import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM } from '../constants';

export function HelpOverlay() {
  return (
    <box
      position="absolute"
      zIndex={100}
      left="45%"
      top={5}
      width={40}
      height={12}
      border
      borderStyle="double"
      borderColor={LIME}
      backgroundColor="#0a0a0a"
      padding={1}
    >
      <text>
        <span fg={LIME}><strong>Keyboard Shortcuts</strong></span>
      </text>
      <text> </text>
      <text>
        <span fg={TEXT_DIM}>q / Ctrl+C</span>
        <span fg={TEXT_PRIMARY}>   Quit</span>
      </text>
      <text>
        <span fg={TEXT_DIM}>h / ?</span>
        <span fg={TEXT_PRIMARY}>       Toggle this help</span>
      </text>
      <text>
        <span fg={TEXT_DIM}>↑ / ↓ / j / k</span>
        <span fg={TEXT_PRIMARY}> Scroll</span>
      </text>
      <text>
        <span fg={TEXT_DIM}>Tab</span>
        <span fg={TEXT_PRIMARY}>        Cycle form fields</span>
      </text>
      <text> </text>
      <text>
        <span fg={TEXT_SECONDARY}>Press </span>
        <span fg={LIME}>h</span>
        <span fg={TEXT_SECONDARY}> or </span>
        <span fg={LIME}>Esc</span>
        <span fg={TEXT_SECONDARY}> to close</span>
      </text>
    </box>
  );
}
