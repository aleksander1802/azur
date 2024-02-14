import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SellOrRent } from 'src/app/shared/models/home.types';
import { CrumbsComponent } from '../../../crumbs/crumbs.component';
import { ExclusiveSvgComponent } from '../../../exclusive-svg/exclusive-svg.component';
import { ChoiceSvgComponent } from '../../../choice-svg/choice-svg.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
    selector: 'app-detailed-first-screen',
    standalone: true,
    imports: [
        CommonModule,
        CrumbsComponent,
        ExclusiveSvgComponent,
        ChoiceSvgComponent,
        SharedModule,
        TranslocoRootModule,
    ],
    templateUrl: './detailed-first-screen.component.html',
    styleUrl: './detailed-first-screen.component.scss',
})
export class DetailedFirstScreenComponent {
    @Input() data: SellOrRent | null = null;

    currentCrumbsTitleSell = 'crumbs_title_detailed_sell';
    currentCrumbsTitleRent = 'crumbs_title_detailed_rent';
}
