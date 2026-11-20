import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideArrowDown } from '@lucide/angular';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectService } from '../../core/services/project';

@Component({
  imports: [RouterLink, LucideArrowRight, LucideArrowDown, ProjectCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private projectService = inject(ProjectService);
  projects = this.projectService.projects;

  scrollToProjects(): void {
    const target = document.getElementById('projects');
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - 80;
    const startTime = performance.now();
    const duration = 700;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY + (targetY - startY) * ease);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}
