import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RightSidebarComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  @ViewChild(RightSidebarComponent) rightSidebar!: RightSidebarComponent;

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

  toggleSidebar(): void {
    this.rightSidebar.toggleSidebar();
  }

}
