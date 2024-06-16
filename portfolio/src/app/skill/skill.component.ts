import { Component } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { progressBars, professionalSkills } from '../mockData';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './skill.component.html',
  styles: ``
})
export class SkillComponent {
  progressBars: {dataImage: string, dataSpan1: string, dataSpan2: string, colorSpan1: string, colorSpan2: string, colorBar: string, dataStyle: string}[] = progressBars;
  professionalSkills: {dataImage: string, dataSpan1: string, dataSpan2: string, colorSpan1: string, colorSpan2: string, colorBar: string, dataStyle: string}[] = professionalSkills;
}
