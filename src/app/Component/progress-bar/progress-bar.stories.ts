import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
  component: ProgressBarComponent,
  title: 'Components/Progress bar',
  tags: ['autodocs'],
  args: {
    label: '',
    helpText: '',
    progress: 50 // Set your initial progress here
  },
} as Meta;

export default meta;
type Story = StoryObj<ProgressBarComponent>

export const progressBar: Story = {
  args: {
    hasLabel: true,
    label: 'Label',
    hasHelpTextl: true,
    helpText: 'Help text',

  }
}