import type { Meta, StoryObj } from '@storybook/angular';
import { FileUploadComponent } from "./file-upload.component";

const meta: Meta<FileUploadComponent> = {
  component: FileUploadComponent,
  title: 'Components/File upload',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const FileBox: Story = {
  args: {

  }
}
