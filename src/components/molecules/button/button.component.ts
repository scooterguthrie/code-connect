import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { MaterialSymbol } from 'material-symbols';

@Component({
  selector: 'button[bs-button], a[bs-button]',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'classes',
    '[type]': 'type',
    '[attr.aria-disabled]': 'disabled || inProgress',
  },
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() rank:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' = 'primary';
  @Input() outline = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: 'default' | 'sm' | 'lg' = 'default';
  @Input() icon: MaterialSymbol | null = null;
  @Input() iconOnly = false;
  @Input() inProgress = false;
  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let outlineString = '';
    let disabledString = '';
    if (this.outline) {
      outlineString = 'outline-';
    }
    if (this.disabled || this.inProgress) {
      disabledString = 'disabled';
    }
    return [
      'btn',
      `btn-` + `${outlineString}` + `${this.rank}`,
      `btn-${this.size}`,
      `${disabledString}`,
    ];
  }
}
