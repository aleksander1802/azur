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
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_3.jpg',
            rent: true,
            address: 'slider_address_cannes',
            choice: true,
            single: true,
        },
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_4.png',
            rent: true,
            address: 'slider_address_cannes',
            single: true,
        },

        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_2.jpg',
            rent: true,
            address: 'slider_address_cannes',
            exclusive: true,
            single: true,
        },

        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_5.jpg',
            rent: true,
            address: 'slider_address_cannes',
            exclusive: true,
            single: true,
        },
        {
            title: 'slider_title_full',
            description:
                'slider_description',
            img: 'assets/images/home/slider_1.jpg',
            rent: true,
            address: 'slider_address_cannes',
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
