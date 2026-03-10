'use client';

import {
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
  Button,
} from '@shared/ui';

export const TestWidget = () => {
  const icons = [
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
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <div>
        <span>Icons</span>
        {icons.map((Icon, idx) => (
          <Icon key={idx} />
        ))}
      </div>
      <div>
        <span>Buttons reg</span>
        <Button
          onClick={() => {
            return;
          }}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />{' '}
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          variant={'secondary'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          variant={'ghost'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          variant={'destructive'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
      </div>
      <div>
        <span>Buttons pressable</span>
        <Button
          onClick={() => {
            return;
          }}
          pressable
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />{' '}
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          pressable
          variant={'secondary'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          pressable
          variant={'ghost'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          pressable
          variant={'destructive'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
      </div>
      <div>
        <span>Buttons disabled</span>
        <Button
          onClick={() => {
            return;
          }}
          disabled
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />{' '}
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          disabled
          variant={'secondary'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          disabled
          variant={'ghost'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
        <Button
          onClick={() => {
            return;
          }}
          disabled
          variant={'destructive'}
        >
          <IconPlus />
          <IconLoad />
          <span>Hello</span>
          <IconPlus />
        </Button>
      </div>
    </div>
  );
};
