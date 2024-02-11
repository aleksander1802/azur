import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-experience-block',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './experience-block.component.html',
    styleUrl: './experience-block.component.scss',
})
export class ExperienceBlockComponent {
    @Input() subtitle = '';

    colorBlack = true;

    fill = '#be7e00';
}
