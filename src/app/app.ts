import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

@Component({
  imports: [RouterOutlet, RouterLink, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('esther-portfolio');
}
