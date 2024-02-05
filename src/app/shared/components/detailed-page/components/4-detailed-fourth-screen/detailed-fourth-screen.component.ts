import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObjectDetails } from 'src/app/shared/models/home.types';

@Component({
    selector: 'app-detailed-fourth-screen',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './detailed-fourth-screen.component.html',
    styleUrl: './detailed-fourth-screen.component.scss',
})
export class DetailedFourthScreenComponent {
    details: ObjectDetails = {
        common: {
            area: 1000,
            rooms: 7,
            heating: 'Кондиционирование',
            hot_water: 'Индивидуальный',
            state: 'Отличное состояние',
            landmarks: 'Восток, Юг, Восток',
            view: 'Панорамный вид на море',
        },
        services: [
            'Кондиционирование',
            'Двойное остекление',
            'Джакузи',
            'Электрические маркизы',
            'Барбекю',
            'Консьерж',
            'Бассейн',
            'Вид',
            'Камин',
            'Интернет',
            'Мебель',
            'Спринклер для полива',
            'Лифт',
            'Домофон',
            'Сауна',
        ],
        distance: {
            airport: '40 минут',
            bus_stop: '10  минут',
            sea: '5  минут',
            beach: '5  минут',
            highway: '15  минут',
            city_center: '10  минут',
            park: '5  минут',
            seaport: '10  минут',
        },
        description:
            'Прекрасная полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной.',
    };
}
