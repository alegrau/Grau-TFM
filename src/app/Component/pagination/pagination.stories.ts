import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<PaginationComponent>;

export const Pagination: Story = {
  args: {
    type: 'page',
    pageNumber: 2,
    isActive: true,
  },
}