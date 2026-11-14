import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectService } from '../../core/services/project';

@Component({
  imports: [RouterLink, LucideArrowRight, ProjectCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  private projectService = inject(ProjectService);
  projects = this.projectService.projects;

}
