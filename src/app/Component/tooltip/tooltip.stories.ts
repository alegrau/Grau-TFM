import type { Meta, StoryObj } from "@storybook/angular";
import { TooltipComponent } from './tooltip.component';

const meta: Meta<TooltipComponent> = {
  component: TooltipComponent,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  args: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  }
} as Meta;

export default meta;
type Story = StoryObj<TooltipComponent>

export const tooltipTop: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique vestibulum odio, sit amet tincidunt sapien auctor nec. Quisque gravida placerat nisi, id porta orci pulvinar condimentum.',
    position: 'top',
  }
}