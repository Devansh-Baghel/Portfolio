import { useState } from 'react';
import { useKeyboard } from '@opentui/react';
import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
  CYAN,
  AMBER,
} from '../../colors';
import { blogPosts } from '../../data';
import { openUrl } from '../../utils/open-url';

export function Blog() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const post = blogPosts[selectedIdx]!;

  useKeyboard((key) => {
    if (key.name === 'up' || key.name === 'k') {
      setSelectedIdx((i) => Math.max(0, i - 1));
    }
    if (key.name === 'down' || key.name === 'j') {
      setSelectedIdx((i) => Math.min(blogPosts.length - 1, i + 1));
    }
    if (key.name === 'enter') {
      openUrl(`https://baghel.dev/blog/${post.slug}`);
    }
  });

  return (
    <box flexDirection="column" height="100%" gap={1}>
      <text>
        <span fg={LIME}><strong>Blog Posts</strong></span>
      </text>

      <box flexDirection="row" flexGrow={1} gap={2}>
        {/* Post list */}
        <box flexDirection="column" width={30} gap={0}>
          {blogPosts.map((p, i) => (
            <box
              key={p.slug}
              backgroundColor={i === selectedIdx ? BG_CARD : 'transparent'}
              paddingX={1}
              paddingY={0}
              flexDirection="column"
            >
              <text>
                <span fg={i === selectedIdx ? LIME : TEXT_PRIMARY}>
                  {i === selectedIdx ? '▶ ' : '  '}{p.title.length > 28 ? p.title.slice(0, 25) + '...' : p.title}
                </span>
              </text>
              <text>
                <span fg={TEXT_DIM}>{p.date} · {p.readTime}</span>
              </text>
            </box>
          ))}
        </box>

        {/* Post detail */}
        <box
          flexGrow={1}
          border
          borderStyle="rounded"
          borderColor={BORDER}
          backgroundColor={BG_CARD}
          padding={2}
          flexDirection="column"
          gap={1}
        >
          <text>
            <span fg={LIME}><strong>{post.title}</strong></span>
          </text>
          <text>
            <span fg={TEXT_DIM}>{post.date} · {post.readTime}</span>
          </text>
          <text> </text>
          <text>
            <span fg={TEXT_SECONDARY}>{post.excerpt}</span>
          </text>
          <text> </text>
          <box flexDirection="row" flexWrap="wrap" gap={1}>
            {post.tags.map((tag) => (
              <box key={tag} backgroundColor="#1e1e1e" paddingX={1}>
                <text>
                  <span fg={CYAN}>{tag}</span>
                </text>
              </box>
            ))}
          </box>
          <text> </text>
          <text>
            <span fg={TEXT_DIM}>Press </span>
            <span fg={LIME}>Enter</span>
            <span fg={TEXT_DIM}> to open in browser</span>
          </text>
        </box>
      </box>

      <text>
        <span fg={TEXT_DIM}>↑↓ / jk to navigate · Enter to open</span>
      </text>
    </box>
  );
}
