import { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  component: SliderComponent,
  title: 'Components/Slider',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<SliderComponent>;

export const Slider: Story = {
  args: {

  }
}