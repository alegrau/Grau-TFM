import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from "./avatar.component";

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  title: 'Components/Avatar',
  tags: ['autodocs'],
  args: {
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  }
} as Meta;

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Initials: Story = {
  args: {
    type: 'initials',
    initials: 'JD',
    size: 'large',
  }
}

export const Photo: Story = {
  args: {
    type: 'photo',
    photoUrl: '/img/profile.jpeg',
    size: 'large',
  }
}