import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css'
})
export class ColourComponent {

  palette = [
    {
      title: 'Primary',
      colour: [
        { name: 'Primary-100', hex: '#F5F9FF', class: 'primary-100' },
        { name: 'Primary-200', hex: '#D1E3FF', class: 'primary-200' },
        { name: 'Primary-300', hex: '#8FBCFF', class: 'primary-300' },
        { name: 'Primary-400', hex: '#428EFF', class: 'primary-400' },
        { name: 'Primary-500', hex: '#0066FF', class: 'primary-500' },
        { name: 'Primary-600', hex: '#0058DB', class: 'primary-600' },
        { name: 'Primary-700', hex: '#0041A3', class: 'primary-700' },
        { name: 'Primary-800', hex: '#070D56', class: 'primary-800' },
        { name: 'Primary-900', hex: '#05093D', class: 'primary-900' },
      ]
    },

    {
      title: 'Secondary',
      colour: [
        { name: 'Secondary-100', hex: '#DEF6FF', class: 'secondary-100' },
        { name: 'Secondary-200', hex: '#B6EFFF', class: 'secondary-200' },
        { name: 'Secondary-300', hex: '#75E5FF', class: 'secondary-300' },
        { name: 'Secondary-400', hex: '#2CD8FF', class: 'secondary-400' },
        { name: 'Secondary-500', hex: '#00C7FA', class: 'secondary-500' },
        { name: 'Secondary-600', hex: '#009FD4', class: 'secondary-600' },
        { name: 'Secondary-700', hex: '#007EAB', class: 'secondary-700' },
        { name: 'Secondary-800', hex: '#065874', class: 'secondary-800' },
        { name: 'Secondary-900', hex: '#04384D', class: 'secondary-900' },
      ]
    },

    {
      title: 'Neutral',
      colour: [
        { name: 'Neutral-100', hex: '#FFFFFF', class: 'neutral-100' },
        { name: 'Neutral-200', hex: '#F6F9FF', class: 'neutral-200' },
        { name: 'Neutral-300', hex: '#EFF3FA', class: 'neutral-300' },
        { name: 'Neutral-400', hex: '#DBE2F0', class: 'neutral-400' },
        { name: 'Neutral-500', hex: '#95A2BD', class: 'neutral-500' },
        { name: 'Neutral-600', hex: '#616C84', class: 'neutral-600' },
        { name: 'Neutral-700', hex: '#3E495E', class: 'neutral-700' },
        { name: 'Neutral-800', hex: '#252B37', class: 'neutral-800' },
      ]
    },

    {
      title: 'Success',
      colour: [
        { name: 'Success-100', hex: '#E6FFEE', class: 'success-100' },
        { name: 'Success-200', hex: '#B2FBCA', class: 'success-200' },
        { name: 'Success-300', hex: '#69E996', class: 'success-300' },
        { name: 'Success-400', hex: '#00AF3D', class: 'success-400' },
        { name: 'Success-500', hex: '#007A23', class: 'success-500' },
        { name: 'Success-600', hex: '#085E27', class: 'success-600' },
        { name: 'Success-700', hex: '#004217', class: 'success-700' },
      ]
    },
    {
      title: 'Warning',
      colour: [
        { name: 'Warning-100', hex: '#FFFAEB', class: 'warning-100' },
        { name: 'Warning-200', hex: '#FFF1C6', class: 'warning-200' },
        { name: 'Warning-300', hex: '#FFE088', class: 'warning-300' },
        { name: 'Warning-400', hex: '#FFB72A', class: 'warning-400' },
        { name: 'Warning-500', hex: '#F99107', class: 'warning-500' },
        { name: 'Warning-600', hex: '#DD6A02', class: 'warning-600' },
        { name: 'Warning-700', hex: '#B74906', class: 'warning-700' },
      ]
    },

    {
      title: 'Error',
      colour: [
        { name: 'Error-100', hex: '#FFF1F2', class: 'error-100' },
        { name: 'Error-200', hex: '#FFC4C9', class: 'error-200' },
        { name: 'Error-300', hex: '#E56671', class: 'error-300' },
        { name: 'Error-400', hex: '#F01224', class: 'error-400' },
        { name: 'Error-500', hex: '#CB0717', class: 'error-500' },
        { name: 'Error-600', hex: '#8A121C', class: 'error-600' },
        { name: 'Error-700', hex: '#4B040A', class: 'error-700' },
      ]
    }
  ]

}
