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
}
