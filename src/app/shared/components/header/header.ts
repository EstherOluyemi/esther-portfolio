import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideMenu, LucideX, LucideSun, LucideMoon } from '@lucide/angular';
import { ThemeService } from '../../../core/services/theme';

@Component({
  imports: [RouterLink, RouterLinkActive, LucideMenu, LucideX, LucideSun, LucideMoon],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen = signal(false);

  private themeService = inject(ThemeService);

  theme = this.themeService.theme;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen.update((currentState) => !currentState);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
