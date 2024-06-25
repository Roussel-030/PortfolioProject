import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  templateUrl: './right-sidebar.component.html',
  styles: [`
    .sidebar-hidden {
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }
    .sidebar-visible {
      transform: translateX(0);
      transition: transform 0.3s ease;
    }
  `]
})
export class RightSidebarComponent {
  @Input() scrollToAnchor!: (anchor: string) => void;
  isVisible: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  handleClick(anchor: string): void {
    if (isPlatformBrowser(this.platformId) && this.scrollToAnchor) {
      this.scrollToAnchor(anchor);
    } else {
      console.log('Cannot scroll in SSR mode or scrollToAnchor is not provided.');
    }
  }

  toggleSidebar(): void {
    this.isVisible = !this.isVisible;
  }

}
