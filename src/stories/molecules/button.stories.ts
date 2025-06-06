import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from '../../components/molecules/button/button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Molecules/Button',
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
    type: 'button',
    size: 'md',
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
