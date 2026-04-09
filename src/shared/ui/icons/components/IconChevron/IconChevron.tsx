import { Icon } from '../../icons';

type ChevronDirection = 'down' | 'up' | 'left' | 'right';
const chevronRotation: Record<ChevronDirection, number> = {
  down: 0,
  up: 180,
  left: 90,
  right: -90,
};

type ChevronProps = {
  direction?: ChevronDirection;
};

export const IconChevron: React.FC<ChevronProps> = ({ direction = 'down' }) => (
  <Icon style={{ transform: `rotate(${chevronRotation[direction]}deg)` }}>
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
