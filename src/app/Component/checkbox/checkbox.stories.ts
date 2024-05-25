import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  args: {
    label: 'Checkbox',
    state: {
      type: 'select',
      options: ['valid', 'invalid', 'disabled'],
    }

  },

} as Meta;

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Checkbox: Story = {
  args: {
    label: "Label checkbox",
    state: 'valid'
  }
}