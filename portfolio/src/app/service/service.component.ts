import { Component, OnInit } from '@angular/core';
import { CardServiceComponent } from './card-service/card-service.component';
import { TypeTranslate, services, translateServicesData } from './mockDataService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CardServiceComponent, TranslateModule],
  templateUrl: './service.component.html',
  styles: ``
})
export class ServiceComponent implements OnInit {

  services: TypeTranslate[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  private async updateTranslations() {
    this.services = await translateServicesData(this.translateService);
  }

}
