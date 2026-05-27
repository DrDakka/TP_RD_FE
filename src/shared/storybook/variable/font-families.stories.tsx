import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Design/Variable/Font Families',
  parameters: {
    docs: {
      description: {
        component:
          'Font family variables from `src/shared/styles/constants/_variables.scss`.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const tokens = [
  { name: '$font-sans', value: 'var(--font-manrope), Arial, sans-serif' },
  { name: '$font-mono', value: 'monospace' },
];

const pageStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 12,
  maxWidth: 960,
  color: '#171717',
  fontFamily: 'var(--font-manrope), Arial, sans-serif',
} satisfies CSSProperties;

const cardStyle = {
  display: 'grid',
  gap: 10,
  padding: 14,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  backgroundColor: '#fff',
} satisfies CSSProperties;

const nameStyle = {
  margin: 0,
  fontFamily: 'monospace',
  fontSize: 13,
  fontWeight: 700,
} satisfies CSSProperties;

const valueStyle = {
  margin: 0,
  color: '#525252',
  fontFamily: 'monospace',
  fontSize: 12,
  overflowWrap: 'anywhere',
} satisfies CSSProperties;

export const Overview: Story = {
  render: () => (
    <div style={pageStyle}>
      {tokens.map((token) => (
        <article key={token.name} style={cardStyle}>
          <p
            style={{
              margin: 0,
              fontFamily: token.value,
              fontSize: 22,
              lineHeight: 1.3,
            }}
          >
            Aa Bb 123
          </p>
          <div>
            <p style={nameStyle}>{token.name}</p>
            <p style={valueStyle}>{token.value}</p>
          </div>
        </article>
      ))}
    </div>
  ),
};
