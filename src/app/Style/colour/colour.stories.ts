import type { Meta, StoryObj } from '@storybook/angular';
import { ColourComponent } from './colour.component';

const meta: Meta<ColourComponent> = {
  component: ColourComponent,
  title: 'Style/Colour',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<ColourComponent>;

export const Colour: Story = {
  args: {

  }
};

