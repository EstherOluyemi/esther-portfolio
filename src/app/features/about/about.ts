import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'React',
    'Tailwind CSS',
  ];

  tools = [
    'Git',
    'Github',
    'VS Code',
    'Figma',
    'Vercel',
  ];
}
