import { Meta, StoryObj } from '@storybook/angular';
import { ProgressIndicatorComponent } from './progress-indicator.component';

const meta: Meta<ProgressIndicatorComponent> = {
  component: ProgressIndicatorComponent,
  title: 'Components/Progress indicator',
  tags: ['autodocs'],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<ProgressIndicatorComponent>;

export const ProgressIndicator: Story = {
  args: {
    progressWidth: '50%',
  }
}