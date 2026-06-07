import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Design/Variable/Shadows',
  parameters: {
    docs: {
      description: {
        component:
          'Shadow variables from `src/shared/styles/constants/_variables.scss`.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const tokens = [
  { name: '$shadow-low', value: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)' },
  { name: '$shadow-med', value: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)' },
  { name: '$shadow-deep', value: '0px 4px 16px 0px rgba(0, 0, 0, 0.1)' },
];

const pageStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 12,
  maxWidth: 960,
  color: '#171717',
  fontFamily: 'var(--font-manrope), Arial, sans-serif',
} satisfies CSSProperties;

const cardStyle = {
  display: 'grid',
  gap: 10,
  padding: 18,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  backgroundColor: '#fafafa',
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
          <div
            style={{
              width: 88,
              height: 56,
              borderRadius: 8,
              backgroundColor: '#fff',
              border: '1px solid #eeeeee',
              boxShadow: token.value,
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
