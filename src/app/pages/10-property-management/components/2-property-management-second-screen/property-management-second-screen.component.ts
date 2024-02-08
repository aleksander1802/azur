import { Component } from '@angular/core';

@Component({
    selector: 'app-property-management-second-screen',
    templateUrl: './property-management-second-screen.component.html',
    styleUrl: './property-management-second-screen.component.scss',
})
export class PropertyManagementSecondScreenComponent {
    propertyTitle = 'Управление недвижимостью';
    propertyTags = [
        'В аренду/на продажу',
        'Клининг',
        'Оплата счетов',
        'Подготовка к приезду',
    ];

    propertySubtitle = 'Индивидуальный подход и особое отношение';

    propertyDescription =
        'Оплатим счета или подготовим апартаменты к приезду.  Сдадим вашу недвижимость в аренду или закажем клининг пространства: выберите то, что Вам нужно.';

    propertyImage = 'assets/images/about/about_fourth.jpg';
}
