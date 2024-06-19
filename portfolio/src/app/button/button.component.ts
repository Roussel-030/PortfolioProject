import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <a 
      class="btn-hover1 relative inline-block overflow-hidden rounded-full border text-white z-[1] px-9 py-4 transition-all duration-300 ease-linear font-medium text-center"
    > 
      More about me
    </a>
  `,
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
