import { Component } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';

@Component({
    selector: 'app-sell-second-screen',
    templateUrl: './sell-second-screen.component.html',
    styleUrl: './sell-second-screen.component.scss',
})
export class SellSecondScreenComponent {
    title = 'filter_title_sell';

    cities: string[] = [
        'filter_location_cannes',
        'filter_location_nice',
        'filter_location_other',
    ];

    data: SellOrRent[] = [
        {
            id: '49ed4276-599d-49de-9171-2d1339c1ee14',
            category: 'apartments',
            address: 'filter_location_cannes',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/home/slider_4.png',
            price: 1000000,
            area: 104.73,
            large: true,
            choice: true,
        },
        {
            id: '228541aa-8c1b-43d6-aa08-00a735625f09',
            category: 'apartments',
            address: 'filter_location_nice',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/home/slider_3.jpg',
            price: 1600000,
            area: 114.73,
            exclusive: true,
        },
        {
            id: '7d42aa35-f374-4e1a-ae3d-e129e191ca10',
            category: 'apartments',
            address: 'filter_location_cannes',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/home/slider_2.jpg',
            price: 2000000,
            area: 124.73,
            large: true,
        },

        {
            id: '837217bc-c290-4cd5-b423-a96a04d091d1',
            category: 'apartments',
            address: 'filter_location_nice',
            title: 'filter_title_full',
            description: 'filter_description_full',
            img: 'assets/images/home/slider_4.jpg',
            price: 2600000,
            area: 134.73,
            exclusive: true,
        },
    ];
}
