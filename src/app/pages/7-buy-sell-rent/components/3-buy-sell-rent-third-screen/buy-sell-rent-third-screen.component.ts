import { Component, ElementRef } from '@angular/core';
import { RealEstate } from '../../models/buy-sell-rent.types';

@Component({
    selector: 'app-buy-sell-rent-third-screen',
    templateUrl: './buy-sell-rent-third-screen.component.html',
    styleUrl: './buy-sell-rent-third-screen.component.scss',
})
export class BuySellRentThirdScreenComponent {
    realEstates: RealEstate[] = [
        {
            title: 'buy-sell-rent_third_title_buy',
            description: 'buy-sell-rent_third_description_buy',
            imageUrl: 'assets/images/letters/b.svg',
            actionLink: '',
        },
        {
            title: 'buy-sell-rent_third_title_sell',
            description: 'buy-sell-rent_third_description_sell',
            imageUrl: 'assets/images/letters/s.svg',
            actionLink: '',
        },
        {
            title: 'buy-sell-rent_third_title_rent',
            description: 'buy-sell-rent_third_description_rent',
            imageUrl: 'assets/images/letters/r.svg',
            actionLink: '',
        },
    ];
}
