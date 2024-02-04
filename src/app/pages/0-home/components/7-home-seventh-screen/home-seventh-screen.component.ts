import { Component, Input, Output } from '@angular/core';
import { SwiperSlidesArray } from 'src/app/shared/models/home.types';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-home-seventh-screen',
    templateUrl: './home-seventh-screen.component.html',
    styleUrl: './home-seventh-screen.component.scss',
})
export class HomeSeventhScreenComponent {
    slides: SwiperSlidesArray[] = [
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_1.jpg',
            addedBottomClass: true,
            article: true,
            link: true,
        },
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_2.jpg',
            addedBottomClass: true,
            news: true,
            link: true,
        },
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_3.jpg',
            addedBottomClass: true,
            article: true,
            link: true,
        },
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_4.png',
            addedBottomClass: true,
            news: true,
            link: true,
        },
        {
            title: 'Апартаменты с видом на море на Английской набережной',
            description:
                'Полностью отремонтированная 3-комнатная квартира на 5 этаже в небольшой резиденции на знаменитой Английской набережной. ',
            img: 'assets/images/home/slider_5.jpg',
            addedBottomClass: true,
            article: true,
            link: true,
        },
    ];

    activeSlideIndex = 0;

    config: SwiperOptions = {
        modules: [Navigation],
        navigation: {
            nextEl: '.home__seventh_slider-button-next',
            prevEl: '.home__seventh_slider-button-prev',
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
