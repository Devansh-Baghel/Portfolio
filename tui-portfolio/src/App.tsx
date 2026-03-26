import { useState, useCallback, useRef } from 'react';
import { useKeyboard, useRenderer } from '@opentui/react';
import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BG_DARK, BORDER } from './constants';
import { Sidebar } from './components/Sidebar';
import { HelpOverlay } from './components/HelpOverlay';
import { CommandPalette, commands } from './components/CommandPalette';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { openUrl } from './utils/open-url';

export function App() {
  const renderer = useRenderer();
  const [showHelp, setShowHelp] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [commandIndex, setCommandIndex] = useState(0);
  const commandIndexRef = useRef(0);
  const [inForm, setInForm] = useState(false);

  const handleCommandSelect = useCallback((index: number) => {
    openUrl(commands[index]!.url);
    setShowCommandPalette(false);
    setCommandIndex(0);
    commandIndexRef.current = 0;
  }, []);

  useKeyboard((key) => {
    if (showHelp) {
      if (key.name === 'escape' || key.name === 'enter' || key.name === 'h') {
        setShowHelp(false);
      }
      return;
    }

    if (showCommandPalette) {
      if (key.name === 'escape') {
        setShowCommandPalette(false);
        setCommandIndex(0);
        commandIndexRef.current = 0;
        return;
      }
      if (key.name === 'up' || key.name === 'k') {
        setCommandIndex((i) => {
          const next = Math.max(0, i - 1);
          commandIndexRef.current = next;
          return next;
        });
        return;
      }
      if (key.name === 'down' || key.name === 'j') {
        setCommandIndex((i) => {
          const next = Math.min(commands.length - 1, i + 1);
          commandIndexRef.current = next;
          return next;
        });
        return;
      }
      if (key.name === 'enter') {
        handleCommandSelect(commandIndexRef.current);
        return;
      }
      return;
    }

    if (key.name === 'h' || (key.shift && key.name === '/')) {
      if (!inForm) {
        setShowHelp(true);
        return;
      }
    }

    if (key.name === 'c') {
      if (!inForm) {
        setShowCommandPalette(true);
        return;
      }
    }

    if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
      renderer.destroy();
      return;
    }
  });

  return (
    <box flexDirection="column" width="100%" height="100%" backgroundColor={BG_DARK}>
      <box flexDirection="row" flexGrow={1}>
        <box width="40%" border={['right']} borderColor={BORDER} overflow="hidden">
          <Sidebar />
        </box>

        <scrollbox flexGrow={1} focused={!inForm && !showHelp && !showCommandPalette}>
          <box flexDirection="column" padding={2} gap={1}>
            <Hero />
            <Experience />
            <Projects />
            {/* <Skills /> */}
            {/* <Blog /> */}
            {/* <Contact onFormFocus={setInForm} /> */}
          </box>
        </scrollbox>
      </box>

      <box flexDirection="row" justifyContent="space-between" paddingX={2} height={1} backgroundColor="#0d0d0d">
        <text>
          <span fg={TEXT_DIM}>q</span>
          <span fg={TEXT_SECONDARY}> quit </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> h</span>
          <span fg={TEXT_SECONDARY}> help </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> c</span>
          <span fg={TEXT_SECONDARY}> commands </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> ↑↓</span>
          <span fg={TEXT_SECONDARY}> scroll</span>
        </text>
        <text fg={TEXT_DIM}>baghel.dev</text>
      </box>

      {showHelp && <HelpOverlay />}
      {showCommandPalette && <CommandPalette selectedIndex={commandIndex} onSelect={handleCommandSelect} />}
    </box>
  );
}
