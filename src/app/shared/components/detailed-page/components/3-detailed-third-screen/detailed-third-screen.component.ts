import { Component } from '@angular/core';
import { DetailedSellOrRent } from 'src/app/shared/models/home.types';
import { SharedModule } from 'src/app/shared/shared.module';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-detailed-third-screen',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './detailed-third-screen.component.html',
    styleUrl: './detailed-third-screen.component.scss',
})
export class DetailedThirdScreenComponent {
    slides: DetailedSellOrRent[] = [
        {
            'title-short': 'slider_title_short',
            img: 'assets/images/detailed/detailed_first.jpg',
        },
        {
            'title-short': 'slider_title_short',
            img: 'assets/images/detailed/detailed_second.jpg',
        },
        {
            'title-short': 'slider_title_short',
            img: 'assets/images/detailed/detailed_third.jpg',
        },
        {
            'title-short': 'slider_title_short',
            img: 'assets/images/detailed/detailed_fourth.jpg',
        },
    ];

    config: SwiperOptions = {
        modules: [Navigation],
        navigation: {
            nextEl: '.detailed__slider_button-next',
            prevEl: '.detailed__slider_button-prev',
            enabled: true,
        },
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        grabCursor: true,
    };
}
