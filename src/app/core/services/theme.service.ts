import { inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'theme';

  readonly currentTheme = signal<Theme>('light');
  readonly themes: Theme[] = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
    'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
    'wireframe', 'black', 'luxury', 'dracula'
  ];

  constructor() {
    const savedTheme = (typeof window !== 'undefined' ? localStorage.getItem(this.storageKey) : null) as Theme | null;
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.applyTheme(savedTheme);
      return;
    }
    this.applyTheme(this.currentTheme());
  }

  setTheme(theme: Theme) {
    if (!this.themes.includes(theme)) {
      return;
    }
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme) {
    this.currentTheme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, theme);
    }
  }
}

