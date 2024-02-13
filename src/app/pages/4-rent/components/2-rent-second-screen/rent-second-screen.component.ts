import { Component } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';

@Component({
    selector: 'app-rent-second-screen',
    templateUrl: './rent-second-screen.component.html',
    styleUrl: './rent-second-screen.component.scss',
})
export class RentSecondScreenComponent {
    title = 'filter_title_rent';

    cities: string[] = [
        'filter_location_cannes',
        'filter_location_nice',
        'filter_location_other',
    ];

    data: SellOrRent[] = [
        {
            id: '8b8f9e17-a952-451a-b4b2-94c3bd4ffe43',
            category: 'apartments',
            address: 'filter_location_cannes',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/rent/rent_second_1.jpg',
            price: 1000000,
            area: 104.73,
            large: true,
            choice: true,
        },
        {
            id: '634c5b49-e57d-47c8-b580-e08ed591feb8',
            category: 'apartments',
            address: 'filter_location_nice',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/rent/rent_second_2.jpg',
            price: 1600000,
            area: 114.73,
            exclusive: true,
        },
        {
            id: '4f31d36a-eea4-4927-8a45-64e1ad28271b',
            category: 'apartments',
            address: 'filter_location_cannes',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/rent/rent_second_3.jpg',
            price: 2000000,
            area: 124.73,
            large: true,
        },

        {
            id: '084e752e-029e-47cd-9578-79274de796d6',
            category: 'apartments',
            address: 'filter_location_nice',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/rent/rent_second_4.jpg',
            price: 2600000,
            area: 134.73,
            exclusive: true,
        },
    ];
}
