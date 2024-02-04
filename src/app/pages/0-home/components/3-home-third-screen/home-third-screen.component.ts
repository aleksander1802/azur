import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { SwiperSlidesArray } from 'src/app/shared/models/home.types';

@Component({
    selector: 'app-home-third-screen',
    templateUrl: './home-third-screen.component.html',
    styleUrl: './home-third-screen.component.scss',
})
export class HomeThirdScreenComponent {
    slidesSlider: SwiperSlidesArray[] = [
        {
            address: 'Канны, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_1.jpg',
            choice: true,
            sell: true,
        },
        {
            address: 'Ницца, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_2.jpg',
            exclusive: true,
            sell: true,
        },
        {
            address: 'Ницца, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_3.jpg',
            exclusive: true,
            sell: true,
        },
        {
            address: 'Ницца, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_4.png',
            sell: true,
        },
        {
            address: 'Ницца, Франция',
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_5.jpg',
            sell: true,
        },
    ];

    config: SwiperOptions = {
        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            enabled: true,
        },
        autoHeight: true,
        slidesPerView: 2,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        loop: true,
        grabCursor: true,
        injectStyles: [
            `
              :host .swiper-wrapper {align-items: center;}             
            `,
        ],
    };
}
