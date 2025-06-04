import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { IconComponent } from '../../components/icon/icon.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<IconComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: 'add_circle',
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    name: 'add_circle',
    size: 'icon-sm',
  },
};

export const Large: Story = {
  args: {
    name: 'add_circle',
    size: 'icon-lg',
  },
};
