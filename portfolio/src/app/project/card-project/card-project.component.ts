import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card-project.component.html',
  styles: ``
})
export class CardProjectComponent {
  @Input() dataImage: string = "";
  @Input() dataHref1: string = "";
  @Input() dataHref2: string = "";
}
