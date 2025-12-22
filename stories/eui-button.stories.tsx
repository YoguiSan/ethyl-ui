// import type { StoryObj } from '@storybook/react-webpack5';
import { fn } from '@storybook/test';
import { h } from '@stencil/core';
import WebComponentLoader from './WebComponentLoader';

const EUIButton = ({
  text,
  onClick,
}) => {
  return (
    <div>
      <WebComponentLoader />
      <eui-button text={text} onClick={onClick} />
    </div>
  );
}

const meta = {
  title: 'EUIButton',
  component: EUIButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    variant: '',
    padding: '',
    type: '',
    color:'',
    text: '',
    icon: '',
    fontColor: '',
    onClick: (event) => console.log(event.target.value),
    styles: '',
    classes: '',
    fullwidth: '',
  },
};

export default meta;
// type Story = StoryObj<typeof meta>;

export const Primary: unknown = {
  args: {
    title: 'Primary',
    onClick: fn(() => alert('Button clicked!')),
  },
};

