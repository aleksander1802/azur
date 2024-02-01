import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-exclusive-svg',
    standalone: true,
    imports: [],
    templateUrl: './exclusive-svg.component.html',
    styleUrl: './exclusive-svg.component.scss',
})
export class ExclusiveSvgComponent {
    @Input() width = '71';
    @Input() height = '94';
}
