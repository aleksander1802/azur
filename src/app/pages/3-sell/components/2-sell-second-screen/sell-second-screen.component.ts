import { Component } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';

@Component({
    selector: 'app-sell-second-screen',
    templateUrl: './sell-second-screen.component.html',
    styleUrl: './sell-second-screen.component.scss',
})
export class SellSecondScreenComponent {
    title = 'Объекты на продажу';

    cities: string[] = ['Канны, Франция', 'Ницца, Франция', 'Другие'];

    data: SellOrRent[] = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
