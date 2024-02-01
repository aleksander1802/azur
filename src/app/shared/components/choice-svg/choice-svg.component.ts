import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-choice-svg',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './choice-svg.component.html',
    styleUrl: './choice-svg.component.scss',
})
export class ChoiceSvgComponent {
    @Input() width = '63';
    @Input() height = '83';
}
