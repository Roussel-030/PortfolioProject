import { Component, OnInit } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { technicalSkills, professionalSkills, TypeSkill, translateSkillData } from './mockDataSkill';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [ProgressBarComponent, TranslateModule],
  templateUrl: './skill.component.html',
  styles: ``
})
export class SkillComponent implements OnInit {
  technicalSkills: TypeSkill[] = technicalSkills;
  professionalSkills: TypeSkill[] = professionalSkills;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  private async updateTranslations() {
    this.professionalSkills = await translateSkillData(this.translateService);
  }

}
