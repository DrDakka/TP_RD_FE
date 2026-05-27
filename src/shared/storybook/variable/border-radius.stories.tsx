import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Design/Variable/Border Radius',
  parameters: {
    docs: {
      description: {
        component:
          'Border radius variables from `src/shared/styles/constants/_variables.scss`.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const tokens = [
  { name: '$br-xxs', value: '4px' },
  { name: '$br-xs', value: '6px' },
  { name: '$br-s', value: '8px' },
  { name: '$br-m', value: '12px' },
  { name: '$br-l', value: '24px' },
  { name: '$br-pill', value: '50px' },
];

const pageStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
} satisfies CSSProperties;

export const Overview: Story = {
  render: () => (
    <div style={pageStyle}>
      {tokens.map((token) => (
        <article key={token.name} style={cardStyle}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: token.value,
              backgroundColor: '#d7f5dd',
              border: '1px solid #83c993',
            }}
          />
          <div>
            <p style={nameStyle}>{token.name}</p>
            <p style={valueStyle}>{token.value}</p>
          </div>
        </article>
      ))}
    </div>
  ),
};
