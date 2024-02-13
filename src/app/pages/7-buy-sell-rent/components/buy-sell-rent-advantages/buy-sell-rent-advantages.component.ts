import { Component, Input } from '@angular/core';
import { ActiveTab, Advantages } from '../../models/buy-sell-rent.types';

@Component({
    selector: 'app-buy-sell-rent-advantages',
    templateUrl: './buy-sell-rent-advantages.component.html',
    styleUrl: './buy-sell-rent-advantages.component.scss',
})
export class BuySellRentAdvantagesComponent {
    @Input() advantage: ActiveTab = 'buy';

    advantagesData: Advantages = {
        buy: {
            title: 'buy-sell-rent_advantage_buy_title',
            advantages: {
                first: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_buy_first_subtitle',
                    description:
                        'buy-sell-rent_advantage_buy_first_description',
                },

                second: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_buy_first_subtitle',
                    description:
                        'buy-sell-rent_advantage_buy_second_description',
                },

                third: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_buy_first_subtitle',
                    description:
                        'buy-sell-rent_advantage_buy_third_description',
                },
            },
        },
        rent: {
            title: 'buy-sell-rent_advantage_rent_title',
            advantages: {
                first: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_rent_first_subtitle',
                    description:
                        'buy-sell-rent_advantage_rent_first_description',
                },

                second: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_rent_second_subtitle',
                    description:
                        'buy-sell-rent_advantage_rent_second_description',
                },

                third: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_rent_third_subtitle',
                    description:
                        'buy-sell-rent_advantage_rent_third_description',
                },
            },
        },
        sell: {
            title: 'buy-sell-rent_advantage_sell_title',
            advantages: {
                first: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_sell_first_subtitle',
                    description:
                        'buy-sell-rent_advantage_sell_first_description',
                },

                second: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_sell_second_subtitle',
                    description:
                        'buy-sell-rent_advantage_sell_second_description',
                },

                third: {
                    number: 100,
                    symbol: 'percent',
                    subtitle: 'buy-sell-rent_advantage_buy_first_subtitle',
                    description:
                        'buy-sell-rent_advantage_sell_third_description',
                },
            },
        },
    };
}
