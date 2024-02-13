import { Component } from '@angular/core';

@Component({
    selector: 'app-concierge-service-second-screen',
    templateUrl: './concierge-service-second-screen.component.html',
    styleUrl: './concierge-service-second-screen.component.scss',
})
export class ConciergeServiceSecondScreenComponent {
    conciergeServiceTitle = 'property_concierge_concierge_title';

    subtitle = 'experience_block_subtitle_concierge';

    conciergeServiceTags = [
        'property_concierge_concierge_tag1',
        'property_concierge_concierge_tag2',
    ];

    conciergeServiceTags2 = [
        'property_concierge_concierge_tag3',
        'property_concierge_concierge_tag4',
    ];

    conciergeServiceDescription = 'property_concierge_concierge_description';

    conciergeServiceImage = 'assets/images/concierge/concierge_second.jpg';
}
