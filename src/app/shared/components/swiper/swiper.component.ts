import { CommonModule } from '@angular/common';
import {
    CUSTOM_ELEMENTS_SCHEMA,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperDirective } from '../../directives/swiper.directive';
import { SwiperSlidesArray } from 'src/app/shared/models/home.types';
import { ChoiceSvgComponent } from '../choice-svg/choice-svg.component';
import { ExclusiveSvgComponent } from '../exclusive-svg/exclusive-svg.component';

@Component({
    selector: 'app-swiper',
    standalone: true,
    imports: [
        CommonModule,
        SwiperDirective,
        ChoiceSvgComponent,
        ExclusiveSvgComponent,
    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
    @Input() slides: SwiperSlidesArray[] = [];
    @Input() config: SwiperOptions = {};
    @Input() activeSlide = 0;
}
