import { Component } from '@angular/core';
import { SwiperSlidesArray } from 'src/app/shared/models/home.types';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-objects-third-screen',
    templateUrl: './objects-third-screen.component.html',
    styleUrl: './objects-third-screen.component.scss',
})
export class ObjectsThirdScreenComponent {
    slides: SwiperSlidesArray[] = [
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_3.jpg',
            rent: true,
            address: 'Канны, франция',
            choice: true,
            single: true,
        },
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_4.png',
            rent: true,
            address: 'Канны, франция',
            single: true,
        },

        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_2.jpg',
            rent: true,
            address: 'Канны, франция',
            exclusive: true,
            single: true,
        },

        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_5.jpg',
            rent: true,
            address: 'Канны, франция',
            exclusive: true,
            single: true,
        },
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_1.jpg',
            rent: true,
            address: 'Канны, франция',
            choice: true,
            single: true,
        },
    ];

    activeSlideIndex = 0;

    config: SwiperOptions = {
        modules: [Navigation],
        navigation: {
            nextEl: '.objects__third_slider-button-next',
            prevEl: '.objects__third_slider-button-prev',
            enabled: true,
        },
        autoHeight: true,
        slidesPerView: 2,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        loop: true,
        on: {
            slideChange: (swiper) => {
                this.activeSlideIndex = swiper.realIndex;
            },
        },
        grabCursor: true,
        injectStyles: [
            `
          :host .swiper-wrapper {align-items: center;}   
        `,
        ],
    };
}
