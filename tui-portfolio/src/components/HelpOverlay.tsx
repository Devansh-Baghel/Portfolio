import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BORDER } from '../colors';

export function HelpOverlay() {
  return (
    <box
      position="absolute"
      zIndex={100}
      left={8}
      top={4}
      width={50}
      height={16}
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
        <span fg={TEXT_DIM}>1-6</span>
        <span fg={TEXT_PRIMARY}>        Jump to section</span>
      </text>
      <text>
        <span fg={TEXT_DIM}>Tab / [  ]</span>
        <span fg={TEXT_PRIMARY}>   Navigate sections</span>
      </text>
      <text>
        <span fg={TEXT_DIM}>↑ / ↓</span>
        <span fg={TEXT_PRIMARY}>     Scroll content</span>
      </text>
      <text>
        <span fg={TEXT_DIM}>Enter</span>
        <span fg={TEXT_PRIMARY}>     Select / confirm</span>
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
