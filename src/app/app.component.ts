import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../components/molecules/button/button.component';
import { IconComponent } from '../components/atoms/icon/icon.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, IconComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'code-connect';
}
