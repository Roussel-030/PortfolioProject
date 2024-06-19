import { Component } from '@angular/core';
import { dataProject } from '../mockData';
import { CardProjectComponent } from './card-project/card-project.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './project.component.html',
  styles: ``
})
export class ProjectComponent {
  projects: {dataImage: string, dataHref1: string, dataHref2: string}[] = dataProject;
}
