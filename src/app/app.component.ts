import { Component } from '@angular/core';
import { VerziokezelesComponent } from './verziokezeles/verziokezeles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerziokezelesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verziokezeles';
}
