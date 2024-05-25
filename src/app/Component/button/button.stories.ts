import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/Button',
  tags: ['autodocs'],
  args: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    state: { control: 'select', options: ['active', 'disabled'] },
  }
} as Meta;

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary Button',
    size: 'large',
    hasLeftIcon: true,
    leftIcon: 'chevron_left',
    hasRightIcon: true,
    rightIcon: 'chevron_right',
    state: 'active',

  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Secondary Button',
    size: 'large',
    hasLeftIcon: true,
    leftIcon: 'chevron_left',
    hasRightIcon: true,
    rightIcon: 'chevron_right',
    state: 'active',
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    label: 'Tertiary Button',
    size: 'large',
    hasLeftIcon: true,
    leftIcon: 'chevron_left',
    hasRightIcon: true,
    rightIcon: 'chevron_right',
    state: 'active',
  },
};

