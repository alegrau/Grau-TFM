import type { Meta, StoryObj } from "@storybook/angular";
import { AlertBoxComponent } from "./alert-box.component";

const meta: Meta<AlertBoxComponent> = {
  component: AlertBoxComponent,
  title: 'Components/Alert box',
  tags: ['autodocs'],
  args: {
    type: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'error']
      }
    },
    title: { control: 'text' },
    message: { control: 'text' }

  }
} as Meta;

export default meta;
type Story = StoryObj<AlertBoxComponent>;

export const Alertbox: Story = {
  args: {
    title: 'Title',
    message: 'This is a alert message with icons on each side.',
    type: 'info',

  }
}