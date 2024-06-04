import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'Components/Radio button',
  tags: ['autodocs'],
  args: {
    label: "Radio button",

  }
} as Meta;

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Radiobutton: Story = {
  args: {
    options: [
      { label: 'Option 1', checked: false, state: 'valid' },
      { label: 'Option 2', checked: false, state: 'invalid' },
      { label: 'Option 3', checked: false, state: 'disabled' }
    ]
  }
}