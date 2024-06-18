import { Meta, StoryObj } from '@storybook/angular';
import { SearchInputComponent } from './search-input.component';


const meta: Meta<SearchInputComponent> = {
  component: SearchInputComponent,
  title: 'Components/Search',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<SearchInputComponent>;

export const Search: Story = {
  args: {

  }
}