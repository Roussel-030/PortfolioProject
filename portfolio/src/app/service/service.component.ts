import { Component, OnInit } from '@angular/core';
import { CardServiceComponent } from './card-service/card-service.component';
import { services, translateMockDataService } from './mockDataService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CardServiceComponent, TranslateModule],
  templateUrl: './service.component.html',
  styles: ``
})
export class ServiceComponent implements OnInit{

  // services: { dataImage: string, dataH4: string, dataP: string }[] = [];

  // constructor(private translateService: TranslateService) {
  //   this.services = translateMockDataService(services, this.translateService);
  //   console.log("Translated services:", this.services);
  // }

  services: { dataImage: string, dataH4: string, dataP: string }[] = [];

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateServices();
  }

  translateServices(): void {
    this.services = translateMockDataService(services, this.translateService);
    console.log("Translated services:", this.services);
  }

}
