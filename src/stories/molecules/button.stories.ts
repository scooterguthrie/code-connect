import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import symbolList from '../atoms/symbol-list.json';
import { ButtonComponent } from '../../components/molecules/button/button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Molecules/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    icon: { control: 'select', options: symbolList },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    // rank: 'primary',
    // outline: false,
    // type: 'button',
    // size: 'default',
    // icon: null,
    // iconOnly: false,
    // inProgress: false,
    // disabled: false,
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
