import { Component } from '@angular/core';

@Component({
    selector: 'app-policy-first-screen',
    templateUrl: './policy-first-screen.component.html',
    styleUrl: './policy-first-screen.component.scss',
})
export class PolicyFirstScreenComponent {
    currentCrumbsTitle = 'crumbs_title_privacy';

    privacyParagraphs = [
        'privacy_first_paragrapgh_first',
        'privacy_first_paragrapgh_second',
        'privacy_first_paragrapgh_third',
        'privacy_first_paragrapgh_fourth',
    ];
}
