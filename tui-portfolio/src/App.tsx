import { useState } from 'react';
import { useKeyboard, useRenderer } from '@opentui/react';
import { LIME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BG_DARK, BG_CARD, BORDER } from './colors';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HelpOverlay } from './components/HelpOverlay';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

const TABS = ['Home', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'];

export function App() {
  const renderer = useRenderer();
  const [activeTab, setActiveTab] = useState(0);
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

    if (inForm) return;

    const num = parseInt(key.name, 10);
    if (num >= 1 && num <= 6) {
      setActiveTab(num - 1);
      return;
    }

    if (key.name === 'tab') {
      if (key.shift) {
        setActiveTab((t) => (t - 1 + TABS.length) % TABS.length);
      } else {
        setActiveTab((t) => (t + 1) % TABS.length);
      }
      return;
    }

    if (key.name === 'left' || key.name === '[') {
      setActiveTab((t) => (t - 1 + TABS.length) % TABS.length);
      return;
    }
    if (key.name === 'right' || key.name === ']') {
      setActiveTab((t) => (t + 1) % TABS.length);
      return;
    }
  });

  return (
    <box flexDirection="column" width="100%" height="100%" backgroundColor={BG_DARK}>
      <Header />
      <box flexDirection="row" gap={1} paddingLeft={2} paddingRight={2} height={1}>
        {TABS.map((tab, i) => (
          <box
            key={tab}
            backgroundColor={i === activeTab ? LIME : BG_CARD}
            paddingX={1}
            height={1}
          >
            <text fg={i === activeTab ? BG_DARK : TEXT_DIM}>
              {i === activeTab ? ` ${tab} ` : ` ${tab} `}
            </text>
          </box>
        ))}
      </box>
      <box flexGrow={1} paddingLeft={2} paddingRight={2} paddingBottom={1}>
        {activeTab === 0 && <Hero />}
        {activeTab === 1 && <Experience />}
        {activeTab === 2 && <Projects />}
        {activeTab === 3 && <Skills />}
        {activeTab === 4 && <Blog />}
        {activeTab === 5 && <Contact onFormFocus={setInForm} />}
      </box>
      <Footer />
      {showHelp && <HelpOverlay />}
    </box>
  );
}
