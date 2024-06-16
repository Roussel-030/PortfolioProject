import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styles: ``
})
export class CardServiceComponent {
  @Input() dataImage: string = "";
  @Input() dataH4: string = "";
  @Input() dataP: string = "";
}
