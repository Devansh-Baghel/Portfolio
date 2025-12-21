'use client';

import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// Import only the languages you need
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
// Import a Prism theme
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('sh', bash);

type Props = {
  language?: string;
  children: string;
  showLineNumbers?: boolean;
};

export default function CodeBlock({
  language = 'tsx',
  children,
  showLineNumbers = false,
}: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      showLineNumbers={showLineNumbers}
      wrapLongLines
      customStyle={{
        borderRadius: 12,
        padding: '22px',
        fontSize: '0.95rem',
      }}
      codeTagProps={{
        style: {
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
