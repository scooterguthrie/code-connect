import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { MaterialSymbol } from 'material-symbols';

@Component({
  selector: 'icon',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host: {
    class: 'material-symbols-rounded',
    '[attr.aria-hidden]': 'true',
    '[class]': 'size',
  },
})
export class IconComponent {
  @Input() name: MaterialSymbol = 'add_circle';
  @Input() size: 'default' | 'icon-sm' | 'icon-lg' = 'default';
}
