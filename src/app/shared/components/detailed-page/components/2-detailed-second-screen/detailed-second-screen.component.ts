import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChoiceSvgComponent } from '../../../choice-svg/choice-svg.component';
import { ExclusiveSvgComponent } from '../../../exclusive-svg/exclusive-svg.component';

@Component({
    selector: 'app-detailed-second-screen',
    standalone: true,
    imports: [
        CommonModule,
        ExclusiveSvgComponent,
        ChoiceSvgComponent,
        SharedModule,
    ],
    templateUrl: './detailed-second-screen.component.html',
    styleUrl: './detailed-second-screen.component.scss',
})
export class DetailedSecondScreenComponent {
    @Input() data: SellOrRent | null = null;
}
