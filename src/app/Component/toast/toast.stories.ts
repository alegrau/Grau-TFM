import type { Meta, StoryObj } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ToastComponent } from './toast.component';

const meta: Meta<ToastComponent> = {
  component: ToastComponent,
  title: 'Toast',
  tags: ['autodocs'],
  args: {
    title: "This is a Toast",
    type: { control: 'select', options: ['info', 'sucess', 'warning', 'error'] },

  }
} as Meta;

export default meta;
type Story = StoryObj<ToastComponent>;

export const Toast: Story = {
  args: {
    type: "info",
    icon: 'info',
    title: 'Alert info',
    message: 'This is an alert message with an icon and a closing button.',


  },
};
