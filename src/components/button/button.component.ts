import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { MaterialSymbol } from 'material-symbols';

@Component({
  selector: '[bs-button]',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'classes',
    '[type]': 'type',
    '[attr.aria-disabled]': 'disabled || inProgress'
  },
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' = 'primary';
  @Input() outline = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled=false;
  @Input() inProgress=false;
  // @Input() iconStart: null | MaterialSymbol = null;
  // @Input() iconEnd: null | MaterialSymbol = null;
  
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let outlineString = '';
    let disabledString = '';
    if (this.outline) {
      outlineString = 'outline-'
    }
    if (this.disabled || this.inProgress) {
      disabledString = 'disabled'
    }
    return ['btn', `btn-` + `${outlineString}` + `${this.variant}`, `btn-${this.size}`, `${disabledString}`];
  }
}
