import { Component } from '@angular/core';
import { dataAbout } from '../mockData';
import { CardAboutComponent } from './card-about/card-about.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardAboutComponent],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {
  dataAbouts: {order: string, text:string}[] = dataAbout;
}
