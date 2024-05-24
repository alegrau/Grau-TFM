import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  component: ToggleComponent,
  title: 'Components/Toggle',
  tags: ['autodocs'],
  args: {


  }
} as Meta;

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Toggle: Story = {
  args: {
    hasLabelLeft: true,
    labelLeftText: 'Label left',
    checked: false,
    focused: false,
    disabled: false,
    hasLabelRight: true,
    labelRightText: 'Label right',
  }
}