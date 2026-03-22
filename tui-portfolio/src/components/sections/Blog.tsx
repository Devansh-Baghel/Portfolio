import {
  LIME,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_DIM,
  BG_CARD,
  BORDER,
  CYAN,
} from '../../constants';
import { blogPosts } from '../../data';
import { openUrl } from '../../utils/open-url';

export function Blog() {
  return (
    <box flexDirection="column" gap={1} marginTop={1}>
      <text>
        <span fg={LIME}><strong>Blog Posts</strong></span>
      </text>

      {blogPosts.map((post) => (
        <box
          key={post.slug}
          border
          borderStyle="rounded"
          borderColor={BORDER}
          backgroundColor={BG_CARD}
          padding={2}
          flexDirection="column"
          gap={1}
        >
          <text>
            <span fg={TEXT_PRIMARY}><strong>{post.title}</strong></span>
          </text>
          <text>
            <span fg={TEXT_DIM}>{post.date} · {post.readTime}</span>
          </text>
          <text>
            <span fg={TEXT_SECONDARY}>{post.excerpt}</span>
          </text>
          <box flexDirection="row" flexWrap="wrap" gap={1}>
            {post.tags.map((tag) => (
              <box key={tag} backgroundColor="#1e1e1e" paddingX={1}>
                <text>
                  <span fg={CYAN}>{tag}</span>
                </text>
              </box>
            ))}
          </box>
          <text>
            <span fg={LIME}>→ </span>
            <a href={`https://baghel.dev/blog/${post.slug}`}>
              <span fg={TEXT_PRIMARY}>Read on blog</span>
            </a>
          </text>
        </box>
      ))}
    </box>
  );
}
