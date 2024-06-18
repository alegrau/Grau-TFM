import { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
  title: 'Components/Navbar',
  tags: ['autodocs'],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Navbar: Story = {
  args: {

  }
}