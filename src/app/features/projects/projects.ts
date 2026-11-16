import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  private projectService = inject(ProjectService);

  projects = this.projectService.projects;
}
