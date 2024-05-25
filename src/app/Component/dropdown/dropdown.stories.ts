import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  args: {
    label: 'Select an option:',
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
    ],
    helpText: 'Choose wisely!',
  }
} as Meta;

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Dropdown: Story = {
  args: {

  }
}