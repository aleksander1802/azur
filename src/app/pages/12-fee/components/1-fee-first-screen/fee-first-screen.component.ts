import { Component } from '@angular/core';

@Component({
    selector: 'app-fee-first-screen',
    templateUrl: './fee-first-screen.component.html',
    styleUrl: './fee-first-screen.component.scss',
})
export class FeeFirstScreenComponent {
    currentCrumbsTitle = 'Наша комиссия';

    fees = [
        { category: 'Продажа', commission: '6.00 %', description: '' },
        {
            category: 'Продажа',
            commission: '5.00 %',
            description: 'для эксклюзивных мандатов и бывших клиентов',
        },
        {
            category: 'Продажа',
            commission: '12.00 %',
            description: 'парковка, гараж',
        },
        {
            category: 'Сезонная аренда',
            commission: '25.00 %',
            description:
                'управление недвижимостью - цены в зависимости от задания.',
        },
    ];
}
