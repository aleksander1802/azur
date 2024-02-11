import { provideTransloco, TranslocoModule } from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
    exports: [TranslocoModule],
    providers: [
        provideTransloco({
            config: {
                availableLangs: ['en', 'fr', 'ru', 'it'],
                defaultLang: 'ru',

                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader,
        }),
    ],
})
export class TranslocoRootModule {}
