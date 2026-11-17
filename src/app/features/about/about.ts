import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  private router = inject(Router);
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

  scrollToProjects() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    });
  }
}
