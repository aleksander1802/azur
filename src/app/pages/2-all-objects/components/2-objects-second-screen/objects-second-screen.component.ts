import { Component } from '@angular/core';
import { SwiperSlidesArray } from 'src/app/shared/models/home.types';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-objects-second-screen',
    templateUrl: './objects-second-screen.component.html',
    styleUrl: './objects-second-screen.component.scss',
})
export class ObjectsSecondScreenComponent {
    slides: SwiperSlidesArray[] = [
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_4.png',
            sell: true,
            address: 'slider_address_cannes',
            single: true,
        },
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_5.jpg',
            sell: true,
            address: 'slider_address_cannes',
            exclusive: true,
            single: true,
        },
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_1.jpg',
            sell: true,
            address: 'slider_address_cannes',
            choice: true,
            single: true,
        },
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_2.jpg',
            sell: true,
            address: 'slider_address_cannes',
            exclusive: true,
            single: true,
        },
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_3.jpg',
            sell: true,
            address: 'slider_address_cannes',
            choice: true,
            single: true,
        },
    ];

    activeSlideIndex = 0;

    config: SwiperOptions = {
        modules: [Navigation],
        navigation: {
            nextEl: '.objects__second_slider-button-next',
            prevEl: '.objects__second_slider-button-prev',
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
