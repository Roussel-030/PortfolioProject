import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { particlesConfig } from '../assets/ts/particles-config';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, AboutComponent, ServiceComponent, SkillComponent, ProjectComponent, ContactComponent],
  template: `
    <app-header />
    <app-home />
    <app-about />
    <app-service />
    <app-skill />
    <app-project />
    <app-contact />
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadParticles();
  }

  loadParticles(): void {
    particlesJS('particles-js', particlesConfig);
  }

}
