import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller, @Inject(PLATFORM_ID) private platformId: Object, private library: FaIconLibrary) {
    library.addIcons(faBars);
  }

  scrollToAnchor(anchor: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const headerHeight: number = document.querySelector('nav')?.offsetHeight || 0;
      const element: HTMLElement | null = document.getElementById(anchor);
      if (element) {
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }

}
