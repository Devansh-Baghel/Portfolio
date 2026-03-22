import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM } from '../constants';

export function HelpOverlay() {
  return (
    <box
      position="absolute"
      left={0}
      top={0}
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      zIndex={100}
      backgroundColor="#00000080"
    >
      <box
        width={50}
        height={16}
        border
        borderColor={LIME}
        backgroundColor="#0a0a0a"
        padding={2}
      >
        <text>
          <span fg={LIME}><strong>Keyboard Shortcuts</strong></span>
        </text>
        <text> </text>
        <text>
          <span fg={TEXT_DIM}>q / Ctrl+C</span>
          <span fg={TEXT_PRIMARY}>      Quit</span>
        </text>
        <text>
          <span fg={TEXT_DIM}>h / ?</span>
          <span fg={TEXT_PRIMARY}>          Toggle this help</span>
        </text>
        <text>
          <span fg={TEXT_DIM}>↑ / ↓ / j / k</span>
          <span fg={TEXT_PRIMARY}>  Scroll</span>
        </text>
        <text>
          <span fg={TEXT_DIM}>Tab</span>
          <span fg={TEXT_PRIMARY}>           Cycle form fields</span>
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
    </box>
  );
}
