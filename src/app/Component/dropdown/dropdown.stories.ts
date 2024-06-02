import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<DropdownComponent>

export const Dropdown: Story = {
  args: {
    hasLabel: true,
    label: 'Label',
    hasHelpText: true,
    helpText: 'Help Text',
    isInvalid: false,
  }
}