import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
//import { MaterialSymbol } from 'material-symbols';

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
  @Input() rank?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' 
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-info'
    | 'outline-warning'
    | 'outline-anger'
    | 'outline-light'
    | 'outline-dark' = 'primary';
  @Input() type?: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: 'default' | 'sm' | 'lg' = 'default';
  //@Input() icon: MaterialSymbol | null = null;
  @Input() icon: null | '3d_rotation' | 'accessibility' | 'accessible' | 'accessible_forward' | 'account_box' | 'account_child' | 'account_child_invert' | 'account_circle' | 'accessibility_new' = null;
  @Input() iconOnly? = false;
  @Input() inProgress? = false;
  @Input() disabled? = false;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let disabledString = '';
    if (this.disabled || this.inProgress) {
      disabledString = 'disabled';
    }
    return [
      'btn',
      `btn-${this.rank}`,
      `btn-${this.size}`,
      `${disabledString}`,
    ];
  }
}
