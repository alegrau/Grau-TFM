import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  files: any[] = [];

  onFileSelected(event: any) {
    const selectedFiles = event.target.files;
    this.handleFiles(selectedFiles);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    (event.target as HTMLElement).classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    (event.target as HTMLElement).classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    (event.target as HTMLElement).classList.remove('dragover');
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  handleFiles(files: FileList) {
    Array.from(files).forEach(file => {
      const fileObject = {
        name: file.name,
        size: file.size,
        progress: 0
      };
      this.files.push(fileObject);
      this.simulateUpload(fileObject);
    });
  }

  simulateUpload(file: any) {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      file.progress = progressValue;
      if (progressValue >= 100) {
        clearInterval(interval);
      }
    }, 100);
  }

  removeFile(file: any) {
    const index = this.files.indexOf(file);
    if (index >= 0) {
      this.files.splice(index, 1);
    }
  }
}