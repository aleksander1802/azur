import { Component } from '@angular/core';

@Component({
    selector: 'app-fee-first-screen',
    templateUrl: './fee-first-screen.component.html',
    styleUrl: './fee-first-screen.component.scss',
})
export class FeeFirstScreenComponent {
    currentCrumbsTitle = 'crumbs_title_fee';

    fees = [
        {
            category: 'fee_first_first_category',
            commission: '6.00 %',
            description: '',
        },
        {
            category: 'fee_first_second_category',
            commission: '5.00 %',
            description: 'fee_first_second_description',
        },
        {
            category: 'fee_first_third_category',
            commission: '12.00 %',
            description: 'fee_first_third_description',
        },
        {
            category: 'fee_first_fourth_category',
            commission: '25.00 %',
            description: 'fee_first_fourth_description',
        },
    ];
}
