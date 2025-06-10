import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import sybmolList from './symbol-list.json';
import { IconComponent } from '../../components/atoms/icon/icon.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    name: { control: 'select', options: sybmolList },
  },
};
export default meta;
type Story = StoryObj<IconComponent>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: 'account_box',
  },
};

export const Small: Story = {
  args: {
    name: 'account_box',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    name: 'account_box',
    size: 'lg',
  },
};
