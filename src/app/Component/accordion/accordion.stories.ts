import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  component: AccordionComponent,
  title: 'Components/Accordion',
  tags: ['autodocs'],
  args: {
    items: { control: 'object' },
  }
} as Meta;

export default meta;
type Story = StoryObj<AccordionComponent>

export const Accordion: Story = {
  args: {
    items: [
      {
        title: 'Title 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna augue, molestie non lectus in, accumsan aliquet dui. Morbi lacinia ultrices pretium. Duis vel ligula tellus. Phasellus sollicitudin elit a risus molestie ullamcorper. Morbi vel eros viverra sem eleifend auctor non sed nibh. Integer vel ligula eget risus mattis tristique.',
        isOpen: false,
      },
      {
        title: 'Title 2',
        content: 'Second item content. Phasellus sollicitudin elit a risus molestie ullamcorper. Morbi vel eros viverra sem eleifend auctor non sed nibh.',
        isOpen: false,
      },
      {
        title: 'Title 3',
        content: 'Third item content. Integer vel ligula eget risus mattis tristique.',
        isOpen: false,
      },
    ],
  },
}