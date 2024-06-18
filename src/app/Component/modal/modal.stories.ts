import { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';

const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  title: 'Components/Modal',
  tags: ['autodocs'],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<ModalComponent>;

export const Modal: Story = {
  args: {

  }
}