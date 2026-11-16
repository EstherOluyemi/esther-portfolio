import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ThemeService {
    theme = signal<'light' | 'dark'>(this.getSavedTheme());

    constructor() {
        this.applyTheme(this.theme());
    }

    toggleTheme(): void {
        this.theme.update((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
        );

        const currentTheme = this.theme();

        localStorage.setItem('portfolio-theme', currentTheme);

        this.applyTheme(currentTheme);
    }

    private getSavedTheme(): 'light' | 'dark' {
        const savedTheme = localStorage.getItem('portfolio-theme');

        return savedTheme === 'dark' ? 'dark' : 'light';
    }

    private applyTheme(theme: 'light' | 'dark'): void {
        document.documentElement.classList.toggle(
            'dark-theme',
            theme === 'dark'
        );
    }
}