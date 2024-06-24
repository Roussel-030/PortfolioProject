import { Component } from '@angular/core';
import { dataProject } from './mockDataProject';
import { CardProjectComponent } from './card-project/card-project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardProjectComponent, TranslateModule],
  templateUrl: './project.component.html',
  styles: ``
})
export class ProjectComponent {
  projects: {dataImage: string, dataHref1: string, dataHref2: string}[] = dataProject;
}
