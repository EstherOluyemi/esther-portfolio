import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  title = input.required<string>();
  description = input.required<string>();
  technology = input.required<string>();
  githubUrl = input<string | null>(null);
  liveUrl = input<string | null>(null);
  imageUrl = input<string | null>(null);
}
