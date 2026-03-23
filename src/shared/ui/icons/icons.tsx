import React from 'react';
import s from './icons.module.scss';

const IconLoad = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={`${s.icon} ${s.loadIcon}`}
  >
    <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round" />
    <line x1="16.2" y1="7.8" x2="19.1" y2="4.9" strokeLinecap="round" />
    <line x1="18" y1="12" x2="22" y2="12" strokeLinecap="round" />
    <line x1="16.2" y1="16.2" x2="19.1" y2="19.1" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="22" strokeLinecap="round" />
    <line x1="4.9" y1="19.1" x2="7.8" y2="16.2" strokeLinecap="round" />
    <line x1="2" y1="12" x2="6" y2="12" strokeLinecap="round" />
    <line x1="4.9" y1="4.9" x2="7.8" y2="7.8" strokeLinecap="round" />
  </svg>
);

const IconSettings = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.67082 4.13591C9.72591 3.55625 9.99515 3.01795 10.4259 2.62619C10.8567 2.23442 11.418 2.01733 12.0003 2.01733C12.5826 2.01733 13.1439 2.23442 13.5747 2.62619C14.0055 3.01795 14.2747 3.55625 14.3298 4.13591C14.3629 4.51036 14.4858 4.87133 14.688 5.18825C14.8901 5.50517 15.1657 5.76872 15.4913 5.95658C15.8169 6.14445 16.183 6.25111 16.5585 6.26753C16.9341 6.28395 17.3081 6.20964 17.6488 6.05091C18.1779 5.81069 18.7775 5.77593 19.3308 5.95339C19.8841 6.13086 20.3516 6.50786 20.6423 7.01101C20.933 7.51417 21.0261 8.10748 20.9035 8.67548C20.7808 9.24348 20.4512 9.74552 19.9788 10.0839C19.6712 10.2998 19.4201 10.5865 19.2467 10.9199C19.0734 11.2533 18.9829 11.6236 18.9829 11.9994C18.9829 12.3752 19.0734 12.7455 19.2467 13.0789C19.4201 13.4123 19.6712 13.6991 19.9788 13.9149C20.4512 14.2533 20.7808 14.7553 20.9035 15.3233C21.0261 15.8913 20.933 16.4846 20.6423 16.9878C20.3516 17.491 19.8841 17.868 19.3308 18.0454C18.7775 18.2229 18.1779 18.1881 17.6488 17.9479C17.3081 17.7892 16.9341 17.7149 16.5585 17.7313C16.183 17.7477 15.8169 17.8544 15.4913 18.0422C15.1657 18.2301 14.8901 18.4936 14.688 18.8106C14.4858 19.1275 14.3629 19.4885 14.3298 19.8629C14.2747 20.4426 14.0055 20.9809 13.5747 21.3726C13.1439 21.7644 12.5826 21.9815 12.0003 21.9815C11.418 21.9815 10.8567 21.7644 10.4259 21.3726C9.99515 20.9809 9.72591 20.4426 9.67082 19.8629C9.63776 19.4883 9.51491 19.1272 9.31268 18.8102C9.11045 18.4931 8.83479 18.2295 8.50905 18.0416C8.18331 17.8537 7.81708 17.7471 7.4414 17.7308C7.06571 17.7145 6.69162 17.789 6.35082 17.9479C5.82171 18.1881 5.22214 18.2229 4.66882 18.0454C4.11549 17.868 3.64799 17.491 3.3573 16.9878C3.06661 16.4846 2.97353 15.8913 3.09618 15.3233C3.21882 14.7553 3.54842 14.2533 4.02082 13.9149C4.32844 13.6991 4.57955 13.4123 4.7529 13.0789C4.92626 12.7455 5.01677 12.3752 5.01677 11.9994C5.01677 11.6236 4.92626 11.2533 4.7529 10.9199C4.57955 10.5865 4.32844 10.2998 4.02082 10.0839C3.54908 9.74535 3.22007 9.2435 3.09772 8.67589C2.97537 8.10828 3.06842 7.51545 3.3588 7.01262C3.64918 6.50979 4.11613 6.13288 4.66891 5.95515C5.22168 5.77741 5.8208 5.81154 6.34982 6.05091C6.69057 6.20964 7.06456 6.28395 7.44012 6.26753C7.81567 6.25111 8.18175 6.14445 8.50735 5.95658C8.83296 5.76872 9.10851 5.50517 9.31068 5.18825C9.51286 4.87133 9.6357 4.51036 9.66882 4.13591"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSearch = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0002 20.9999L16.6602 16.6599"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconProfile = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 20C18 18.4087 17.3679 16.8826 16.2426 15.7574C15.1174 14.6321 13.5913 14 12 14C10.4087 14 8.88258 14.6321 7.75736 15.7574C6.63214 16.8826 6 18.4087 6 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCalendar = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2V6M16 2V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9H21M8 13H8.01M12 13H12.01M16 13H16.01M8 17H8.01M12 17H12.01M16 17H16.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconScale = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3V21M19 8L22 16C21.1345 16.6491 20.0819 17 19 17C17.9181 17 16.8655 16.6491 16 16L19 8ZM19 8V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 7H4C6.79039 7 9.53789 6.31313 12 5C14.4621 6.31313 17.2096 7 20 7H21M5 8L8 16C7.13452 16.6491 6.08185 17 5 17C3.91815 17 2.86548 16.6491 2 16L5 8ZM5 8V7M7 21H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconActivity = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChart = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 16C7.5 14 8.5 9 11 9C13 9 13 12 15 12C17.5 12 19.5 7 20 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFlame = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C12.6667 5.66667 14 7.83333 16 9.5C18 11.1667 19 13 19 15C19 16.8565 18.2625 18.637 16.9497 19.9497C15.637 21.2625 13.8565 22 12 22C10.1435 22 8.36301 21.2625 7.05025 19.9497C5.7375 18.637 5 16.8565 5 15C5 13.9181 5.35089 12.8655 6 12C6 12.663 6.26339 13.2989 6.73223 13.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678C10.7366 13.2989 11 12.663 11 12C11 10 9.5 9 9.5 7C9.5 5.66667 10.3333 4.33333 12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
const IconChevron: React.FC<ChevronProps> = ({ direction = 'down' }) => (
  <svg
    className={s.icon}
    style={{ transform: `rotate(${chevronRotation[direction]}deg)` }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCheck = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCheckCircle = () => (
  <svg
    className={s.icon}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#16B897" />
    <path
      d="M5.5 10.5L8.5 13.5L14.5 7.5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconTrash = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M3 6H21M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEdit = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3751 2.62498C18.7729 2.22716 19.3125 2.00366 19.8751 2.00366C20.4377 2.00366 20.9773 2.22716 21.3751 2.62498C21.7729 3.02281 21.9964 3.56237 21.9964 4.12498C21.9964 4.68759 21.7729 5.22716 21.3751 5.62498L12.3621 14.639C12.1246 14.8762 11.8313 15.0499 11.5091 15.144L8.63609 15.984C8.55005 16.0091 8.45883 16.0106 8.372 15.9883C8.28517 15.9661 8.20592 15.9209 8.14254 15.8575C8.07916 15.7942 8.03398 15.7149 8.01174 15.6281C7.98949 15.5412 7.991 15.45 8.01609 15.364L8.85609 12.491C8.95062 12.169 9.12463 11.876 9.36209 11.639L18.3751 2.62498Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMinus = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type PlusProps = {
  cross?: boolean;
};

const IconPlus: React.FC<PlusProps> = ({ cross = false }) => (
  <svg
    className={s.icon}
    style={cross ? { transform: 'rotate(45deg)' } : undefined}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M12 5V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFilter = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCircleAlert = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V12M12 16H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMoon = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.985 12.4859C20.8912 14.2221 20.2966 15.8939 19.273 17.2993C18.2494 18.7047 16.8406 19.7836 15.217 20.4054C13.5933 21.0273 11.8243 21.1655 10.1237 20.8034C8.42318 20.4414 6.86392 19.5944 5.63442 18.3651C4.40493 17.1357 3.55785 15.5765 3.19558 13.876C2.83331 12.1755 2.97136 10.4065 3.59304 8.78273C4.21472 7.159 5.29342 5.7501 6.69874 4.72635C8.10406 3.70259 9.77583 3.10782 11.512 3.01391C11.917 2.99191 12.129 3.47391 11.914 3.81691C11.1949 4.96746 10.8869 6.32778 11.0405 7.67586C11.194 9.02394 11.7999 10.2802 12.7593 11.2396C13.7187 12.199 14.9749 12.8049 16.323 12.9584C17.6711 13.1119 19.0314 12.804 20.182 12.0849C20.526 11.8699 21.007 12.0809 20.985 12.4859Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSun = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEye = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.06202 12.3481C1.97868 12.1236 1.97868 11.8766 2.06202 11.6521C2.87372 9.68397 4.25153 8.00116 6.02079 6.81701C7.79004 5.63287 9.87106 5.00073 12 5.00073C14.129 5.00073 16.21 5.63287 17.9792 6.81701C19.7485 8.00116 21.1263 9.68397 21.938 11.6521C22.0214 11.8766 22.0214 12.1236 21.938 12.3481C21.1263 14.3163 19.7485 15.9991 17.9792 17.1832C16.21 18.3674 14.129 18.9995 12 18.9995C9.87106 18.9995 7.79004 18.3674 6.02079 17.1832C4.25153 15.9991 2.87372 14.3163 2.06202 12.3481Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEyeOff = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7331 5.07599C13.0625 4.7984 15.4187 5.29081 17.442 6.47804C19.4653 7.66527 21.0444 9.48207 21.9381 11.651C22.0215 11.8755 22.0215 12.1225 21.9381 12.347C21.5701 13.2377 21.0844 14.0751 20.4941 14.837M14.0841 14.158C13.5183 14.7045 12.7605 15.0068 11.9739 15C11.1873 14.9932 10.4349 14.6777 9.87868 14.1214C9.32245 13.5652 9.00695 12.8128 9.00011 12.0262C8.99328 11.2396 9.29566 10.4818 9.84214 9.91599"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.479 17.499C16.1525 18.2848 14.6725 18.776 13.1394 18.9394C11.6063 19.1028 10.056 18.9345 8.59365 18.4459C7.13133 17.9573 5.79121 17.1599 4.66423 16.1077C3.53725 15.0556 2.64977 13.7734 2.06202 12.348C1.97868 12.1235 1.97868 11.8765 2.06202 11.652C2.94865 9.50186 4.50869 7.69725 6.50802 6.509M2.00002 2L22 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconApple = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.528V3C12 2.73478 12.1054 2.48043 12.2929 2.29289C12.4804 2.10536 12.7348 2 13 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.237 21.0001C20.6763 18.2416 22.0156 14.6823 22 11.0001C22 9.84187 21.6647 8.70839 21.0347 7.73649C20.4047 6.7646 19.5068 5.99583 18.4495 5.52299C17.3921 5.05016 16.2205 4.89346 15.0761 5.07181C13.9317 5.25017 12.8633 5.75595 12 6.52811C11.1367 5.75595 10.0684 5.25017 8.92395 5.07181C7.77952 4.89346 6.60793 5.05016 5.55059 5.52299C4.49326 5.99583 3.59539 6.7646 2.96535 7.73649C2.33531 8.70839 2.00005 9.84187 2.00002 11.0001C1.99371 14.6807 3.33188 18.2368 5.76302 21.0001C6.21073 21.501 6.81359 21.8371 7.47503 21.9546C8.13647 22.0721 8.81821 21.9641 9.41102 21.6481C10.2078 21.223 11.097 21.0006 12 21.0006C12.9031 21.0006 13.7923 21.223 14.589 21.6481C15.1818 21.9641 15.8636 22.0721 16.525 21.9546C17.1865 21.8371 17.7893 21.501 18.237 21.0001Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconHeart = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 9.50004C2.00002 8.38724 2.33759 7.30062 2.96813 6.3837C3.59867 5.46678 4.49252 4.7627 5.53161 4.36444C6.5707 3.96618 7.70616 3.89248 8.78801 4.15308C9.86987 4.41368 10.8472 4.99632 11.591 5.82404C11.6434 5.88005 11.7067 5.92471 11.7771 5.95524C11.8474 5.98577 11.9233 6.00152 12 6.00152C12.0767 6.00152 12.1526 5.98577 12.2229 5.95524C12.2933 5.92471 12.3566 5.88005 12.409 5.82404C13.1504 4.99094 14.128 4.40341 15.2116 4.13964C16.2952 3.87588 17.4335 3.94839 18.4749 4.34752C19.5163 4.74666 20.4114 5.45349 21.0411 6.37394C21.6708 7.29439 22.0053 8.3848 22 9.50004C22 11.79 20.5 13.5 19 15L13.508 20.313C13.3217 20.527 13.0919 20.699 12.834 20.8173C12.5762 20.9357 12.296 20.9979 12.0123 20.9997C11.7285 21.0015 11.4476 20.9429 11.1883 20.8278C10.9289 20.7127 10.697 20.5437 10.508 20.332L5 15C3.5 13.5 2 11.8 2 9.50004Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCart = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.0498 2.05005H4.0498L6.7098 14.47C6.80738 14.9249 7.06048 15.3315 7.42552 15.6199C7.79056 15.9083 8.24471 16.0604 8.7098 16.05H18.4898C18.945 16.0493 19.3863 15.8933 19.7408 15.6079C20.0954 15.3224 20.3419 14.9246 20.4398 14.48L22.0898 7.05005H5.1198"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFB = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconTwitter = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconInsta = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5002 6.5H17.5102M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7616 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87659 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8719 9.12831C15.4787 9.73515 15.8743 10.5211 16.0002 11.37Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconYT = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.49996 16.9999C1.80079 13.7033 1.80079 10.2966 2.49996 6.99994C2.59175 6.66515 2.7691 6.36002 3.01457 6.11455C3.26004 5.86908 3.56517 5.69173 3.89996 5.59994C9.26347 4.71213 14.7365 4.71213 20.1 5.59994C20.4348 5.69173 20.7399 5.86908 20.9854 6.11455C21.2308 6.36002 21.4082 6.66515 21.5 6.99994C22.1991 10.2966 22.1991 13.7033 21.5 16.9999C21.4082 17.3347 21.2308 17.6399 20.9854 17.8853C20.7399 18.1308 20.4348 18.3082 20.1 18.3999C14.7365 19.2878 9.26347 19.2878 3.89996 18.3999C3.56517 18.3082 3.26004 18.1308 3.01457 17.8853C2.7691 17.6399 2.59175 17.3347 2.49996 16.9999Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15L15 12L10 9V15Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconList = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5H3.01M3 12H3.01M3 19H3.01M8 5H21M8 12H21M8 19H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  IconLoad,
  IconSettings,
  IconActivity,
  IconCalendar,
  IconChart,
  IconChevron,
  IconFlame,
  IconProfile,
  IconScale,
  IconSearch,
  IconCheck,
  IconCheckCircle,
  IconTrash,
  IconEdit,
  IconMinus,
  IconPlus,
  IconFilter,
  IconCircleAlert,
  IconMoon,
  IconSun,
  IconEye,
  IconEyeOff,
  IconApple,
  IconHeart,
  IconCart,
  IconFB,
  IconTwitter,
  IconInsta,
  IconYT,
  IconList,
};
