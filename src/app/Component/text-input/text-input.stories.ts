import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'Components/Text input',
  tags: ['autodocs'],
  args: {
    size: { control: 'select', options: ['large', 'small'] },
  }
} as Meta;

export default meta;
type Story = StoryObj<TextInputComponent>;

export const TextInput: Story = {
  args: {
    hasLabel: true,
    label: 'Label',
    placeholder: 'Placeholder',
    hasHelpText: true,
    helpText: 'Help text',
    size: 'large',

    disabled: false,
    invalid: false,
  }
}