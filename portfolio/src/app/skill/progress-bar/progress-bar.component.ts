import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styles: ``
})
export class ProgressBarComponent {
  @Input() dataImage: string = "";
  @Input() dataSpan1: string = "";
  @Input() dataSpan2: string = "";
  @Input() colorSpan1: string = "";
  @Input() colorSpan2: string = "";
  @Input() colorBar: string = "";
  @Input() dataStyle: string = "";
}
