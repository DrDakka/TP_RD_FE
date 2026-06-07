import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Design/Variable/Z-Index',
  parameters: {
    docs: {
      description: {
        component:
          'Z-index variables from `src/shared/styles/constants/_variables.scss`.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const tokens = [
  { name: '$z-modal', value: '20' },
  { name: '$z-header', value: '10' },
  { name: '$z-minus', value: '-1' },
  { name: '$z-low', value: '1' },
  { name: '$z-med', value: '3' },
  { name: '$z-high', value: '6' },
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
              display: 'grid',
              placeItems: 'center',
              width: 72,
              height: 48,
              borderRadius: 8,
              color: '#0f3d21',
              backgroundColor: '#d7f5dd',
              fontFamily: 'monospace',
              fontWeight: 700,
            }}
          >
            {token.value}
          </div>
          <div>
            <p style={nameStyle}>{token.name}</p>
            <p style={valueStyle}>{token.value}</p>
          </div>
        </article>
      ))}
    </div>
  ),
};
