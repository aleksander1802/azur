import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    currentLanguage: string = 'ru';

    constructor(private translocoService: TranslocoService) {}

    setCurrentLanguage(language: string) {
        this.translocoService.setActiveLang(language);
        this.currentLanguage = language;
    }

    getCurrentLanguage(): string {
        return this.currentLanguage;
    }
}
