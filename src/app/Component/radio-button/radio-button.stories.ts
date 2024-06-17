import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'Components/Radio button',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Radiobutton: Story = {
  args: {
    label: 'Radio button',
    isInvalid: false,
    isDisabled: false,
  }
}