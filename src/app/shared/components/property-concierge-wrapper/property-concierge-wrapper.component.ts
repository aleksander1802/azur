import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-property-concierge-wrapper',
    standalone: true,
    imports: [],
    templateUrl: './property-concierge-wrapper.component.html',
    styleUrl: './property-concierge-wrapper.component.scss',
})
export class PropertyConciergeWrapperComponent {
    @Input() title = 'Управление недвижимостью';
    @Input() tags = [
        'В аренду/на продажу',
        'Клининг',
        'Оплата счетов',
        'Подготовка к приезду',
    ];

    @Input() subtitle = 'Индивидуальный подход и особое отношение';

    @Input() description =
        'Оплатим счета или подготовим апартаменты к приезду.  Сдадим вашу недвижимость в аренду или закажем клининг пространства: выберите то, что Вам нужно.';

    @Input() image = 'assets/images/about/about_fourth.jpg';
}
