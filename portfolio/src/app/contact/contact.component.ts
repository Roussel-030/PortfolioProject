import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import 'emoji-picker-element';
import { EmojiClickEvent } from 'emoji-picker-element/shared';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './contact.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactComponent {

  showEmojiPicker: boolean = false;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: EmojiClickEvent) {
    const emoji = event.detail.unicode;
    const messageInput = document.getElementById('floating_message') as HTMLTextAreaElement;
    messageInput.value += emoji;
  }

}
