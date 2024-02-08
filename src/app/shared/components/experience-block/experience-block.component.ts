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
    @Input() subtitle = 'Управляем Вашей недвижимостью';

    colorBlack = true;

    fill = '#be7e00';
}
