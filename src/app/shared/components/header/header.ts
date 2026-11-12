import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideMenu, LucideX } from '@lucide/angular';

@Component({
  imports: [RouterLink, LucideMenu, LucideX],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen = signal(false);

  toggleMenu(){
    this.isMenuOpen.update((currentState) => !currentState); 
  }

  closeMenu(){
    this.isMenuOpen.set(false);
  }
}
