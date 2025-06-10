import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
//import type { MaterialSymbol } from 'material-symbols';

@Component({
  selector: 'icon',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host: {
    class: 'material-symbols-rounded',
    '[class]': 'classes',
    '[attr.aria-hidden]': 'true',
  },
})
export class IconComponent {
  //@Input() name: MaterialSymbol = 'add_circle';
  @Input() name: '3d_rotation' | 'accessibility' | 'accessible' | 'accessible_forward' | 'account_box' | 'account_child' | 'account_child_invert' | 'account_circle' | 'accessibility_new' = 'account_box';
  @Input() size: 'default' | 'sm' | 'lg' = 'default';

  public get classes(): string[] {
    return ['material-symbols-rounded', `icon-${this.size}`,]
  }
}
