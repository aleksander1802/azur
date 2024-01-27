import { CommonModule } from '@angular/common';
import {
    CUSTOM_ELEMENTS_SCHEMA,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperDirective } from '../../directives/swiper.directive';
import { SwiperSlidesArray } from 'src/app/models/home.types';

@Component({
    selector: 'app-swiper',
    standalone: true,
    imports: [CommonModule, SwiperDirective],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
    @Input() slides: SwiperSlidesArray[] = [];

    @Input() config: SwiperOptions = {};
}
