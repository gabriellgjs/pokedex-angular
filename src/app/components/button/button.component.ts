import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() value!: string;
}
