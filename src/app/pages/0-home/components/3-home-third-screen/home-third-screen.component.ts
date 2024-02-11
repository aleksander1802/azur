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
            address: 'slider_address_cannes',
            title: 'slider_title_full',
            description: 'slider_description',
            img: 'assets/images/home/slider_1.jpg',
            choice: true,
            sell: true,
        },
        {
            address: 'slider_address_nice',
            title: 'slider_title_full',
            description: 'slider_description',
            img: 'assets/images/home/slider_2.jpg',
            exclusive: true,
            sell: true,
        },
        {
            address: 'slider_address_cannes',
            title: 'slider_title_full',
            description: 'slider_description',
            img: 'assets/images/home/slider_3.jpg',
            exclusive: true,
            sell: true,
        },
        {
            address: 'slider_address_nice',
            title: 'slider_title_full',
            description: 'slider_description',
            img: 'assets/images/home/slider_4.png',
            sell: true,
        },
        {
            address: 'slider_address_cannes',
            title: 'slider_title_full',
            description: 'slider_description',
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
