import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';
import { CrumbsComponent } from '../../../crumbs/crumbs.component';
import { ExclusiveSvgComponent } from '../../../exclusive-svg/exclusive-svg.component';
import { ChoiceSvgComponent } from '../../../choice-svg/choice-svg.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-detailed-first-screen',
    standalone: true,
    imports: [
        CommonModule,
        CrumbsComponent,
        ExclusiveSvgComponent,
        ChoiceSvgComponent,
        SharedModule,
    ],
    templateUrl: './detailed-first-screen.component.html',
    styleUrl: './detailed-first-screen.component.scss',
})
export class DetailedFirstScreenComponent {
    @Input() data: SellOrRent | null = null;

    currentCrumbsTitleSell = 'Продажа';
    currentCrumbsTitleRent = 'Аренда';
}
