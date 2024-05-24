import type { Meta, StoryObj } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';

const meta: Meta<BreadcrumbComponent> = {
  component: BreadcrumbComponent,
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  args: {
  }
} as Meta;

export default meta;
type Story = StoryObj<BreadcrumbComponent>;

export const Breadcrumb: Story = {
  args: {
    steps: ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5'],
  }
}