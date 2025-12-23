// import type { StoryObj } from '@storybook/react-webpack5';
import { fn } from '@storybook/test';
import { h } from '@stencil/core';
import WebComponentLoader from './WebComponentLoader';
import { variants } from '../src/components/eui-card/assets/json';
import EUICardType from '../src/components/eui-card/index.d';

const EUICard = ({
  title,
  iconBgColor,
  variant,
}: EUICardType) => {
  return (
    <div>
      <eui-card
        title={title}
        iconBgColor={iconBgColor}
        variant={variant}
      >
        <WebComponentLoader />
          <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#000000" />
            <path d="M12 18C7.58 18 4 14.42 4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6z" fill="#000000" />
          </svg>
        <div slot="body">
          <h1>Card Component</h1>
        </div>
        <h1>Card Component</h1>
      </eui-card>
    </div>
  );
}

const meta = {
  title: 'EUICard',
  component: EUICard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    iconBgColor: '',
    title: '',
    variant: '',
  },
  argTypes: {
    variant: {
      options: ['regular', 'callout'],
      control: { type: 'select' },
    },
  },
};

export default meta;
// type Story = StoryObj<typeof meta>;

export const Primary: unknown = {
  args: {
    title: 'Primary',
    iconBgColor: 'red',
    variant: 'callout',
  },
};

