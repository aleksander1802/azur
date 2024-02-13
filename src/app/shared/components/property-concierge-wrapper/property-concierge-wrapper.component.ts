import { Component, Input } from '@angular/core';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-property-concierge-wrapper',
    standalone: true,
    imports: [TranslocoRootModule],
    templateUrl: './property-concierge-wrapper.component.html',
    styleUrl: './property-concierge-wrapper.component.scss',
})
export class PropertyConciergeWrapperComponent {
    @Input() title = '';
    @Input() tags: string[] = [];
    
    @Input() tags2: string[] = [];

    @Input() subtitle = '';

    @Input() description = '';

    @Input() image = '';
}
