import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
    'Vercel',
  ];
}
