import type { Meta, StoryObj } from '@storybook/angular';
import { LoaderComponent } from './loader.component';

const meta: Meta<LoaderComponent> = {
  component: LoaderComponent,
  title: 'Components/Loader',
  tags: ['autodocs'],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<LoaderComponent>;

export const Loader: Story = {
  args: {
    small: false,
  }
}