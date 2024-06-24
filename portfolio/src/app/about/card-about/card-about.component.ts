import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  standalone: true,
  imports: [],
  templateUrl: './card-about.component.html',
  styles: ``
})
export class CardAboutComponent {
  @Input() order: string = "";
  @Input() text: string = "";
}
