import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Design/Variable/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'Color variables from `src/shared/styles/constants/_colors.scss`. When imported through `shared/styles/constants`, these variables use the `clr-` prefix.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const colorGroups = [
  {
    title: 'Primary',
    tokens: [
      { name: '$prm-100', barrelName: '$clr-prm-100', value: '#DDF7F1' },
      { name: '$prm-200', barrelName: '$clr-prm-200', value: '#A7E9DB' },
      { name: '$prm-500', barrelName: '$clr-prm-500', value: '#16B897' },
      { name: '$prm-600', barrelName: '$clr-prm-600', value: '#11967C' },
      { name: '$prm-700', barrelName: '$clr-prm-700', value: '#0E7A66' },
    ],
  },
  {
    title: 'Secondary',
    tokens: [
      { name: '$sec-100', barrelName: '$clr-sec-100', value: '#FDE9D9' },
      { name: '$sec-500', barrelName: '$clr-sec-500', value: '#F4A261' },
      { name: '$sec-600', barrelName: '$clr-sec-600', value: '#E38F4E' },
    ],
  },
  {
    title: 'Neutral Scale',
    tokens: [
      { name: '$ns-000', barrelName: '$clr-ns-000', value: '#FFFFFF' },
      { name: '$ns-050', barrelName: '$clr-ns-050', value: '#F7FAFC' },
      { name: '$ns-100', barrelName: '$clr-ns-100', value: '#F0F4F8' },
      { name: '$ns-200', barrelName: '$clr-ns-200', value: '#E4E7EB' },
      { name: '$ns-300', barrelName: '$clr-ns-300', value: '#CBD2D9' },
      { name: '$ns-500', barrelName: '$clr-ns-500', value: '#9AA5B1' },
      { name: '$ns-600', barrelName: '$clr-ns-600', value: '#6C7885' },
      { name: '$ns-700', barrelName: '$clr-ns-700', value: '#52606D' },
      { name: '$ns-800', barrelName: '$clr-ns-800', value: '#323F4B' },
      { name: '$ns-900', barrelName: '$clr-ns-900', value: '#1F2933' },
    ],
  },
  {
    title: 'Semantic',
    tokens: [
      { name: '$s-scs', barrelName: '$clr-s-scs', value: '#2F9E44' },
      { name: '$s-wrn', barrelName: '$clr-s-wrn', value: '#F59F00' },
      { name: '$s-dng', barrelName: '$clr-s-dng', value: '#E03131' },
      { name: '$s-inf', barrelName: '$clr-s-inf', value: '#1971C2' },
    ],
  },
  {
    title: 'Macro',
    tokens: [
      { name: '$mc-prt', barrelName: '$clr-mc-prt', value: '#6C5CE7' },
      { name: '$mc-fat', barrelName: '$clr-mc-fat', value: '#F4B400' },
      { name: '$mc-crb', barrelName: '$clr-mc-crb', value: '#339AF0' },
      { name: '$mc-cal', barrelName: '$clr-mc-cal', value: '#16B897' },
    ],
  },
];

const pageStyle = {
  display: 'grid',
  gap: 24,
  maxWidth: 1080,
  color: '#171717',
  fontFamily: 'var(--font-manrope), Arial, sans-serif',
} satisfies CSSProperties;

const sectionStyle = {
  display: 'grid',
  gap: 12,
} satisfies CSSProperties;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
  gap: 12,
} satisfies CSSProperties;

const cardStyle = {
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  backgroundColor: '#fff',
} satisfies CSSProperties;

const swatchStyle = {
  height: 72,
  borderBottom: '1px solid #e5e7eb',
} satisfies CSSProperties;

const bodyStyle = {
  display: 'grid',
  gap: 4,
  padding: 12,
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
      {colorGroups.map((group) => (
        <section key={group.title} style={sectionStyle}>
          <h2 style={{ margin: 0, fontSize: 20 }}>{group.title}</h2>
          <div style={gridStyle}>
            {group.tokens.map((token) => (
              <article key={token.name} style={cardStyle}>
                <div
                  style={{
                    ...swatchStyle,
                    backgroundColor: token.value,
                  }}
                />
                <div style={bodyStyle}>
                  <p style={nameStyle}>{token.name}</p>
                  <p style={valueStyle}>{token.barrelName}</p>
                  <p style={valueStyle}>{token.value}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
