import { Icon } from '../../icons';

type Props = {
  active?: boolean;
};

export const IconCheckCircle = ({ active = false }: Props) => (
  <Icon viewBox="0 0 20 20">
    {active ? (
      <>
        <circle cx="10" cy="10" r="9" fill="#16B897" />
        <path
          d="M5.5 10.5L8.5 13.5L14.5 7.5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    )}
  </Icon>
);
