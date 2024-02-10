import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-close-button',
    standalone: true,
    imports: [],
    templateUrl: './svg-close-button.component.html',
    styleUrl: './svg-close-button.component.scss',
})
export class SvgCloseButtonComponent {
    @Input() width = '18';
    @Input() height = '18';
    @Input() color = 'white';
}
