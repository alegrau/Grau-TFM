import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'Components/Card',
  tags: ['autodocs'],
  args: {
    orientation: { control: 'select', options: ['vertical', 'horizontal'] }
  }
} as Meta;

export default meta;
type Story = StoryObj<CardComponent>;

export const Card: Story = {
  args: {
    orientation: 'horizontal',
    title: 'Title',
    description: 'Description',
    disabled: false,
  }
}