import { Meta, StoryObj } from '@storybook/angular';
import { PanelComponent } from './panel.component';

const meta: Meta<PanelComponent> = {
  component: PanelComponent,
  title: 'Components/Panel',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<PanelComponent>;

export const Panel: Story = {
  args: {

  }
}