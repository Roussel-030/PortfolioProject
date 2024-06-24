import { Component, OnInit } from '@angular/core';
import { TypeAbout, dataAbout, translateAboutData } from './mockDataAbout';
import { CardAboutComponent } from './card-about/card-about.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardAboutComponent, TranslateModule],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent implements OnInit {
  dataAbouts: TypeAbout[] = dataAbout; 

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  private async updateTranslations() {
    this.dataAbouts = await translateAboutData(this.translateService);
  }

}
