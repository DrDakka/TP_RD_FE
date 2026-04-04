import { Icon } from '../../icons';

type PlusProps = {
  cross?: boolean;
};

export const IconPlus: React.FC<PlusProps> = ({ cross = false }) => (
  <Icon style={cross ? { transform: 'rotate(45deg)' } : undefined}>
    <path
      d="M5 12H19M12 5V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
