import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  imports: [RouterLink, LucideArrowRight, ProjectCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  projects = [
  {
    id: 1,
    title: 'Digital Hymn Book',
    description: 'A digital platform for browsing hymns, exploring categories and managing favourite hymns.',
    technology: 'Angular',
    githubUrl: 'https://github.com/EstherOluyemi/digital-hymn-book',
    liveUrl: 'https://digital-hymn-book.vercel.app/',
    imageUrl: null,
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'A personal portfolio showcasing my frontend development skills and projects.',
    technology: 'Angular',
    githubUrl: 'https://github.com/EstherOluyemi/esther-portfolio',
    liveUrl: null,
    imageUrl: null,
  },
  {
    id: 3,
    title: 'React Projects',
    description: 'A collection of interactive web applications built while exploring React.',
    technology: 'React',
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
  },
  {
  id: 4,
  title: 'Accessible Peer-to-Peer Learning System',
  description: 'A peer-to-peer learning platform designed to support collaborative learning and knowledge sharing.',
  technology: 'React',
  githubUrl: 'https://github.com/EstherOluyemi/Peer-Learning-system',
  liveUrl: 'https://peer-learning-system.vercel.app/',
  imageUrl: null,
},
];
}
