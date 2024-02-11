import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './language-switcher.component.html',
    styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
    languages: string[] = ['en', 'fr', 'ru', 'it'];

    constructor(private translationService: TranslationService) {}

    switchLanguage(language: string) {
        this.translationService.setCurrentLanguage(language);
    }

    get currentLanguage(): string {
        return this.translationService.getCurrentLanguage();
    }
}
