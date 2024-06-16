import { Component } from '@angular/core';
import { CardServiceComponent } from './card-service/card-service.component';
import { services } from '../mockData';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CardServiceComponent],
  templateUrl: './service.component.html',
  styles: ``
})
export class ServiceComponent {

  services: {dataImage: string, dataH4: string, dataP: string}[] = services;

}
