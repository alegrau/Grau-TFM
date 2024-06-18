import type { Meta, StoryObj } from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';

const meta: Meta<TextAreaComponent> = {
  component: TextAreaComponent,
  title: 'Components/Text area',
  tags: ['autodocs'],
  args: {


  }
} as Meta;

export default meta;
type Story = StoryObj<TextAreaComponent>;

export const TextArea: Story = {
  args: {
    hasCounter: true,
    hasLabel: true,
    label: 'Label',
    placeholder: 'Placeholder',
    hasHelpText: true,
    helpText: 'Help text',
    disabled: false,
    invalid: false,
  }
}