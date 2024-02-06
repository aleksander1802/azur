import { Component, ElementRef } from '@angular/core';
import { ActiveTab } from '../../models/buy-sell-rent.types';

@Component({
    selector: 'app-buy-sell-rent-second-screen',
    templateUrl: './buy-sell-rent-second-screen.component.html',
    styleUrl: './buy-sell-rent-second-screen.component.scss',
})
export class BuySellRentSecondScreenComponent {
    fill = '#BE7E00';

    activeTab: ActiveTab = 'buy';

    setActiveTab(tab: ActiveTab) {
        this.activeTab = tab;
        this.scrollToAdvantages();
    }

    constructor(private elRef: ElementRef) {}

    scrollToAdvantages() {
        const advantagesElement =
            this.elRef.nativeElement.querySelector('#advantages');
        if (advantagesElement) {
            advantagesElement.scrollIntoView({
                block: 'start',
                inline: 'nearest',
            });
        }
    }
}
