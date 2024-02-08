import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-property-concierge-wrapper',
    standalone: true,
    imports: [],
    templateUrl: './property-concierge-wrapper.component.html',
    styleUrl: './property-concierge-wrapper.component.scss',
})
export class PropertyConciergeWrapperComponent {
    @Input() title = '';
    @Input() tags: string[] = [];

    @Input() subtitle = '';

    @Input() description = '';

    @Input() image = '';
}
