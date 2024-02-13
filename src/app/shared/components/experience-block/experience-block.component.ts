import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-experience-block',
    standalone: true,
    imports: [SharedModule, TranslocoRootModule],
    templateUrl: './experience-block.component.html',
    styleUrl: './experience-block.component.scss',
})
export class ExperienceBlockComponent {
    @Input() subtitle = '';

    colorBlack = true;

    fill = '#be7e00';
}
