import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() rank: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' = 'primary';
  @Input() outline = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled=false;
  @Input() inProgress=false;
  
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let outlineString = '';
    let disabledString = ''
    if (this.outline) {
      outlineString = 'outline-'
    }
    if (this.disabled || this.inProgress) {
      disabledString = 'disabled'
    }
    return ['btn', `btn-` + `${outlineString}` + `${this.rank}`, `btn-${this.size}`, `${disabledString}`];
  }
}
