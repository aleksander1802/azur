import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'breakSentenceWithBR',
})
export class breakSentenceWithBRPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string, breakAfter: number = 1): SafeHtml {
        if (!value) {
            return '';
        }

        const words = value.split(' ');

        if (breakAfter <= 0 || breakAfter >= words.length) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        }

        const firstPart = words.slice(0, breakAfter).join(' ');
        const secondPart = words.slice(breakAfter).join(' ');

        const result = `${firstPart}<br>${secondPart}`;

        return this.sanitizer.bypassSecurityTrustHtml(result);
    }
}
