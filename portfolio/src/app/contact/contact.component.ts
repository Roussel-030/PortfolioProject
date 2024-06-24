import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

}
