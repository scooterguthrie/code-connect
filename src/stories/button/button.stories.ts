import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    rank: 'primary',
    outline: false,
    type: 'button',
    size: 'md',
    disabled: false,
    inProgress: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    rank: 'secondary',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'sm',
  },
};
