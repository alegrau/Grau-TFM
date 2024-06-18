import { Meta, StoryObj } from '@storybook/angular';
import { WelcomeComponent } from './app/Component/welcome/welcome.component';

const meta: Meta<WelcomeComponent> = {
  component: WelcomeComponent,
  title: 'Bienvenida',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<WelcomeComponent>