import type { Meta, StoryObj } from '@storybook/angular'
import { ChipsComponent } from './chips.component'

const meta: Meta<ChipsComponent> = {
  component: ChipsComponent,
  title: 'Components/Chips',
  tags: ['autodocs'],
  args: {
    label: "Chips",
  }
} as Meta;

export default meta;
type Story = StoryObj<ChipsComponent>;

export const Chips: Story = {
  args: {
    hasIcon: true,
    icon: 'thumb_up_alt',
    label: 'chips',
    hasButton: true,
    iconButton: 'cancel',
    disabled: false,
  }
}