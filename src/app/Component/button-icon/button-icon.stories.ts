import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonIconComponent } from './button-icon.component';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },

  }
} as Meta;

export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const iconButton: Story = {
  args: {
    type: 'primary',
    icon: 'chevron_right',
    size: 'large',
  },
}