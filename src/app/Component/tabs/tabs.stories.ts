import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

const meta: Meta<TabsComponent> = {
  component: TabsComponent,
  title: 'Components/Tabs',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<TabsComponent>;

export const Tabs: Story = {
  args: {

  }
}