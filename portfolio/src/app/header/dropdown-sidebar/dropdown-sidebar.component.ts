import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dataDropDown } from './mockDataDropdown';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dropdown-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './dropdown-sidebar.component.html',
  styles: ``
})
export class DropdownSidebarComponent  {

  isDropdownOpen = false;
  selectedLanguage: { name: string, flagUrl: string } | null = null;

  dataDropDown = dataDropDown;

  constructor(private translateService: TranslateService, library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.translateService.setDefaultLang('en');
    this.selectedLanguage = this.dataDropDown[0];
    this.translateService.use(this.selectedLanguage.name);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: { name: string; flagUrl: string }) {
    this.selectedLanguage = lang;
    this.translateService.use(lang.name);
    this.isDropdownOpen = false;
  }

}
