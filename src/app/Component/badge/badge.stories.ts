import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  component: BadgeComponent,
  title: 'Components/Badge',
  tags: ['autodocs'],
  args: {
    label: "Badge",
    size: { control: 'select', options: ['large', 'small'] },
    color: { control: 'select', options: ['blue', 'grey', 'green', 'orange', 'red'] },

  }
} as Meta;

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Badge: Story = {
  args: {
    label: 'Badge',
    size: 'large',
    color: 'blue',
    hasLeftIcon: true,
    leftIcon: 'check_circle',
    hasRightIcon: true,
    rightIcon: 'check_circle',

  },
}

