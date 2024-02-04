import { Component } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';

@Component({
    selector: 'app-sell-second-screen',
    templateUrl: './sell-second-screen.component.html',
    styleUrl: './sell-second-screen.component.scss',
})
export class SellSecondScreenComponent {
    title = ' на продажу';

    cities: string[] = ['Канны, Франция', 'Ницца, Франция', 'Другие'];

    data: SellOrRent[] = [
        {
            id: '49ed4276-599d-49de-9171-2d1339c1ee14',
            category: 'apartments',
            address: 'Канны, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной.',
            img: '/assets/images/home/slider_4.png',
            price: 1000000,
            area: 104.73,
            large: true,
            choice: true,
        },
        {
           id: '228541aa-8c1b-43d6-aa08-00a735625f09',
            category: 'apartments',
            address: 'Ницца, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной.',
            img: '/assets/images/home/slider_3.jpg',
            price: 1600000,
            area: 114.73,
            exclusive: true,
        },
        {
             id: '7d42aa35-f374-4e1a-ae3d-e129e191ca10',
            category: 'apartments',
            address: 'Канны, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной.',
            img: '/assets/images/home/slider_2.jpg',
            price: 2000000,
            area: 124.73,
            large: true,
        },

        {
            id: '837217bc-c290-4cd5-b423-a96a04d091d1',
            category: 'apartments',
            address: 'Ницца, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной.',
            img: '/assets/images/home/slider_4.jpg',
            price: 2600000,
            area: 134.73,
            exclusive: true,
        },
    ];
}
