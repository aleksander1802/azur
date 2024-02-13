import { Component } from '@angular/core';

@Component({
    selector: 'app-property-management-second-screen',
    templateUrl: './property-management-second-screen.component.html',
    styleUrl: './property-management-second-screen.component.scss',
})
export class PropertyManagementSecondScreenComponent {
    subtitle = 'experience_block_subtitle_property';

    propertyTitle = 'property_concierge_property_title';

    propertyTags = [
        'property_concierge_property_tag1',
        'property_concierge_property_tag2',
    ];

    propertyTags2 = [
        'property_concierge_property_tag3',
        'property_concierge_property_tag4',
    ];

    propertySubtitle = 'property_concierge_property_subtitle';

    propertyDescription = 'property_concierge_property_description';

    propertyImage = 'assets/images/about/about_fourth.jpg';
}
