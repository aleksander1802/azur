import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObjectDetails } from 'src/app/shared/models/home.types';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-detailed-fourth-screen',
    standalone: true,
    imports: [CommonModule, TranslocoRootModule],
    templateUrl: './detailed-fourth-screen.component.html',
    styleUrl: './detailed-fourth-screen.component.scss',
})
export class DetailedFourthScreenComponent {
    details: ObjectDetails = {
        common: {
            area: 1000,
            rooms: 7,
            heating: 'detailed_fourth_title_common_heating',
            hot_water: 'detailed_fourth_title_common_hot_water',
            state: 'detailed_fourth_title_common_state',
            landmarks: 'detailed_fourth_title_common_landmarks',
            view: 'detailed_fourth_title_common_view',
        },
        services: [
            'detailed_fourth_left_services_heating',
            'detailed_fourth_left_services_glass',
            'detailed_fourth_left_services_tub',
            'detailed_fourth_left_services_marquise',
            'detailed_fourth_left_services_barbecue',
            'detailed_fourth_left_services_concierge',
            'detailed_fourth_left_services_pool',
            'detailed_fourth_left_services_view',
            'detailed_fourth_left_services_hearth',
            'detailed_fourth_left_services_net',
            'detailed_fourth_left_services_furniture',
            'detailed_fourth_left_services_watering',
            'detailed_fourth_left_services_elevator',
            'detailed_fourth_left_services_intercom',
            'detailed_fourth_left_services_sauna',
        ],
        distance: {
            airport: 'detailed_fourth_forty_minutes',
            bus_stop: 'detailed_fourth_ten_minutes',
            sea: 'detailed_fourth_five_minutes',
            beach: 'detailed_fourth_five_minutes',
            highway: 'detailed_fourth_fifteen_minutes',
            city_center: 'detailed_fourth_ten_minutes',
            park: 'detailed_fourth_five_minutes',
            seaport: 'detailed_fourth_ten_minutes',
        },
        description: 'detailed_fourth_description',
    };
}
