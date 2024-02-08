import { Component } from '@angular/core';

@Component({
    selector: 'app-concierge-service-second-screen',
    templateUrl: './concierge-service-second-screen.component.html',
    styleUrl: './concierge-service-second-screen.component.scss',
})
export class ConciergeServiceSecondScreenComponent {
    conciergeServiceTitle = 'Консьерж-сервис с особым подходом';

    conciergeServiceTags = [
        'Трансферы',
        'Покупка вещей по запросу',
        'Бронь билетов',
        'Подбор ресторанов',
    ];

    conciergeServiceDescription =
        'Наши клиенты остаются довольны благодаря особому подходу и вниманию к деталям и запросам. Всё, что требуется для идеального путешествия клиентов Azur life будет организовано за Вас.';

    conciergeServiceImage = 'assets/images/concierge/concierge_second.jpg';
}
