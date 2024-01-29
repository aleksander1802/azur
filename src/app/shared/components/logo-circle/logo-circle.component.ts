import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-logo-circle',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logo-circle.component.html',
    styleUrl: './logo-circle.component.scss',
})
export class LogoCircleComponent {
    @Input() fill = 'white';
}
