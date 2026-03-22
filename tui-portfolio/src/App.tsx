import { useState } from 'react';
import { useKeyboard, useRenderer } from '@opentui/react';
import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BG_DARK, BG_CARD, BORDER } from './constants';
import { Sidebar } from './components/Sidebar';
import { HelpOverlay } from './components/HelpOverlay';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

export function App() {
  const renderer = useRenderer();
  const [showHelp, setShowHelp] = useState(false);
  const [inForm, setInForm] = useState(false);

  useKeyboard((key) => {
    if (showHelp) {
      if (key.name === 'escape' || key.name === 'enter' || key.name === 'h') {
        setShowHelp(false);
      }
      return;
    }

    if (key.name === 'h' || (key.shift && key.name === '/')) {
      if (!inForm) {
        setShowHelp(true);
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
      {/* Main content area */}
      <box flexDirection="row" flexGrow={1}>
        {/* Left sidebar — static */}
        <box width="40%" border={['right']} borderColor={BORDER}>
          <Sidebar />
        </box>

        {/* Right column — scrollable content */}
        <scrollbox flexGrow={1} focused={!inForm && !showHelp}>
          <box flexDirection="column" padding={2} gap={1}>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Blog />
            <Contact onFormFocus={setInForm} />
          </box>
        </scrollbox>
      </box>

      {/* Footer bar — in normal flow */}
      <box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
        height={1}
        backgroundColor="#0d0d0d"
      >
        <text>
          <span fg={TEXT_DIM}>q</span>
          <span fg={TEXT_SECONDARY}> quit </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> h</span>
          <span fg={TEXT_SECONDARY}> help </span>
          <span fg={TEXT_DIM}>·</span>
          <span fg={TEXT_DIM}> ↑↓</span>
          <span fg={TEXT_SECONDARY}> scroll</span>
        </text>
        <text>
          <span fg={TEXT_DIM}>baghel.dev</span>
        </text>
      </box>

      {showHelp && <HelpOverlay />}
    </box>
  );
}
