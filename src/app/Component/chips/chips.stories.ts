import type { Meta, StoryObj } from '@storybook/angular'
import { ChipsComponent } from './chips.component'

const meta: Meta<ChipsComponent> = {
  component: ChipsComponent,
  title: 'Components/Chips',
  tags: ['autodocs'],
  args: {
    label: "Chips",
    size: { control: 'select', options: ['large', 'small'] },
  }
} as Meta;

export default meta;
type Story = StoryObj<ChipsComponent>;

export const Chips: Story = {
  args: {
    size: 'large',
    hasIcon: true,
    icon: 'thumb_up_alt',
    label: 'Chip label',
    hasButton: true,
    iconButton: 'cancel',
    isDisabled: false,
  }
}